const translations = {
    es: {
        siteTitle: "Agora Filosófica",
        brandOverline: "Portal de estudio",
        navHome: "Inicio",
        navPhilosophers: "Filósofos",
        navCurrents: "Corrientes",
        navLibrary: "Biblioteca",
        navActivities: "Actividades",
        navRoute: "Ruta",
        heroEyebrow: "Pensar mejor también se entrena",
        heroTitle: "Una web para estudiar filosofía sin perderte entre bloques eternos de texto",
        heroText: "Explora autores, corrientes, lecturas, actividades y una ruta clara de estudio en una experiencia más visual, más cómoda y mucho más viva.",
        heroPrimary: "Empezar ruta",
        heroSecondary: "Ver lecturas",
        statAuthorsValue: "12+",
        statAuthorsLabel: "autores para comparar",
        statThemesValue: "6",
        statThemesLabel: "rutas temáticas",
        statPracticeValue: "3",
        statPracticeLabel: "bloques de práctica",
        heroCardLabel: "Tema destacado",
        heroCardTitle: "Del mito a la razón",
        heroCardText: "Comprende cómo nace la filosofía y por qué sigue siendo útil para leer el presente.",
        miniLibraryLabel: "Biblioteca viva",
        miniLibraryTitle: "Lecturas esenciales",
        miniPracticeLabel: "Aprendizaje activo",
        miniPracticeTitle: "Práctica y repaso",
        portalEyebrow: "Portal organizado",
        portalTitle: "Cada bloque tiene una función distinta para estudiar mejor",
        portalText: "Ya no tendrás teoría, actividades y recursos mezclados. La página se divide en módulos claros para leer, comparar, practicar y avanzar con orden.",
        philosophersEyebrow: "Autores clave",
        philosophersTitle: "Filósofos para empezar con contexto y contraste",
        philosophersText: "Una primera selección para estudiar ideas centrales sin quedarte solo en nombres sueltos.",
        currentsEyebrow: "Conceptos y corrientes",
        currentsTitle: "Ramas para ordenar las preguntas que estudia la filosofía",
        currentsText: "Relaciona autores y problemas: qué es conocer, cómo actuar, cómo pensar la realidad o cómo organizar la vida en común.",
        libraryEyebrow: "Lecturas esenciales",
        libraryTitle: "Una biblioteca base para leer filosofía con criterio",
        libraryText: "Obras seleccionadas para empezar a construir una base sólida, con una pista rápida sobre qué aporta cada lectura.",
        activitiesEyebrow: "Práctica y memoria",
        activitiesTitle: "Activa lo aprendido con ejercicios rápidos",
        activitiesText: "Repasa ideas clave con pequeñas actividades pensadas para fijar conceptos sin salir de la página.",
        quizTag: "Quiz rápido",
        quizQuestion: "¿Quién fue el maestro de Platón?",
        quizOptionA: "Aristóteles",
        quizOptionB: "Sócrates",
        quizOptionC: "Nietzsche",
        phraseTag: "Completa la frase",
        phrasePrompt: "“Solo sé que no sé ____”",
        phraseButton: "Comprobar",
        phrasePlaceholder: "Escribe tu respuesta",
        vfTag: "Verdadero o falso",
        vfQuestion: "Aristóteles defendía observar el mundo real.",
        vfTrue: "Verdadero",
        vfFalse: "Falso",
        routeEyebrow: "Ruta de estudio",
        routeTitle: "Una secuencia simple para no estudiar filosofía al azar",
        routeText: "Sigue un recorrido progresivo desde las preguntas fundacionales hasta los debates modernos.",
        footerTitle: "Agora Filosófica · Proyecto visual para estudiar filosofía",
        footerText: "Contenido organizado para leer, comparar ideas, practicar y preparar una futura integración con IA.",
        chatFab: "Chat IA",
        chatKicker: "Asistente de estudio",
        chatTitle: "Chat filosófico",
        chatStatus: "Chat conectado a Gemini. Añade tu API key para activarlo desde esta misma web.",
        chatInputLabel: "Escribe tu pregunta",
        chatPlaceholder: "Haz una pregunta sobre filosofía...",
        chatButton: "Enviar",
        chatWelcome: "Hola. Estoy listo para ayudarte a estudiar filosofía con Gemini. Añade tu API key en gemini-config.js y podré responder con IA real.",
        chatThinking: "Pensando...",
        chatConfigError: "Falta la API key de Gemini. Abre gemini-config.js y pega tu clave en geminiApiKey.",
        chatQuotaError: "Gemini no ha aceptado la petición. Puede ser un problema de cuota, clave o límites de la cuenta.",
        chatNetworkError: "No he podido contactar con Gemini. Revisa la clave, la conexión o los límites de la API.",
        quizCorrect: "Correcto. Sócrates fue el maestro de Platón.",
        quizWrong: "Incorrecto. Intenta otra vez.",
        phraseCorrect: "Correcto. Es una frase asociada a Sócrates.",
        phraseWrong: "Todavía no. Pista: empieza por N.",
        vfCorrect: "Correcto. Aristóteles dio mucha importancia a la observación.",
        vfWrong: "Incorrecto. Aristóteles sí defendía estudiar el mundo real.",
        philosophers: [
            {
                name: "Sócrates",
                subtitle: "El arte de preguntar",
                text: "Convirtió el diálogo en una herramienta de pensamiento crítico y empujó a revisar creencias cómodas.",
                image: "assets/socrates.svg",
                alt: "Busto clásico iluminado lateralmente"
            },
            {
                name: "Platón",
                subtitle: "Ideas, justicia y educación",
                text: "Pensó la relación entre verdad, política y formación humana a través de imágenes filosóficas poderosas.",
                image: "assets/plato.svg",
                alt: "Escultura clásica en una galería"
            },
            {
                name: "Aristóteles",
                subtitle: "Observar para comprender",
                text: "Ordenó campos enteros del saber y puso el foco en la experiencia, la lógica y la virtud.",
                image: "assets/aristotle.svg",
                alt: "Biblioteca con escultura y columnas"
            }
        ],
        currents: [
            {
                title: "Metafísica",
                meta: "Ser, realidad y existencia",
                text: "Pregunta qué significa que algo exista y cuáles son las estructuras más profundas del mundo."
            },
            {
                title: "Ética",
                meta: "Acción y responsabilidad",
                text: "Explora cómo vivir bien, qué hace justa una decisión y por qué una acción puede ser valiosa."
            },
            {
                title: "Epistemología",
                meta: "Saber y justificación",
                text: "Analiza qué cuenta como conocimiento, cómo se valida y hasta dónde llegan nuestros límites."
            },
            {
                title: "Filosofía política",
                meta: "Poder, justicia y comunidad",
                text: "Estudia el Estado, la libertad, los derechos y las formas de organizar la convivencia."
            }
        ],
        library: [
            {
                title: "La República",
                author: "Platón",
                text: "Ideal para entrar en justicia, educación y el célebre mito de la caverna.",
                image: "assets/ethics-card-v2.svg?v=1",
                alt: "Libro abierto con luz cálida"
            },
            {
                title: "Ética a Nicómaco",
                author: "Aristóteles",
                text: "Clave para entender cómo funciona el conocimiento y cuáles son sus condiciones.",
                image: "assets/library-books.svg",
                alt: "Estantería con libros antiguos"
            },
            {
                title: "Crítica de la razón pura",
                author: "Immanuel Kant",
                text: "Clave para entender cómo funciona el conocimiento y cuáles son sus condiciones.",
                image: "assets/library-books.svg",
                alt: "Estantería con libros antiguos"
            },
            {
                title: "Así habló Zaratustra",
                author: "Friedrich Nietzsche",
                text: "Una lectura intensa para pensar la moral, la creación de valores y la crítica cultural.",
                image: "assets/study-notes.svg",
                alt: "Manuscrito antiguo junto a libros"
            }
        ],
        route: [
            {
                step: "01",
                title: "Empieza por Grecia",
                text: "Sitúa a Sócrates, Platón y Aristóteles para entender el origen de muchas preguntas filosóficas."
            },
            {
                step: "02",
                title: "Ordena las ramas",
                text: "Separa ética, metafísica, epistemología y política para no estudiar conceptos mezclados."
            },
            {
                step: "03",
                title: "Lee textos guiados",
                text: "Alterna fragmentos breves con ideas clave para relacionar teoría y lectura real."
            },
            {
                step: "04",
                title: "Practica y pregunta",
                text: "Usa actividades y el chat para comprobar qué entiendes y qué necesitas repasar."
            }
        ]
    },
    gl: {
        siteTitle: "Ágora Filosófica",
        brandOverline: "Portal de estudo",
        navHome: "Inicio",
        navPhilosophers: "Filósofos",
        navCurrents: "Correntes",
        navLibrary: "Biblioteca",
        navActivities: "Actividades",
        navRoute: "Ruta",
        heroEyebrow: "Pensar mellor tamén se adestra",
        heroTitle: "Unha web para estudar filosofía sen perderte entre bloques eternos de texto",
        heroText: "Explora autores, correntes, lecturas, actividades e unha ruta clara de estudo nunha experiencia máis visual, máis cómoda e moito máis viva.",
        heroPrimary: "Comezar ruta",
        heroSecondary: "Ver lecturas",
        statAuthorsValue: "12+",
        statAuthorsLabel: "autores para comparar",
        statThemesValue: "6",
        statThemesLabel: "rutas temáticas",
        statPracticeValue: "3",
        statPracticeLabel: "bloques de práctica",
        heroCardLabel: "Tema destacado",
        heroCardTitle: "Do mito á razón",
        heroCardText: "Comprende como nace a filosofía e por que segue sendo útil para ler o presente.",
        miniLibraryLabel: "Biblioteca viva",
        miniLibraryTitle: "Lecturas esenciais",
        miniPracticeLabel: "Aprendizaxe activa",
        miniPracticeTitle: "Práctica e repaso",
        portalEyebrow: "Portal organizado",
        portalTitle: "Cada bloque ten unha función distinta para estudar mellor",
        portalText: "Xa non terás teoría, actividades e recursos mesturados. A páxina divídese en módulos claros para ler, comparar, practicar e avanzar con orde.",
        philosophersEyebrow: "Autores clave",
        philosophersTitle: "Filósofos para comezar con contexto e contraste",
        philosophersText: "Unha primeira selección para estudar ideas centrais sen quedar só con nomes soltos.",
        currentsEyebrow: "Conceptos e correntes",
        currentsTitle: "Ramas para ordenar as preguntas que estuda a filosofía",
        currentsText: "Relaciona autores e problemas: que é coñecer, como actuar, como pensar a realidade ou como organizar a vida en común.",
        libraryEyebrow: "Lecturas esenciais",
        libraryTitle: "Unha biblioteca base para ler filosofía con criterio",
        libraryText: "Obras seleccionadas para comezar a construír unha base sólida, cunha pista rápida sobre o que achega cada lectura.",
        activitiesEyebrow: "Práctica e memoria",
        activitiesTitle: "Activa o aprendido con exercicios rápidos",
        activitiesText: "Repasa ideas clave con pequenas actividades pensadas para fixar conceptos sen saír da páxina.",
        quizTag: "Quiz rápido",
        quizQuestion: "Quen foi o mestre de Platón?",
        quizOptionA: "Aristóteles",
        quizOptionB: "Sócrates",
        quizOptionC: "Nietzsche",
        phraseTag: "Completa a frase",
        phrasePrompt: "“Só sei que non sei ____”",
        phraseButton: "Comprobar",
        phrasePlaceholder: "Escribe a túa resposta",
        vfTag: "Verdadeiro ou falso",
        vfQuestion: "Aristóteles defendía observar o mundo real.",
        vfTrue: "Verdadeiro",
        vfFalse: "Falso",
        routeEyebrow: "Ruta de estudo",
        routeTitle: "Unha secuencia simple para non estudar filosofía ao azar",
        routeText: "Segue un percorrido progresivo desde as preguntas fundacionais ata os debates modernos.",
        footerTitle: "Ágora Filosófica · Proxecto visual para estudar filosofía",
        footerText: "Contido organizado para ler, comparar ideas, practicar e preparar unha futura integración con IA.",
        chatFab: "Chat IA",
        chatKicker: "Asistente de estudo",
        chatTitle: "Chat filosófico",
        chatStatus: "Chat conectado a Gemini. Engade a túa API key para activalo desde esta mesma web.",
        chatInputLabel: "Escribe a túa pregunta",
        chatPlaceholder: "Fai unha pregunta sobre filosofía...",
        chatButton: "Enviar",
        chatWelcome: "Ola. Estou listo para axudarche a estudar filosofía con Gemini. Engade a túa API key en gemini-config.js e poderei responder con IA real.",
        chatThinking: "Pensando...",
        chatConfigError: "Falta a API key de Gemini. Abre gemini-config.js e pega a túa clave en geminiApiKey.",
        chatQuotaError: "Gemini non aceptou a petición. Pode ser un problema de cota, clave ou límites da conta.",
        chatNetworkError: "Non puiden contactar con Gemini. Revisa a clave, a conexión ou os límites da API.",
        quizCorrect: "Correcto. Sócrates foi o mestre de Platón.",
        quizWrong: "Incorrecto. Téntao outra vez.",
        phraseCorrect: "Correcto. É unha frase asociada a Sócrates.",
        phraseWrong: "Aínda non. Pista: empeza por N.",
        vfCorrect: "Correcto. Aristóteles deulle moita importancia á observación.",
        vfWrong: "Incorrecto. Aristóteles si defendía estudar o mundo real.",
        philosophers: [
            {
                name: "Sócrates",
                subtitle: "A arte de preguntar",
                text: "Converteu o diálogo nunha ferramenta de pensamento crítico e empurrou a revisar crenzas cómodas.",
                image: "assets/socrates.svg",
                alt: "Busto clásico iluminado lateralmente"
            },
            {
                name: "Platón",
                subtitle: "Ideas, xustiza e educación",
                text: "Pensou a relación entre verdade, política e formación humana a través de imaxes filosóficas poderosas.",
                image: "assets/plato.svg",
                alt: "Escultura clásica nunha galería"
            },
            {
                name: "Aristóteles",
                subtitle: "Observar para comprender",
                text: "Ordenou campos enteiros do saber e puxo o foco na experiencia, na lóxica e na virtude.",
                image: "assets/aristotle.svg",
                alt: "Biblioteca con escultura e columnas"
            }
        ],
        currents: [
            {
                title: "Metafísica",
                meta: "Ser, realidade e existencia",
                text: "Pregunta que significa que algo exista e cales son as estruturas máis fondas do mundo."
            },
            {
                title: "Ética",
                meta: "Acción e responsabilidade",
                text: "Explora como vivir ben, que fai xusta unha decisión e por que unha acción pode ser valiosa."
            },
            {
                title: "Epistemoloxía",
                meta: "Saber e xustificación",
                text: "Analiza que conta como coñecemento, como se valida e ata onde chegan os nosos límites."
            },
            {
                title: "Filosofía política",
                meta: "Poder, xustiza e comunidade",
                text: "Estuda o Estado, a liberdade, os dereitos e as formas de organizar a convivencia."
            }
        ],
        library: [
            {
                title: "A República",
                author: "Platón",
                text: "Ideal para entrar na xustiza, na educación e no célebre mito da caverna.",
                image: "assets/library-books.svg",
                alt: "Libro aberto con luz cálida"
            },
            {
                title: "Ética a Nicómaco",
                author: "Aristóteles",
                text: "Clave para entender como funciona o coñecemento e cales son as súas condicións.",
                image: "assets/library-books.svg",
                alt: "Estantería con libros antigos"
            },
            {
                title: "Crítica da razón pura",
                author: "Immanuel Kant",
                text: "Clave para entender como funciona o coñecemento e cales son as súas condicións.",
                image: "assets/library-books.svg",
                alt: "Estantería con libros antigos"
            },
            {
                title: "Así falou Zaratustra",
                author: "Friedrich Nietzsche",
                text: "Unha lectura intensa para pensar a moral, a creación de valores e a crítica cultural.",
                image: "assets/study-notes.svg",
                alt: "Manuscrito antigo xunto a libros"
            }
        ],
        route: [
            {
                step: "01",
                title: "Comeza por Grecia",
                text: "Sitúa a Sócrates, Platón e Aristóteles para entender a orixe de moitas preguntas filosóficas."
            },
            {
                step: "02",
                title: "Ordena as ramas",
                text: "Separa ética, metafísica, epistemoloxía e política para non estudar conceptos mesturados."
            },
            {
                step: "03",
                title: "Le textos guiados",
                text: "Alterna fragmentos breves con ideas clave para relacionar teoría e lectura real."
            },
            {
                step: "04",
                title: "Practica e pregunta",
                text: "Usa actividades e o chat para comprobar que entendes e que necesitas repasar."
            }
        ]
    }
};

