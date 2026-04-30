const philosophers = window.PHILOSOPHY_DATA?.philosophers || [];
const quizApp = document.getElementById("quiz-app");
const quizBody = document.body;
const quizThemeToggle = document.getElementById("theme-toggle");
const historyKey = "philo-quiz-history";

let timerId = null;
let quizState = {
    selectedIds: [],
    questions: [],
    index: 0,
    score: 0,
    answered: false,
    difficulty: "all",
    mode: "practice",
    startedAt: null,
    timeLeft: 0
};

function applyQuizTheme() {
    quizBody.classList.toggle("dark-mode", localStorage.getItem("philo-theme") === "dark");
}

function toggleQuizTheme() {
    const nextTheme = localStorage.getItem("philo-theme") === "dark" ? "light" : "dark";
    localStorage.setItem("philo-theme", nextTheme);
    applyQuizTheme();
}

function shuffle(items) {
    return [...items].sort(() => Math.random() - 0.5);
}

function getQuizHistory() {
    try {
        return JSON.parse(localStorage.getItem(historyKey) || "[]");
    } catch (error) {
        return [];
    }
}

function saveQuizResult(result) {
    const history = [result, ...getQuizHistory()].slice(0, 8);
    localStorage.setItem(historyKey, JSON.stringify(history));
}

function formatTime(totalSeconds) {
    const minutes = Math.floor(totalSeconds / 60);
    const seconds = String(totalSeconds % 60).padStart(2, "0");
    return `${minutes}:${seconds}`;
}

function prepareQuestion(question, philosopher) {
    const shuffledOptions = shuffle(question.options.map((option, index) => ({
        option,
        originalIndex: index
    })));

    return {
        ...question,
        difficulty: question.difficulty || "easy",
        philosopher: philosopher.name,
        philosopherId: philosopher.id,
        options: shuffledOptions.map((item) => item.option),
        answer: shuffledOptions.findIndex((item) => item.originalIndex === question.answer)
    };
}

function getInitialSelection() {
    const params = new URLSearchParams(window.location.search);
    const id = params.get("filosofo");

    if (id && philosophers.some((item) => item.id === id)) {
        return [id];
    }

    return philosophers.map((item) => item.id);
}

function renderHistory() {
    const history = getQuizHistory();

    if (!history.length) {
        return `<p class="muted-note">Aún no hay resultados guardados en este navegador.</p>`;
    }

    return `
        <div class="quiz-history-list">
            ${history.map((item) => `
                <div>
                    <strong>${item.score}/${item.total}</strong>
                    <span>${item.percentage}% · ${item.mode} · ${item.difficulty}</span>
                    <small>${item.date}</small>
                </div>
            `).join("")}
        </div>
    `;
}

function renderSelection() {
    clearInterval(timerId);
    const initialSelection = new Set(getInitialSelection());
    const cards = philosophers.map((philosopher) => `
        <label class="quiz-author-card">
            <input type="checkbox" value="${philosopher.id}" ${initialSelection.has(philosopher.id) ? "checked" : ""}>
            <img src="${philosopher.image}" alt="${philosopher.alt}">
            <span>
                <strong>${philosopher.name}</strong>
                <small>${philosopher.subtitle}</small>
            </span>
        </label>
    `).join("");

    quizApp.innerHTML = `
        <div class="quiz-start">
            <div>
                <p class="eyebrow">Test interactivo</p>
                <h2>Elige autores, dificultad y modo</h2>
                <p>Las preguntas salen de las fichas ampliadas. En modo examen tendrás tiempo limitado y el resultado se guardará localmente.</p>
            </div>
            <div class="quiz-toolbar-row">
                <button class="btn btn-secondary" type="button" id="select-all">Seleccionar todos</button>
                <button class="btn btn-secondary" type="button" id="clear-all">Limpiar</button>
            </div>
        </div>

        <div class="quiz-settings">
            <label>
                <span>Dificultad</span>
                <select id="quiz-difficulty">
                    <option value="all">Todas</option>
                    <option value="easy">Fácil</option>
                    <option value="medium">Media</option>
                    <option value="hard">Difícil</option>
                </select>
            </label>
            <label>
                <span>Modo</span>
                <select id="quiz-mode">
                    <option value="practice">Práctica sin tiempo</option>
                    <option value="exam">Examen con tiempo</option>
                </select>
            </label>
        </div>

        <div class="quiz-author-grid">${cards}</div>
        <p class="feedback" id="quiz-selection-feedback" aria-live="polite"></p>
        <div class="hero-actions">
            <button class="btn btn-primary btn-large" type="button" id="start-quiz">Iniciar preguntas</button>
            <a class="btn btn-secondary" href="index.html#actividades">Volver</a>
        </div>

        <aside class="quiz-history">
            <p class="eyebrow">Historial local</p>
            <h3>Últimos resultados</h3>
            ${renderHistory()}
        </aside>
    `;

    document.getElementById("select-all").addEventListener("click", () => {
        document.querySelectorAll(".quiz-author-card input").forEach((input) => {
            input.checked = true;
        });
    });

    document.getElementById("clear-all").addEventListener("click", () => {
        document.querySelectorAll(".quiz-author-card input").forEach((input) => {
            input.checked = false;
        });
    });

    document.getElementById("start-quiz").addEventListener("click", startQuiz);
}

