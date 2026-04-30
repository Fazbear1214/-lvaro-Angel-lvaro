const philosopherData = window.PHILOSOPHY_DATA?.philosophers || [];
const body = document.body;
const themeToggle = document.getElementById("theme-toggle");
const profileRoot = document.getElementById("philosopher-profile");
const readingProgressBar = document.getElementById("reading-progress-bar");

let selectedPhilosopher = null;
let profileChatHistory = [];

function normalizeSlug(value) {
    return value
        .normalize("NFD")
        .replace(/[\u0300-\u036f]/g, "")
        .toLowerCase()
        .replace(/[^a-z0-9]+/g, "-")
        .replace(/(^-|-$)/g, "");
}

function applyTheme() {
    body.classList.toggle("dark-mode", localStorage.getItem("philo-theme") === "dark");
}

function setTheme() {
    const nextTheme = localStorage.getItem("philo-theme") === "dark" ? "light" : "dark";
    localStorage.setItem("philo-theme", nextTheme);
    applyTheme();
}

function getSelectedPhilosopher() {
    const params = new URLSearchParams(window.location.search);
    const id = params.get("id") || philosopherData[0]?.id;
    return philosopherData.find((item) => item.id === id);
}

function renderInfobox(philosopher) {
    const rows = [
        ["Periodo", philosopher.period],
        ["Fechas", philosopher.years],
        ["Lugar", philosopher.birthplace],
        ["Ámbito", philosopher.school],
        ["Época", philosopher.era || "General"]
    ];

    return `
        <aside class="profile-infobox">
            <img src="${philosopher.image}" alt="${philosopher.alt}">
            <dl>
                ${rows.map(([label, value]) => `
                    <div>
                        <dt>${label}</dt>
                        <dd>${value}</dd>
                    </div>
                `).join("")}
            </dl>
        </aside>
    `;
}

function renderSections(philosopher) {
    return philosopher.sections.map((section) => {
        const slug = normalizeSlug(section.title);
        return `
            <section class="wiki-section" id="${slug}">
                <h2>${section.title}</h2>
                ${section.paragraphs.map((paragraph) => `<p>${paragraph}</p>`).join("")}
            </section>
        `;
    }).join("");
}

function renderArticleNav(philosopher) {
    return `
        <nav class="article-index" aria-label="Índice del artículo">
            <p class="eyebrow">Índice</p>
            ${philosopher.sections.map((section) => `
                <a href="#${normalizeSlug(section.title)}">${section.title}</a>
            `).join("")}
        </nav>
    `;
}

function renderListBlock(title, items) {
    if (!items?.length) {
        return "";
    }

    return `
        <section class="detail-block">
            <p class="eyebrow">${title}</p>
            <ul>
                ${items.map((item) => `<li>${item}</li>`).join("")}
            </ul>
        </section>
    `;
}

function renderTimeline(philosopher) {
    if (!philosopher.timeline?.length) {
        return "";
    }

    return `
        <section class="detail-block">
            <p class="eyebrow">Cronología</p>
            <div class="mini-timeline">
                ${philosopher.timeline.map(([date, event]) => `
                    <div>
                        <strong>${date}</strong>
                        <span>${event}</span>
                    </div>
                `).join("")}
            </div>
        </section>
    `;
}

function renderProfileChat(philosopher) {
    return `
        <section class="section-block profile-chat-panel">
            <div class="section-heading">
                <div>
                    <p class="eyebrow">Chat contextual</p>
                    <h2>Pregunta sobre ${philosopher.name}</h2>
                </div>
                <p>El chat usará Gemini y el contexto de esta ficha para resolver dudas rápidas.</p>
            </div>
            <div class="profile-chat-box" id="profile-chat-box" aria-live="polite">
                <div class="chat-message bot">Puedes preguntarme por sus conceptos, obras, contexto o diferencias con otros autores.</div>
            </div>
            <form class="profile-chat-form" id="profile-chat-form">
                <label class="sr-only" for="profile-chat-input">Pregunta sobre ${philosopher.name}</label>
                <input id="profile-chat-input" type="text" placeholder="Pregunta algo sobre ${philosopher.name}..." autocomplete="off">
                <button class="btn btn-primary" type="submit">Preguntar</button>
            </form>
        </section>
    `;
}