const state = {
    language: localStorage.getItem("philo-language") || "es",
    theme: localStorage.getItem("philo-theme") || "light",
    chatOpen: false,
    chatHistory: []
};

const geminiConfig = window.APP_CONFIG || {};
const geminiApiKey = geminiConfig.geminiApiKey || "";
const geminiModel = geminiConfig.geminiModel || "gemini-2.5-flash";

const doc = document.documentElement;
const body = document.body;

const philosopherGrid = document.getElementById("philosopher-grid");
const currentsGrid = document.getElementById("currents-grid");
const libraryGrid = document.getElementById("library-grid");
const routeGrid = document.getElementById("route-grid");
const langButtons = document.querySelectorAll(".lang-btn");
const themeToggle = document.getElementById("theme-toggle");
const chatFab = document.getElementById("chat-fab");
const chatWidget = document.getElementById("chat-widget");
const chatClose = document.getElementById("chat-close");
const chatBox = document.getElementById("chat-box");
const chatForm = document.getElementById("chat-form");
const userInput = document.getElementById("user-input");
const chatStatus = document.querySelector(".chat-status");
const phraseInput = document.getElementById("frase");

function applyTheme() {
    body.classList.toggle("dark-mode", state.theme === "dark");
}

function setLanguage(lang) {
    state.language = lang;
    localStorage.setItem("philo-language", lang);
    doc.lang = lang;

    document.querySelectorAll("[data-i18n]").forEach((element) => {
        const key = element.dataset.i18n;
        if (translations[lang][key]) {
            element.textContent = translations[lang][key];
        }
    });

    document.querySelectorAll("[data-placeholder]").forEach((element) => {
        const key = element.dataset.placeholder;
        if (translations[lang][key]) {
            element.placeholder = translations[lang][key];
        }
    });

    renderPhilosophers();
    renderCurrents();
    renderLibrary();
    renderRoute();
    renderChatWelcome();

    langButtons.forEach((button) => {
        button.classList.toggle("is-active", button.dataset.lang === lang);
    });
}