function startQuiz() {
    const selectedIds = [...document.querySelectorAll(".quiz-author-card input:checked")]
        .map((input) => input.value);
    const difficulty = document.getElementById("quiz-difficulty").value;
    const mode = document.getElementById("quiz-mode").value;
    const feedback = document.getElementById("quiz-selection-feedback");

    if (!selectedIds.length) {
        feedback.textContent = "Selecciona al menos un filósofo para empezar.";
        return;
    }

    const questions = philosophers
        .filter((philosopher) => selectedIds.includes(philosopher.id))
        .flatMap((philosopher) => philosopher.questions.map((question) => prepareQuestion(question, philosopher)))
        .filter((question) => difficulty === "all" || question.difficulty === difficulty);

    if (!questions.length) {
        feedback.textContent = "No hay preguntas para esa combinación. Prueba otra dificultad.";
        return;
    }

    quizState = {
        selectedIds,
        questions: shuffle(questions),
        index: 0,
        score: 0,
        answered: false,
        difficulty,
        mode,
        startedAt: Date.now(),
        timeLeft: mode === "exam" ? Math.max(90, questions.length * 35) : 0
    };

    if (mode === "exam") {
        startTimer();
    }

    renderQuestion();
}

function startTimer() {
    clearInterval(timerId);
    timerId = setInterval(() => {
        quizState.timeLeft -= 1;
        const timer = document.getElementById("quiz-timer");

        if (timer) {
            timer.textContent = formatTime(Math.max(0, quizState.timeLeft));
        }

        if (quizState.timeLeft <= 0) {
            clearInterval(timerId);
            renderResults(true);
        }
    }, 1000);
}

function renderQuestion() {
    const question = quizState.questions[quizState.index];
    const progress = `${quizState.index + 1} / ${quizState.questions.length}`;

    quizApp.innerHTML = `
        <div class="quiz-question-head">
            <div>
                <p class="eyebrow">${question.philosopher} · ${question.difficulty}</p>
                <h2>${question.question}</h2>
            </div>
            <div class="quiz-status-stack">
                <span class="quiz-progress">${progress}</span>
                ${quizState.mode === "exam" ? `<span class="quiz-progress timer" id="quiz-timer">${formatTime(quizState.timeLeft)}</span>` : ""}
            </div>
        </div>
        <div class="quiz-answer-grid">
            ${question.options.map((option, index) => `
                <button type="button" data-answer="${index}">${option}</button>
            `).join("")}
        </div>
        <p class="feedback quiz-feedback" id="quiz-feedback" aria-live="polite"></p>
        <div class="hero-actions">
            <button class="btn btn-primary" type="button" id="next-question" hidden>Siguiente</button>
            <button class="btn btn-secondary" type="button" id="restart-selection">Cambiar autores</button>
        </div>
    `;

    document.querySelectorAll("[data-answer]").forEach((button) => {
        button.addEventListener("click", () => handleAnswer(Number(button.dataset.answer)));
    });

    document.getElementById("next-question").addEventListener("click", nextQuestion);
    document.getElementById("restart-selection").addEventListener("click", renderSelection);
}