function renderArticle(philosopher) {
    const facts = philosopher.facts.map((fact) => `<li>${fact}</li>`).join("");
    const related = philosopherData
        .filter((item) => item.id !== philosopher.id)
        .slice(0, 3)
        .map((item) => `
            <a class="related-card" href="filosofo.html?id=${item.id}">
                <img src="${item.image}" alt="${item.alt}">
                <span>${item.name}</span>
            </a>
        `)
        .join("");

    document.title = `${philosopher.name} | Agora Filosófica`;

    profileRoot.innerHTML = `
        <section class="section-grid profile-hero">
            <div class="profile-hero-copy">
                <p class="eyebrow">${philosopher.period}</p>
                <h2>${philosopher.name}</h2>
                <p class="profile-subtitle">${philosopher.subtitle}</p>
                <p>${philosopher.lead}</p>
                <div class="tag-row">
                    ${(philosopher.themes || []).map((theme) => `<span>${theme}</span>`).join("")}
                </div>
                <div class="hero-actions">
                    <a class="btn btn-primary" href="quiz.html?filosofo=${philosopher.id}">Practicar sobre ${philosopher.name}</a>
                    <a class="btn btn-secondary" href="comparador.html?a=${philosopher.id}">Comparar</a>
                    <a class="btn btn-secondary" href="index.html#filosofos">Volver a filósofos</a>
                </div>
            </div>
            ${renderInfobox(philosopher)}
        </section>

        <section class="section-block article-layout">
            <article class="wiki-article">
                ${renderSections(philosopher)}
            </article>
            <aside class="quick-facts">
                ${renderArticleNav(philosopher)}
                <div class="quick-facts-card">
                    <p class="eyebrow">Datos clave</p>
                    <h3>Para recordar</h3>
                    <ul>${facts}</ul>
                </div>
                ${renderListBlock("Conceptos", philosopher.concepts)}
                ${renderListBlock("Obras y fuentes", philosopher.works)}
                ${renderTimeline(philosopher)}
            </aside>
        </section>

        ${renderProfileChat(philosopher)}

        <section class="section-block related-section">
            <div class="section-heading">
                <div>
                    <p class="eyebrow">También puedes leer</p>
                    <h2>Otros perfiles</h2>
                </div>
            </div>
            <div class="related-grid">${related}</div>
        </section>
    `;

    bindProfileChat(philosopher);
    updateReadingProgress();
}

function addProfileMessage(text, role) {
    const box = document.getElementById("profile-chat-box");
    const div = document.createElement("div");
    div.className = `chat-message ${role}`;
    div.textContent = text;
    box.appendChild(div);
    box.scrollTop = box.scrollHeight;
    return div;
}

function isChatUnavailableResponse(response, data) {
    return [404, 405, 501].includes(response.status) && !data.error;
}

async function handleProfileChat(event) {
    event.preventDefault();

    const input = document.getElementById("profile-chat-input");
    const message = input.value.trim();

    if (!message || !selectedPhilosopher) {
        return;
    }

    addProfileMessage(message, "user");
    input.value = "";
    const thinking = addProfileMessage("Pensando...", "bot");

    const context = [
        `Estás respondiendo sobre ${selectedPhilosopher.name}.`,
        selectedPhilosopher.lead,
        ...(selectedPhilosopher.concepts || []).map((concept) => `Concepto clave: ${concept}`),
        ...selectedPhilosopher.sections.flatMap((section) => [
            section.title,
            ...section.paragraphs
        ])
    ].join("\n");

    try {
        const meta = document.querySelector('meta[name="chat-api"]');
        const apiUrl = meta?.getAttribute("content")?.trim() || "/api/chat";

        const response = await fetch(apiUrl, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                message: `${context}\n\nPregunta del estudiante: ${message}`,
                language: "es",
                history: profileChatHistory
            })
        });
        const data = await response.json().catch(() => ({}));

        if (!response.ok || !data.reply) {
            if (isChatUnavailableResponse(response, data)) {
                throw new Error("chat-unavailable");
            }
            throw new Error(data.error || "chat-error");
        }

        thinking.textContent = data.reply;
        profileChatHistory.push(
            { role: "user", parts: [{ text: message }] },
            { role: "model", parts: [{ text: data.reply }] }
        );
        profileChatHistory = profileChatHistory.slice(-8);
    } catch (error) {
        thinking.textContent = error.message === "chat-unavailable"
            ? "El chat no está disponible aquí. En GitHub Pages no se ejecuta el servidor (/api/chat)."
            : "No he podido consultar Gemini ahora mismo. Prueba de nuevo en unos segundos.";
    }
}

function bindProfileChat() {
    document.getElementById("profile-chat-form")?.addEventListener("submit", handleProfileChat);
}

function renderMissingState() {
    profileRoot.innerHTML = `
        <section class="section-block">
            <p class="eyebrow">Perfil no encontrado</p>
            <h2>No encuentro ese filósofo</h2>
            <p>Vuelve a la lista principal y elige una ficha disponible.</p>
            <div class="hero-actions">
                <a class="btn btn-primary" href="index.html#filosofos">Ver filósofos</a>
            </div>
        </section>
    `;
}

function updateReadingProgress() {
    if (!readingProgressBar) {
        return;
    }

    const scrollTop = window.scrollY;
    const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
    const progress = maxScroll > 0 ? Math.min(100, Math.max(0, (scrollTop / maxScroll) * 100)) : 0;
    readingProgressBar.style.width = `${progress}%`;
}

themeToggle?.addEventListener("click", setTheme);
window.addEventListener("scroll", updateReadingProgress, { passive: true });
window.addEventListener("resize", updateReadingProgress);
applyTheme();

selectedPhilosopher = getSelectedPhilosopher();

if (selectedPhilosopher) {
    renderArticle(selectedPhilosopher);
} else {
    renderMissingState();
}
