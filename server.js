const http = require("http");
const fs = require("fs");
const path = require("path");

const rootDir = __dirname;
const port = Number(process.env.PORT || 3000);

function loadEnv() {
    const envPath = path.join(rootDir, ".env");

    if (!fs.existsSync(envPath)) {
        return;
    }

    const lines = fs.readFileSync(envPath, "utf8").split(/\r?\n/);

    for (const line of lines) {
        const trimmed = line.trim();

        if (!trimmed || trimmed.startsWith("#")) {
            continue;
        }

        const separatorIndex = trimmed.indexOf("=");

        if (separatorIndex === -1) {
            continue;
        }

        const key = trimmed.slice(0, separatorIndex).trim();
        const value = trimmed.slice(separatorIndex + 1).trim();

        if (key && !process.env[key]) {
            process.env[key] = value;
        }
    }
}

loadEnv();

const mimeTypes = {
    ".html": "text/html; charset=utf-8",
    ".css": "text/css; charset=utf-8",
    ".js": "text/javascript; charset=utf-8",
    ".svg": "image/svg+xml",
    ".png": "image/png",
    ".jpg": "image/jpeg",
    ".jpeg": "image/jpeg",
    ".webp": "image/webp",
    ".ico": "image/x-icon"
};

function sendJson(response, statusCode, payload) {
    response.writeHead(statusCode, {
        "Content-Type": "application/json; charset=utf-8",
        "Cache-Control": "no-store"
    });
    response.end(JSON.stringify(payload));
}

function readRequestBody(request) {
    return new Promise((resolve, reject) => {
        let body = "";

        request.on("data", (chunk) => {
            body += chunk;

            if (body.length > 32_000) {
                request.destroy();
                reject(new Error("request-too-large"));
            }
        });

        request.on("end", () => resolve(body));
        request.on("error", reject);
    });
}

function normalizeHistory(history) {
    if (!Array.isArray(history)) {
        return [];
    }

    return history
        .slice(-12)
        .map((entry) => {
            const role = entry?.role === "model" ? "model" : "user";
            const text = Array.isArray(entry?.parts)
                ? entry.parts.map((part) => String(part?.text || "")).join("").trim()
                : "";

            if (!text) {
                return null;
            }

            return {
                role,
                parts: [{ text }]
            };
        })
        .filter(Boolean);
}

function buildStudyPrompt(language) {
    const persona = process.env.GEMINI_PERSONA || "Eres Platon, el filosofo griego. Responde con calma y claridad.";
    const studyPrompt = language === "gl"
        ? "Es un asistente de estudo de filosofia para alumnado en galego. Responde con claridade, ton amable e explicacions utiles. Prioriza conceptos filosoficos, contexto historico, comparacions entre autores e exemplos sinxelos. Responde en 120 palabras como maximo salvo que pidan mais detalle. Se a pregunta non e de filosofia, responde brevemente e intenta reconducila ao estudo."
        : "Eres un asistente de estudio de filosofia para alumnado en espanol. Responde con claridad, tono amable y explicaciones utiles. Prioriza conceptos filosoficos, contexto historico, comparaciones entre autores y ejemplos sencillos. Responde en 120 palabras como maximo salvo que pidan mas detalle. Si la pregunta no es de filosofia, responde brevemente e intenta reconducirla al estudio.";

    return `${persona}\n\n${studyPrompt}`;
}

function getGeminiModels() {
    const primaryModel = process.env.GEMINI_MODEL || "gemini-2.5-flash-lite";
    const fallbackModels = String(process.env.GEMINI_FALLBACK_MODELS || "")
        .split(",")
        .map((model) => model.trim())
        .filter(Boolean);

    return [...new Set([primaryModel, ...fallbackModels])];
}

function wait(ms) {
    return new Promise((resolve) => setTimeout(resolve, ms));
}

function getGeminiErrorCode(status, message) {
    const normalizedMessage = String(message || "").toLowerCase();

    if (status === 401 || status === 403) {
        return "gemini-auth-failed";
    }

    if (
        status === 429 ||
        normalizedMessage.includes("quota") ||
        normalizedMessage.includes("rate limit") ||
        normalizedMessage.includes("resource exhausted")
    ) {
        return "gemini-quota-exceeded";
    }

    if (
        status === 503 ||
        normalizedMessage.includes("high demand") ||
        normalizedMessage.includes("overloaded") ||
        normalizedMessage.includes("try again later")
    ) {
        return "gemini-overloaded";
    }

    return "gemini-request-failed";
}