function renderPhilosophers() {
    philosopherGrid.innerHTML = translations[state.language].philosophers
        .map((item) => `
            <article class="philosopher-card">
                <img src="${item.image}" alt="${item.alt}">
                <div class="philosopher-card-body">
                    <p class="eyebrow">${item.subtitle}</p>
                    <h3>${item.name}</h3>
                    <p>${item.text}</p>
                </div>
            </article>
        `)
        .join("");
}

function renderCurrents() {
    currentsGrid.innerHTML = translations[state.language].currents
        .map((item) => `
            <article class="topic-card">
                <div class="topic-card-body">
                    <p class="topic-meta">${item.meta}</p>
                    <h3>${item.title}</h3>
                    <p>${item.text}</p>
                </div>
            </article>
        `)
        .join("");
}

function renderLibrary() {
    libraryGrid.innerHTML = translations[state.language].library
        .map((item) => `
            <article class="library-card">
                <img src="${item.image}" alt="${item.alt}">
                <div class="library-card-body">
                    <p class="eyebrow">${item.author}</p>
                    <h3>${item.title}</h3>
                    <p>${item.text}</p>
                </div>
            </article>
        `)
        .join("");
}

function renderRoute() {
    routeGrid.innerHTML = translations[state.language].route
        .map((item) => `
            <article class="timeline-item" data-step="${item.step}">
                <h3>${item.title}</h3>
                <p>${item.text}</p>
            </article>
        `)
        .join("");
}