function handleAnswer(answerIndex) {
    if (quizState.answered) {
        return;
    }

    quizState.answered = true;
    const question = quizState.questions[quizState.index];
    const isCorrect = answerIndex === question.answer;
    const feedback = document.getElementById("quiz-feedback");

    if (isCorrect) {
        quizState.score += 1;
    }

    document.querySelectorAll("[data-answer]").forEach((button) => {
        const currentAnswer = Number(button.dataset.answer);
        button.disabled = true;

        if (currentAnswer === question.answer) {
            button.classList.add("is-correct");
        } else if (currentAnswer === answerIndex) {
            button.classList.add("is-wrong");
        }
    });

    feedback.textContent = `${isCorrect ? "Correcto." : "No exactamente."} ${question.explanation}`;
    document.getElementById("next-question").hidden = false;
}

function nextQuestion() {
    quizState.index += 1;
    quizState.answered = false;

    if (quizState.index >= quizState.questions.length) {
        renderResults(false);
        return;
    }

    renderQuestion();
}

function renderResults(timedOut) {
    clearInterval(timerId);
    const total = quizState.questions.length;
    const percentage = Math.round((quizState.score / total) * 100);
    const elapsedSeconds = Math.max(1, Math.round((Date.now() - quizState.startedAt) / 1000));
    const result = {
        score: quizState.score,
        total,
        percentage,
        mode: quizState.mode === "exam" ? "examen" : "práctica",
        difficulty: quizState.difficulty === "all" ? "todas" : quizState.difficulty,
        date: new Date().toLocaleString("es-ES", { dateStyle: "short", timeStyle: "short" })
    };

    saveQuizResult(result);

    quizApp.innerHTML = `
        <div class="quiz-results">
            <p class="eyebrow">${timedOut ? "Tiempo agotado" : "Resultado"}</p>
            <h2>${quizState.score} de ${total} aciertos</h2>
            <div class="result-dashboard">
                <div class="score-ring">${percentage}%</div>
                <div>
                    <strong>${formatTime(elapsedSeconds)}</strong>
                    <span>tiempo usado</span>
                </div>
                <div>
                    <strong>${result.difficulty}</strong>
                    <span>dificultad</span>
                </div>
                <div>
                    <strong>${result.mode}</strong>
                    <span>modo</span>
                </div>
            </div>
            <p>${percentage >= 80 ? "Muy buen dominio. Puedes subir la dificultad o comparar autores cercanos." : "Buen entrenamiento. Revisa las fichas y repite con menos autores o dificultad más baja."}</p>
            <div class="hero-actions">
                <button class="btn btn-primary" type="button" id="retry-quiz">Repetir</button>
                <button class="btn btn-secondary" type="button" id="choose-again">Elegir autores</button>
                <a class="btn btn-secondary" href="index.html#filosofos">Leer fichas</a>
            </div>
            <aside class="quiz-history">
                <p class="eyebrow">Historial local</p>
                <h3>Últimos resultados</h3>
                ${renderHistory()}
            </aside>
        </div>
    `;

    document.getElementById("retry-quiz").addEventListener("click", () => {
        quizState.questions = shuffle(quizState.questions);
        quizState.index = 0;
        quizState.score = 0;
        quizState.answered = false;
        quizState.startedAt = Date.now();
        quizState.timeLeft = quizState.mode === "exam" ? Math.max(90, quizState.questions.length * 35) : 0;

        if (quizState.mode === "exam") {
            startTimer();
        }

        renderQuestion();
    });
    document.getElementById("choose-again").addEventListener("click", renderSelection);
}

quizThemeToggle?.addEventListener("click", toggleQuizTheme);
applyQuizTheme();
renderSelection();