async function generateGeminiReply(apiKey, model, contents) {
    const geminiResponse = await fetch(`https://generativelanguage.googleapis.com/v1beta/models/${model}:generateContent`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "x-goog-api-key": apiKey
        },
        body: JSON.stringify({
            contents,
            generationConfig: {
                temperature: 0.7,
                maxOutputTokens: 320
            }
        })
    });

    const data = await geminiResponse.json().catch(() => ({}));

    if (!geminiResponse.ok) {
        const error = new Error(data?.error?.message || "gemini-request-failed");
        error.status = geminiResponse.status;
        error.code = getGeminiErrorCode(geminiResponse.status, error.message);
        throw error;
    }

    const reply = data?.candidates?.[0]?.content?.parts
        ?.map((part) => part.text || "")
        .join("")
        .trim();

    if (!reply) {
        const error = new Error("empty-gemini-response");
        error.status = 502;
        error.code = "empty-gemini-response";
        throw error;
    }

    return reply;
}

async function handleChat(request, response) {
    if (request.method !== "POST") {
        sendJson(response, 405, { error: "method-not-allowed" });
        return;
    }

    const apiKey = process.env.GEMINI_API_KEY;
    const models = getGeminiModels();

    if (!apiKey) {
        sendJson(response, 500, { error: "missing-api-key" });
        return;
    }

    let payload;

    try {
        payload = JSON.parse(await readRequestBody(request));
    } catch (error) {
        sendJson(response, error.message === "request-too-large" ? 413 : 400, { error: "invalid-request" });
        return;
    }

    const message = String(payload?.message || "").trim();

    if (!message) {
        sendJson(response, 400, { error: "empty-message" });
        return;
    }

    const contents = [
        {
            role: "user",
            parts: [{ text: buildStudyPrompt(payload?.language) }]
        },
        ...normalizeHistory(payload?.history),
        {
            role: "user",
            parts: [{ text: message }]
        }
    ];

    try {
        let lastError;

        for (const model of models) {
            for (let attempt = 0; attempt < 2; attempt += 1) {
                try {
                    const reply = await generateGeminiReply(apiKey, model, contents);
                    sendJson(response, 200, { reply, model });
                    return;
                } catch (error) {
                    lastError = error;

                    if (error.code === "gemini-auth-failed") {
                        break;
                    }

                    if (error.code !== "gemini-overloaded") {
                        break;
                    }

                    await wait(900);
                }
            }

            if (lastError?.code === "gemini-auth-failed") {
                break;
            }
        }

        sendJson(response, lastError?.status || 502, {
            error: lastError?.code || "gemini-network-failed",
            detail: lastError?.message || ""
        });
    } catch (error) {
        sendJson(response, 502, { error: "gemini-network-failed" });
    }
}

function serveStatic(request, response) {
    const requestUrl = new URL(request.url, `http://${request.headers.host}`);
    const pathname = decodeURIComponent(requestUrl.pathname);
    const relativePath = pathname === "/" ? "index.html" : pathname.slice(1);
    const filePath = path.resolve(rootDir, relativePath);
    const pathParts = relativePath.split(/[\\/]/);

    if (
        !(filePath === rootDir || filePath.startsWith(rootDir + path.sep)) ||
        pathParts.some((part) => part.startsWith(".")) ||
        pathParts.includes("server.js")
    ) {
        response.writeHead(403);
        response.end("Forbidden");
        return;
    }

    fs.readFile(filePath, (error, content) => {
        if (error) {
            response.writeHead(404, { "Content-Type": "text/plain; charset=utf-8" });
            response.end("Not found");
            return;
        }

        response.writeHead(200, {
            "Content-Type": mimeTypes[path.extname(filePath).toLowerCase()] || "application/octet-stream"
        });
        response.end(content);
    });
}

const server = http.createServer((request, response) => {
    const requestUrl = new URL(request.url, `http://${request.headers.host}`);

    if (requestUrl.pathname === "/api/chat") {
        handleChat(request, response);
        return;
    }

    serveStatic(request, response);
});

server.listen(port, () => {
    console.log(`Agora Filosofica disponible en http://localhost:${port}`);
});