function renderChatWelcome() {
    chatBox.innerHTML = "";
    state.chatHistory = [];
    addChatMessage(translations[state.language].chatWelcome, "bot");
    chatStatus.textContent = translations[state.language].chatStatus;
}

function addChatMessage(text, role) {
    const div = document.createElement("div");
    div.className = `chat-message ${role}`;
    div.textContent = text;
    chatBox.appendChild(div);
    chatBox.scrollTop = chatBox.scrollHeight;
}

function toggleChat(forceOpen) {
    state.chatOpen = typeof forceOpen === "boolean" ? forceOpen : !state.chatOpen;
    chatWidget.hidden = !state.chatOpen;
    chatFab.setAttribute("aria-expanded", String(state.chatOpen));
}

function normalizeText(value) {
    return value
        .normalize("NFD")
        .replace(/[\u0300-\u036f]/g, "")
        .toLowerCase()
        .trim();
}

function handleQuiz(option) {
    const output = document.getElementById("resultado-quiz");
    output.textContent = option === "b"
        ? translations[state.language].quizCorrect
        : translations[state.language].quizWrong;
}

function handlePhraseCheck() {
    const output = document.getElementById("resultado-frase");
    const value = normalizeText(phraseInput.value);
    output.textContent = value.includes("nada")
        ? translations[state.language].phraseCorrect
        : translations[state.language].phraseWrong;
}

