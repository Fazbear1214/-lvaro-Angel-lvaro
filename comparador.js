const compareData = window.PHILOSOPHY_DATA?.philosophers || [];
const compareBody = document.body;
const compareThemeToggle = document.getElementById("theme-toggle");
const selectA = document.getElementById("compare-a");
const selectB = document.getElementById("compare-b");
const compareOutput = document.getElementById("compare-output");

function applyCompareTheme() {
    compareBody.classList.toggle("dark-mode", localStorage.getItem("philo-theme") === "dark");
}

function toggleCompareTheme() {
    const nextTheme = localStorage.getItem("philo-theme") === "dark" ? "light" : "dark";
    localStorage.setItem("philo-theme", nextTheme);
    applyCompareTheme();
}

function options(selectedId) {
    return compareData.map((philosopher) => `
        <option value="${philosopher.id}" ${philosopher.id === selectedId ? "selected" : ""}>${philosopher.name}</option>
    `).join("");
}

function getById(id) {
    return compareData.find((philosopher) => philosopher.id === id) || compareData[0];
}

function shortSummary(philosopher) {
    return philosopher.lead.split(". ").slice(0, 2).join(". ") + ".";
}

function list(items) {
    return `<ul>${(items || []).slice(0, 6).map((item) => `<li>${item}</li>`).join("")}</ul>`;
}

function renderColumn(philosopher) {
    return `
        <article class="compare-column">
            <img src="${philosopher.image}" alt="${philosopher.alt}">
            <div>
                <p class="eyebrow">${philosopher.era || philosopher.period}</p>
                <h3>${philosopher.name}</h3>
                <p>${shortSummary(philosopher)}</p>
            </div>
            <dl>
                <div><dt>Periodo</dt><dd>${philosopher.period}</dd></div>
                <div><dt>Ámbito</dt><dd>${philosopher.school}</dd></div>
                <div><dt>Conceptos</dt><dd>${(philosopher.concepts || []).join(", ")}</dd></div>
            </dl>
            <a class="btn btn-secondary" href="filosofo.html?id=${philosopher.id}">Leer ficha</a>
        </article>
    `;
}

function renderComparison() {
    const a = getById(selectA.value);
    const b = getById(selectB.value);
    const sharedThemes = (a.themes || []).filter((theme) => (b.themes || []).includes(theme));
    const contrast = sharedThemes.length
        ? `Comparten interés por ${sharedThemes.join(", ").toLowerCase()}, pero lo trabajan desde contextos y métodos distintos.`
        : `Pertenecen a marcos bastante distintos: ${a.name} se sitúa en ${a.period}, mientras ${b.name} se sitúa en ${b.period}.`;

    compareOutput.innerHTML = `
        <div class="compare-grid">
            ${renderColumn(a)}
            ${renderColumn(b)}
        </div>
        <div class="compare-matrix">
            <article>
                <p class="eyebrow">Contraste rápido</p>
                <h3>Cómo leerlos juntos</h3>
                <p>${contrast}</p>
            </article>
            <article>
                <p class="eyebrow">${a.name}</p>
                <h3>Obras y claves</h3>
                ${list(a.works)}
            </article>
            <article>
                <p class="eyebrow">${b.name}</p>
                <h3>Obras y claves</h3>
                ${list(b.works)}
            </article>
            <article>
                <p class="eyebrow">Ruta sugerida</p>
                <h3>Orden de estudio</h3>
                <p>Empieza por el contexto histórico de cada autor, sigue con sus conceptos principales y termina comparando cómo responderían a una misma pregunta: conocimiento, justicia, libertad o vida buena.</p>
            </article>
        </div>
    `;
}

function init() {
    const params = new URLSearchParams(window.location.search);
    const initialA = params.get("a") || "platon";
    const initialB = params.get("b") || (initialA === "aristoteles" ? "platon" : "aristoteles");

    selectA.innerHTML = options(initialA);
    selectB.innerHTML = options(initialB);
    selectA.addEventListener("change", renderComparison);
    selectB.addEventListener("change", renderComparison);
    renderComparison();
}

compareThemeToggle?.addEventListener("click", toggleCompareTheme);
applyCompareTheme();
init();