function handleTrueFalse(isTrue) {
    const output = document.getElementById("resultado-vf");
    output.textContent = isTrue
        ? translations[state.language].vfCorrect
        : translations[state.language].vfWrong;
}

async function sendChatMessage(event) {
    event.preventDefault();
    const message = userInput.value.trim();

    if (!message) {
        return;
    }

    addChatMessage(message, "user");
    userInput.value = "";
    addChatMessage(translations[state.language].chatThinking, "bot");

    const thinkingNode = chatBox.lastElementChild;

    if (!geminiApiKey) {
        thinkingNode.textContent = translations[state.language].chatConfigError;
        return;
    }

    const systemPrompt = state.language === "gl"
        ? "Es un asistente de estudo de filosofía para alumnado en galego. Responde con claridade, ton amable e explicacións útiles. Prioriza conceptos filosóficos, contexto histórico, comparacións entre autores e exemplos sinxelos. Se a pregunta non é de filosofía, responde brevemente e intenta reconducila ao estudo."
        : "Eres un asistente de estudio de filosofía para alumnado en español. Responde con claridad, tono amable y explicaciones útiles. Prioriza conceptos filosóficos, contexto histórico, comparaciones entre autores y ejemplos sencillos. Si la pregunta no es de filosofía, responde brevemente e intenta reconducirla al estudio.";

    const contents = [
        {
            role: "user",
            parts: [{ text: systemPrompt }]
        },
        ...state.chatHistory,
        {
            role: "user",
            parts: [{ text: message }]
        }
    ];

    try {
        const response = await fetch(`https://generativelanguage.googleapis.com/v1beta/models/${geminiModel}:generateContent`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "x-goog-api-key": geminiApiKey
            },
            body: JSON.stringify({
                contents,
                generationConfig: {
                    temperature: 0.7,
                    maxOutputTokens: 500
                }
            })
        });

        if (!response.ok) {
            throw new Error("gemini-request-failed");
        }

        const data = await response.json();
        const reply = data?.candidates?.[0]?.content?.parts
            ?.map((part) => part.text || "")
            .join("")
            .trim();

        if (!reply) {
            throw new Error("gemini-request-failed");
        }

        state.chatHistory.push(
            {
                role: "user",
                parts: [{ text: message }]
            },
            {
                role: "model",
                parts: [{ text: reply }]
            }
        );

        if (state.chatHistory.length > 12) {
            state.chatHistory = state.chatHistory.slice(-12);
        }

        thinkingNode.textContent = reply;
    } catch (error) {
        thinkingNode.textContent = error.message === "gemini-request-failed"
            ? translations[state.language].chatQuotaError
            : translations[state.language].chatNetworkError;
    }
}

langButtons.forEach((button) => {
    button.addEventListener("click", () => setLanguage(button.dataset.lang));
});

themeToggle.addEventListener("click", () => {
    state.theme = state.theme === "dark" ? "light" : "dark";
    localStorage.setItem("philo-theme", state.theme);
    applyTheme();
});

chatFab.addEventListener("click", () => toggleChat());
chatClose.addEventListener("click", () => toggleChat(false));
chatForm.addEventListener("submit", sendChatMessage);

document.querySelectorAll("[data-quiz-option]").forEach((button) => {
    button.addEventListener("click", () => handleQuiz(button.dataset.quizOption));
});

document.getElementById("phrase-check").addEventListener("click", handlePhraseCheck);

document.querySelectorAll("[data-vf]").forEach((button) => {
    button.addEventListener("click", () => handleTrueFalse(button.dataset.vf === "true"));
});

applyTheme();
setLanguage(state.language);
