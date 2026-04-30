(function () {
    const data = window.PHILOSOPHY_DATA;

    if (!data?.philosophers) {
        return;
    }

    const shared = {
        socrates: {
            era: "Antigua",
            themes: ["Ética", "Método", "Ciudad", "Virtud"],
            works: [
                "No conservamos obras escritas por Sócrates.",
                "Fuentes principales: Apología, Critón, Fedón y otros diálogos de Platón.",
                "También aparecen testimonios en Jenofonte y Aristófanes."
            ],
            timeline: [
                ["c. 470 a. C.", "Nacimiento en Atenas."],
                ["431-404 a. C.", "Vive la guerra del Peloponeso y la crisis de la democracia ateniense."],
                ["399 a. C.", "Juicio, condena y muerte por cicuta."]
            ],
            concepts: ["Mayéutica", "Ironía socrática", "Cuidado del alma", "Virtud como conocimiento"],
            expandedSections: [
                {
                    title: "Problemas filosóficos principales",
                    paragraphs: [
                        "Sócrates desplaza la filosofía desde la investigación de la naturaleza hacia la pregunta por la vida humana. Le interesan la justicia, la piedad, la valentía, la templanza y la sabiduría, pero no como palabras abstractas: quiere saber qué significan de verdad cuando una persona actúa.",
                        "Su insistencia en definir conceptos morales obliga a distinguir entre apariencia de saber y conocimiento auténtico. Por eso su filosofía es incómoda: revela que muchas seguridades sociales se apoyan en opiniones poco examinadas."
                    ]
                },
                {
                    title: "Juicio y muerte",
                    paragraphs: [
                        "El juicio de Sócrates tuvo cargos religiosos y políticos: se le acusó de no reconocer a los dioses de la ciudad y de corromper a la juventud. Más allá de la literalidad de los cargos, su figura condensaba tensiones de una Atenas derrotada, desconfiada y dividida.",
                        "En la Apología platónica, Sócrates no suplica ni abandona su estilo. Defiende que una vida sin examen no merece ser vivida y presenta su tarea como un servicio a la ciudad. Esa actitud convirtió su muerte en una escena fundacional de la filosofía occidental."
                    ]
                },
                {
                    title: "Relación con los sofistas",
                    paragraphs: [
                        "Sócrates comparte con los sofistas el interés por el lenguaje, la educación y la vida pública, pero se distancia de ellos en el objetivo. Mientras muchos sofistas enseñaban técnicas retóricas útiles para triunfar en la asamblea, Sócrates busca la verdad moral, aunque el diálogo termine en aporía.",
                        "La aporía no es fracaso simple: es el momento en que el interlocutor reconoce que no sabe. Desde ahí puede empezar una investigación más honesta."
                    ]
                },
                {
                    title: "Recepción e interpretaciones",
                    paragraphs: [
                        "El problema socrático consiste en separar al Sócrates histórico del personaje literario creado por Platón. No hay una solución definitiva, pero esa dificultad también muestra la fuerza de su figura: Sócrates funciona como maestro, personaje, método y símbolo.",
                        "Su legado aparece en la ética antigua, el cristianismo, la filosofía existencial y la pedagogía moderna. Cada vez que una clase usa preguntas para hacer pensar en lugar de repetir respuestas, hay algo socrático en marcha."
                    ]
                }
            ],
            extraQuestions: [
                {
                    difficulty: "medium",
                    question: "¿Qué significa que un diálogo socrático termine en aporía?",
                    options: ["Que se reconoce una dificultad o falta de saber", "Que se demuestra una ley física", "Que se impone una respuesta por autoridad"],
                    answer: 0,
                    explanation: "La aporía es el reconocimiento de una dificultad que abre una investigación más honesta."
                },
                {
                    difficulty: "hard",
                    question: "¿Por qué Sócrates se diferencia de muchos sofistas?",
                    options: ["Porque busca examinar la verdad moral más que enseñar solo éxito retórico", "Porque rechazaba todo diálogo público", "Porque defendía que la virtud depende del nacimiento"],
                    answer: 0,
                    explanation: "La ampliación explica que Sócrates se distancia de la retórica como pura técnica de éxito."
                }
            ]
        },
        platon: {
            era: "Antigua",
            themes: ["Metafísica", "Política", "Educación", "Alma"],
            works: ["La República", "Fedón", "Banquete", "Timeo", "Leyes", "Gorgias"],
            timeline: [
                ["c. 427 a. C.", "Nacimiento en Atenas."],
                ["399 a. C.", "La muerte de Sócrates marca decisivamente su filosofía."],
                ["c. 387 a. C.", "Fundación de la Academia."],
                ["347 a. C.", "Muerte en Atenas."]
            ],
            concepts: ["Ideas o Formas", "Alma tripartita", "Dialéctica", "Justicia", "Mito de la caverna"],
            expandedSections: [
                {
                    title: "Alma, conocimiento y deseo",
                    paragraphs: [
                        "Platón entiende el alma como una realidad compleja. En La República la divide en tres partes: racional, irascible y apetitiva. La justicia individual aparece cuando la razón gobierna, el ánimo apoya y los deseos ocupan su lugar sin dominar el conjunto.",
                        "Esta psicología no es solo moral, también política. La ciudad justa refleja una ordenación del alma: cada parte cumple su función y ninguna usurpa el papel de las demás."
                    ]
                },
                {
                    title: "Dialéctica",
                    paragraphs: [
                        "La dialéctica platónica es el movimiento racional que permite ascender desde opiniones dispersas hacia principios más firmes. No es una conversación cualquiera, sino un ejercicio ordenado de definición, comparación y jerarquía de ideas.",
                        "En los diálogos, la dialéctica suele avanzar mediante preguntas, objeciones y reformulaciones. Por eso Platón conserva el impulso socrático, pero lo integra en una arquitectura metafísica más amplia."
                    ]
                },
                {
                    title: "Crítica al arte y a la apariencia",
                    paragraphs: [
                        "Platón desconfía de ciertas formas de poesía y arte porque pueden reforzar apariencias engañosas y emociones desordenadas. Su crítica no es simple rechazo de la belleza: pregunta qué efecto tiene una imagen sobre el alma y la ciudad.",
                        "Esta tensión entre educación estética y verdad filosófica influyó durante siglos en los debates sobre censura, arte, ficción y responsabilidad pública."
                    ]
                },
                {
                    title: "La Academia y la tradición platónica",
                    paragraphs: [
                        "La Academia fue mucho más que una escuela: funcionó como espacio de investigación filosófica, matemática y política. Su existencia ayudó a fijar la idea de comunidad intelectual estable.",
                        "El platonismo no terminó con Platón. El neoplatonismo, la filosofía cristiana, el Renacimiento y muchas corrientes idealistas reinterpretaron su distinción entre apariencia y realidad inteligible."
                    ]
                }
            ],
            extraQuestions: [
                {
                    difficulty: "medium",
                    question: "¿Qué parte del alma debe gobernar según el modelo platónico?",
                    options: ["La parte racional", "La parte apetitiva", "La parte impulsiva sin educación"],
                    answer: 0,
                    explanation: "La ampliación explica que la justicia del alma exige que gobierne la razón."
                },
                {
                    difficulty: "hard",
                    question: "¿Por qué Platón desconfía de ciertas formas de arte?",
                    options: ["Porque pueden reforzar apariencias y emociones desordenadas", "Porque toda belleza es imposible", "Porque solo le interesaba la economía"],
                    answer: 0,
                    explanation: "Su crítica se centra en el efecto educativo de imágenes y ficciones sobre el alma."
                }
            ]
        },
        aristoteles: {
            era: "Antigua",
            themes: ["Lógica", "Metafísica", "Ética", "Política", "Biología"],
            works: ["Ética a Nicómaco", "Metafísica", "Política", "Poética", "Organon", "Sobre el alma"],
            timeline: [
                ["384 a. C.", "Nacimiento en Estagira."],
                ["367 a. C.", "Ingreso en la Academia de Platón."],
                ["343 a. C.", "Tutor de Alejandro Magno."],
                ["335 a. C.", "Fundación del Liceo."],
                ["322 a. C.", "Muerte en Calcis."]
            ],
            concepts: ["Cuatro causas", "Sustancia", "Potencia y acto", "Término medio", "Eudaimonía"],
            expandedSections: [
                {
                    title: "Potencia y acto",
                    paragraphs: [
                        "Aristóteles explica el cambio mediante la distinción entre potencia y acto. Una semilla es árbol en potencia; el árbol desarrollado es esa potencia actualizada. Así evita pensar el cambio como paso desde la nada absoluta.",
                        "Esta distinción sirve para entender naturaleza, movimiento, aprendizaje y vida moral. Una capacidad humana puede estar latente y realizarse mediante educación y práctica."
                    ]
                },
                {
                    title: "Política y comunidad",
                    paragraphs: [
                        "En Política, Aristóteles define al ser humano como animal político. No quiere decir solo que viva en grupo, sino que alcanza su forma propia de vida mediante lenguaje, deliberación y comunidad.",
                        "La ciudad existe para vivir bien, no únicamente para sobrevivir. Por eso la política se conecta con la ética: una organización social debe permitir el desarrollo de virtudes."
                    ]
                },
                {
                    title: "Poética y tragedia",
                    paragraphs: [
                        "En la Poética, Aristóteles analiza la tragedia como imitación de una acción seria y completa. Introduce conceptos como trama, reconocimiento, peripecia y catarsis.",
                        "Su enfoque es notable porque estudia el arte con herramientas analíticas. No se limita a condenar la ficción; intenta comprender cómo funciona y por qué produce efectos emocionales e intelectuales."
                    ]
                },
                {
                    title: "Historia natural",
                    paragraphs: [
                        "Aristóteles dedicó gran atención a los seres vivos. Aunque muchas de sus explicaciones fueron superadas, su impulso de observar, comparar y clasificar fue decisivo para la historia del conocimiento.",
                        "Su filosofía muestra una confianza profunda en que el mundo tiene formas inteligibles y puede estudiarse sin separarlo de la experiencia."
                    ]
                }
            ],
            extraQuestions: [
                {
                    difficulty: "medium",
                    question: "¿Qué distinción usa Aristóteles para explicar el cambio?",
                    options: ["Potencia y acto", "Sombra y copia", "Contrato y soberanía"],
                    answer: 0,
                    explanation: "La ampliación explica el cambio mediante potencia y acto."
                },
                {
                    difficulty: "hard",
                    question: "¿Por qué política y ética están conectadas en Aristóteles?",
                    options: ["Porque la ciudad debe permitir vivir bien y desarrollar virtudes", "Porque la virtud solo existe en soledad", "Porque la política elimina toda deliberación"],
                    answer: 0,
                    explanation: "La ciudad existe para vivir bien, y eso la vincula con la formación moral."
                }
            ]
        },
        locke: {
            era: "Moderna",
            themes: ["Empirismo", "Derechos", "Tolerancia", "Gobierno limitado"],
            works: ["Ensayo sobre el entendimiento humano", "Dos tratados sobre el gobierno civil", "Carta sobre la tolerancia", "Pensamientos sobre la educación"],
            timeline: [
                ["1632", "Nacimiento en Wrington."],
                ["1689", "Publicación de la Carta sobre la tolerancia."],
                ["1690", "Publicación del Ensayo y los Dos tratados."],
                ["1704", "Muerte en Oates."]
            ],
            concepts: ["Tabla rasa", "Ideas simples y complejas", "Consentimiento", "Propiedad", "Tolerancia"],
            expandedSections: [
                {
                    title: "Ideas simples y complejas",
                    paragraphs: [
                        "Locke distingue ideas simples, recibidas pasivamente por sensación o reflexión, e ideas complejas, formadas cuando la mente combina, compara y abstrae. Esta explicación permite describir el conocimiento sin recurrir a contenidos innatos.",
                        "El empirismo lockeano no niega la actividad mental: la mente trabaja con materiales de la experiencia, pero los ordena de maneras cada vez más complejas."
                    ]
                },
                {
                    title: "Identidad personal",
                    paragraphs: [
                        "Locke formuló una teoría influyente de la identidad personal basada en la conciencia y la memoria. Una persona no se identifica simplemente con una sustancia material o espiritual, sino con la continuidad de conciencia que puede reconocerse a sí misma.",
                        "Esta idea abrió debates modernos sobre responsabilidad, memoria, yo y continuidad psicológica."
                    ]
                },
                {
                    title: "Propiedad y trabajo",
                    paragraphs: [
                        "Locke explica la propiedad privada a partir del trabajo: al mezclar su trabajo con algo de la naturaleza, una persona puede hacerlo suyo, siempre que queden recursos suficientes para otros en condiciones adecuadas.",
                        "Este argumento fue muy influyente, pero también muy discutido, especialmente por sus consecuencias en colonialismo, desigualdad y acumulación."
                    ]
                },
                {
                    title: "Límites del poder",
                    paragraphs: [
                        "La teoría política de Locke limita el poder mediante derechos, ley y consentimiento. El gobierno es fiduciario: recibe una confianza para proteger derechos, no una autorización absoluta para dominarlos.",
                        "Esta visión alimentó el constitucionalismo liberal y muchas declaraciones modernas de derechos."
                    ]
                }
            ],
            extraQuestions: [
                {
                    difficulty: "medium",
                    question: "¿Cómo explica Locke la propiedad privada?",
                    options: ["A partir del trabajo mezclado con la naturaleza", "Como copia de una Idea eterna", "Como resultado inevitable de la lucha de clases"],
                    answer: 0,
                    explanation: "La ampliación resume el argumento lockeano de propiedad y trabajo."
                },
                {
                    difficulty: "hard",
                    question: "¿En qué basa Locke la identidad personal?",
                    options: ["En la continuidad de conciencia y memoria", "En la pertenencia a una polis", "En el imperativo categórico"],
                    answer: 0,
                    explanation: "La página ampliada presenta la memoria y la conciencia como núcleo de la identidad personal."
                }
            ]
        },
        hume: {
            era: "Moderna",
            themes: ["Empirismo", "Causalidad", "Escepticismo", "Moral sentimental"],
            works: ["Tratado de la naturaleza humana", "Investigación sobre el entendimiento humano", "Investigación sobre los principios de la moral", "Diálogos sobre la religión natural"],
            timeline: [
                ["1711", "Nacimiento en Edimburgo."],
                ["1739-1740", "Publicación del Tratado de la naturaleza humana."],
                ["1748", "Publicación de la Investigación sobre el entendimiento humano."],
                ["1776", "Muerte en Edimburgo."]
            ],
            concepts: ["Impresiones", "Ideas", "Hábito", "Problema de la inducción", "Simpatía"],
            expandedSections: [
                {
                    title: "Problema de la inducción",
                    paragraphs: [
                        "Hume mostró que no podemos justificar racionalmente, de manera absoluta, que el futuro se parecerá al pasado. Cuando esperamos que el sol salga mañana o que el fuego queme, confiamos en hábitos formados por experiencias repetidas.",
                        "Esto no significa que debamos abandonar la ciencia o la vida cotidiana. Hume describe cómo funciona la mente humana: necesitamos la costumbre para vivir, aunque no proporcione certeza lógica total."
                    ]
                },
                {
                    title: "El yo como haz de percepciones",
                    paragraphs: [
                        "Hume duda de que podamos encontrar un yo simple y permanente por introspección. Cuando miramos hacia dentro, hallamos percepciones cambiantes: sensaciones, emociones, recuerdos, deseos.",
                        "La identidad personal se explica entonces por memoria, asociación y continuidad imaginada, no por una sustancia evidente e inmutable."
                    ]
                },
                {
                    title: "Religión natural",
                    paragraphs: [
                        "Hume examinó críticamente argumentos religiosos como el diseño del mundo. No se limita a negar; pregunta qué puede probar realmente una analogía entre el mundo y un artefacto humano.",
                        "Sus Diálogos sobre la religión natural son un modelo de discusión filosófica prudente, donde varias voces exploran límites de la razón, experiencia y creencia."
                    ]
                },
                {
                    title: "Moral y simpatía",
                    paragraphs: [
                        "Hume sostiene que la moral se apoya en sentimientos compartidos, especialmente la simpatía. Aprobamos cualidades útiles o agradables para uno mismo y para otros porque estamos afectivamente conectados con la vida social.",
                        "Esta visión anticipa enfoques contemporáneos que estudian emociones, cooperación y juicio moral sin reducirlos a deducciones puramente racionales."
                    ]
                }
            ],
            extraQuestions: [
                {
                    difficulty: "medium",
                    question: "¿Qué muestra el problema de la inducción en Hume?",
                    options: ["Que no hay certeza lógica absoluta de que el futuro copie el pasado", "Que toda experiencia es innata", "Que la política depende del contrato social"],
                    answer: 0,
                    explanation: "Hume sostiene que nuestras expectativas sobre el futuro se apoyan en hábito."
                },
                {
                    difficulty: "hard",
                    question: "¿Cómo describe Hume el yo?",
                    options: ["Como un haz de percepciones cambiantes", "Como una sustancia plenamente evidente", "Como una Idea eterna"],
                    answer: 0,
                    explanation: "La ampliación explica que Hume no encuentra un yo simple, sino percepciones cambiantes."
                }
            ]
        },
        kant: {
            era: "Moderna",
            themes: ["Crítica", "Conocimiento", "Deber", "Autonomía"],
            works: ["Crítica de la razón pura", "Crítica de la razón práctica", "Crítica del juicio", "Fundamentación de la metafísica de las costumbres", "¿Qué es la Ilustración?"],
            timeline: [
                ["1724", "Nacimiento en Königsberg."],
                ["1781", "Primera edición de la Crítica de la razón pura."],
                ["1785", "Fundamentación de la metafísica de las costumbres."],
                ["1790", "Crítica del juicio."],
                ["1804", "Muerte en Königsberg."]
            ],
            concepts: ["A priori", "Categorías", "Fenómeno y noúmeno", "Imperativo categórico", "Autonomía"],
            expandedSections: [
                {
                    title: "Juicios sintéticos a priori",
                    paragraphs: [
                        "Kant pregunta cómo son posibles conocimientos que amplían lo que sabemos y, sin embargo, poseen necesidad. Los llama juicios sintéticos a priori. La matemática y los principios básicos de la ciencia natural son ejemplos centrales.",
                        "Esta cuestión organiza su revolución copernicana: no es solo la mente la que se adapta al objeto, sino que el objeto de experiencia aparece bajo condiciones puestas por nuestra facultad de conocer."
                    ]
                },
                {
                    title: "Fenómeno y noúmeno",
                    paragraphs: [
                        "El fenómeno es la realidad tal como aparece bajo nuestras formas de sensibilidad y categorías del entendimiento. El noúmeno o cosa en sí señala aquello que no podemos conocer directamente como objeto de experiencia.",
                        "Esta distinción limita la metafísica tradicional: la razón puede pensar ciertos límites, pero no convertirlos sin más en conocimiento."
                    ]
                },
                {
                    title: "Estética y juicio",
                    paragraphs: [
                        "En la Crítica del juicio, Kant analiza la belleza, lo sublime y la finalidad. El juicio estético no se reduce a gusto privado ni a concepto científico; reclama una cierta comunicabilidad universal sin demostración lógica.",
                        "Lo sublime muestra la tensión entre imaginación y razón: la naturaleza puede desbordar nuestra representación sensible, mientras la razón descubre en sí una dimensión superior a lo meramente empírico."
                    ]
                },
                {
                    title: "Derecho, paz y cosmopolitismo",
                    paragraphs: [
                        "Kant también pensó el derecho y la política internacional. En Sobre la paz perpetua defiende condiciones republicanas, federación de Estados y hospitalidad cosmopolita como horizonte racional de convivencia.",
                        "Su filosofía práctica vincula libertad individual, ley moral y organización jurídica. La autonomía no es hacer cualquier cosa, sino darse leyes racionales compatibles con la libertad de todos."
                    ]
                }
            ],
            extraQuestions: [
                {
                    difficulty: "medium",
                    question: "¿Qué son los juicios sintéticos a priori en Kant?",
                    options: ["Conocimientos que amplían saber y poseen necesidad", "Opiniones sin validez", "Sentimientos morales variables"],
                    answer: 0,
                    explanation: "La ampliación presenta los juicios sintéticos a priori como problema central de la Crítica."
                },
                {
                    difficulty: "hard",
                    question: "¿Qué limita la distinción fenómeno/noúmeno?",
                    options: ["La pretensión de conocer la cosa en sí como objeto de experiencia", "La posibilidad de toda ciencia", "La existencia de la ley moral"],
                    answer: 0,
                    explanation: "Kant permite pensar el noúmeno, pero niega conocerlo directamente como experiencia."
                }
            ]
        },
        marx: {
            era: "Contemporánea",
            themes: ["Capitalismo", "Trabajo", "Historia", "Ideología"],
            works: ["El capital", "Manifiesto comunista", "La ideología alemana", "Manuscritos económico-filosóficos", "Tesis sobre Feuerbach"],
            timeline: [
                ["1818", "Nacimiento en Tréveris."],
                ["1844", "Encuentro intelectual con Friedrich Engels."],
                ["1848", "Publicación del Manifiesto comunista."],
                ["1867", "Primer tomo de El capital."],
                ["1883", "Muerte en Londres."]
            ],
            concepts: ["Materialismo histórico", "Lucha de clases", "Plusvalía", "Alienación", "Ideología"],
            expandedSections: [
                {
                    title: "Ideología",
                    paragraphs: [
                        "Para Marx, la ideología no es simplemente una mentira consciente. Es una forma de representación social que puede hacer aparecer como natural o inevitable lo que en realidad es histórico y modificable.",
                        "Las ideas dominantes suelen relacionarse con las condiciones de los grupos dominantes, aunque nunca de manera mecánica simple. Por eso estudiar ideas exige estudiar instituciones, intereses y prácticas."
                    ]
                },
                {
                    title: "Plusvalía y explotación",
                    paragraphs: [
                        "La plusvalía es el valor producido por el trabajador que excede el valor de su salario y es apropiado por el capitalista. Con este concepto Marx intenta explicar la explotación no como abuso accidental, sino como estructura del modo de producción capitalista.",
                        "El análisis no se limita a denunciar desigualdad visible: busca mostrar el mecanismo económico que permite acumulación de capital."
                    ]
                },
                {
                    title: "Fetichismo de la mercancía",
                    paragraphs: [
                        "Marx llama fetichismo de la mercancía al fenómeno por el que las relaciones sociales entre personas aparecen como relaciones entre cosas. En el mercado, los productos parecen tener valor por sí mismos, ocultando el trabajo y las relaciones que los producen.",
                        "Este concepto sigue siendo útil para pensar consumo, publicidad, marcas y formas contemporáneas de invisibilizar trabajo."
                    ]
                },
                {
                    title: "Debates y críticas",
                    paragraphs: [
                        "Marx fue interpretado de formas muy distintas: marxismo revolucionario, socialdemocracia, teoría crítica, marxismo analítico, estudios culturales y lecturas poscoloniales. Esa diversidad muestra tanto la potencia como la dificultad de su obra.",
                        "También recibió críticas por determinismo, economía excesivamente central, problemas políticos de sus herencias históricas y tensiones entre emancipación y poder estatal."
                    ]
                }
            ],
            extraQuestions: [
                {
                    difficulty: "medium",
                    question: "¿Qué es la plusvalía en Marx?",
                    options: ["Valor producido por el trabajador y apropiado por el capitalista", "Una forma pura del entendimiento", "Una virtud entre exceso y defecto"],
                    answer: 0,
                    explanation: "La ampliación define la plusvalía como núcleo del análisis de explotación."
                },
                {
                    difficulty: "hard",
                    question: "¿Qué oculta el fetichismo de la mercancía?",
                    options: ["Las relaciones sociales y el trabajo detrás de los productos", "La existencia de ideas innatas", "La necesidad de la mayéutica"],
                    answer: 0,
                    explanation: "El fetichismo hace aparecer relaciones sociales como relaciones entre cosas."
                }
            ]
        },
        arendt: {
            era: "Contemporánea",
            themes: ["Totalitarismo", "Acción", "Juicio", "Pluralidad"],
            works: ["Los orígenes del totalitarismo", "La condición humana", "Eichmann en Jerusalén", "Entre el pasado y el futuro", "La vida del espíritu"],
            timeline: [
                ["1906", "Nacimiento en Hannover."],
                ["1933", "Huida de Alemania tras el ascenso nazi."],
                ["1951", "Publicación de Los orígenes del totalitarismo."],
                ["1958", "Publicación de La condición humana."],
                ["1975", "Muerte en Nueva York."]
            ],
            concepts: ["Pluralidad", "Acción", "Espacio público", "Totalitarismo", "Banalidad del mal"],
            expandedSections: [
                {
                    title: "Labor, trabajo y acción",
                    paragraphs: [
                        "La labor corresponde a las necesidades biológicas y cíclicas de la vida; el trabajo fabrica un mundo relativamente duradero de objetos; la acción ocurre entre personas y abre procesos imprevisibles.",
                        "Esta distinción permite a Arendt defender que la política no debe reducirse a administración de necesidades ni a producción técnica. La política aparece cuando las personas actúan y hablan en común."
                    ]
                },
                {
                    title: "Poder y violencia",
                    paragraphs: [
                        "Arendt distingue poder y violencia. El poder surge cuando las personas actúan concertadamente; la violencia usa instrumentos para imponer. Pueden aparecer juntos, pero no son lo mismo.",
                        "Esta diferencia le permite criticar la idea de que todo poder sea simple dominación. Hay poder allí donde existe acción común sostenida por reconocimiento y participación."
                    ]
                },
                {
                    title: "Juicio y responsabilidad",
                    paragraphs: [
                        "Tras Eichmann en Jerusalén, Arendt se interesó cada vez más por el juicio. Pensar y juzgar no son lujos intelectuales: pueden ser defensas frente a la obediencia automática y la normalización del mal.",
                        "Su obra invita a preguntarse cómo conservar responsabilidad personal dentro de sistemas burocráticos y políticos complejos."
                    ]
                },
                {
                    title: "Exilio y mundo común",
                    paragraphs: [
                        "La experiencia del exilio influyó en su idea de mundo común. Perder derechos no es solo perder protección legal; es perder un espacio donde la palabra y la acción cuentan ante otros.",
                        "Por eso Arendt insistió en el derecho a tener derechos: la pertenencia a un espacio político donde alguien pueda aparecer, hablar y ser reconocido."
                    ]
                }
            ],
            extraQuestions: [
                {
                    difficulty: "medium",
                    question: "¿Cómo distingue Arendt poder y violencia?",
                    options: ["El poder nace de la acción común; la violencia impone mediante instrumentos", "Son exactamente lo mismo", "El poder solo existe en soledad"],
                    answer: 0,
                    explanation: "La ampliación explica que el poder surge de actuar concertadamente."
                },
                {
                    difficulty: "hard",
                    question: "¿Qué significa el 'derecho a tener derechos'?",
                    options: ["Pertenecer a un espacio político donde la palabra cuenta", "Acumular propiedades ilimitadas", "Obedecer sin juicio"],
                    answer: 0,
                    explanation: "Arendt vincula derechos con aparecer y ser reconocido en un mundo común."
                }
            ]
        },
        nietzsche: {
            era: "Contemporánea",
            themes: ["Moral", "Nihilismo", "Valores", "Perspectivismo"],
            works: ["Así habló Zaratustra", "La genealogía de la moral", "Más allá del bien y del mal", "El nacimiento de la tragedia", "La gaya ciencia"],
            timeline: [
                ["1844", "Nacimiento en Röcken."],
                ["1869", "Profesor de filología clásica en Basilea."],
                ["1872", "Publicación de El nacimiento de la tragedia."],
                ["1883-1885", "Publicación de Así habló Zaratustra."],
                ["1900", "Muerte en Weimar."]
            ],
            concepts: ["Muerte de Dios", "Nihilismo", "Voluntad de poder", "Eterno retorno", "Transvaloración"],
            expandedSections: [
                {
                    title: "Perspectivismo",
                    paragraphs: [
                        "Nietzsche sostiene que el conocimiento siempre parte de perspectivas. Esto no significa que todas las interpretaciones valgan igual, sino que no existe una mirada humana completamente desinteresada y fuera de la vida.",
                        "Evaluar una perspectiva exige preguntar qué fuerzas expresa, qué tipo de vida promueve y qué capacidad tiene para ampliar o empobrecer la existencia."
                    ]
                },
                {
                    title: "Voluntad de poder",
                    paragraphs: [
                        "La voluntad de poder no debe entenderse solo como deseo político de mandar. Nombra una dinámica de expansión, interpretación, creación y afirmación que atraviesa la vida.",
                        "Nietzsche usa esta idea para pensar valores, arte, conocimiento y moral como expresiones de fuerzas, no como verdades neutrales caídas del cielo."
                    ]
                },
                {
                    title: "Eterno retorno",
                    paragraphs: [
                        "El eterno retorno funciona como prueba existencial: ¿podrías querer vivir tu vida de nuevo, con sus alegrías y dolores, infinitas veces? La pregunta obliga a medir el grado de afirmación de la propia existencia.",
                        "No es solo una tesis cosmológica discutible; es una imagen radical de responsabilidad ante la vida que uno construye."
                    ]
                },
                {
                    title: "Estilo y recepción",
                    paragraphs: [
                        "Nietzsche escribe en aforismos, poemas, genealogías y ataques polémicos. Su forma de escribir es parte de su filosofía: rompe el tratado sistemático porque quiere producir sacudidas, no solo transmitir tesis.",
                        "Su recepción fue compleja y a veces distorsionada. Influyó en existencialismo, posmodernidad, psicología, crítica literaria y filosofía de la cultura."
                    ]
                }
            ],
            extraQuestions: [
                {
                    difficulty: "medium",
                    question: "¿Qué plantea el eterno retorno como prueba existencial?",
                    options: ["Si podrías querer vivir tu vida de nuevo infinitas veces", "Si toda idea procede de la sensación", "Si el Estado protege la propiedad"],
                    answer: 0,
                    explanation: "La ampliación presenta el eterno retorno como prueba de afirmación vital."
                },
                {
                    difficulty: "hard",
                    question: "¿Qué implica el perspectivismo de Nietzsche?",
                    options: ["Que todo conocimiento humano parte de perspectivas", "Que no existen interpretaciones", "Que la moral se deduce por silogismo"],
                    answer: 0,
                    explanation: "Nietzsche niega una mirada humana totalmente fuera de la vida y la perspectiva."
                }
            ]
        }
    };

    data.philosophers.forEach((philosopher) => {
        const extra = shared[philosopher.id];

        if (!extra) {
            return;
        }

        Object.assign(philosopher, {
            era: extra.era,
            themes: extra.themes,
            works: extra.works,
            timeline: extra.timeline,
            concepts: extra.concepts
        });

        philosopher.sections = [...philosopher.sections, ...extra.expandedSections];
        philosopher.questions = [
            ...philosopher.questions.map((question) => ({ difficulty: question.difficulty || "easy", ...question })),
            ...extra.extraQuestions
        ];
    });
})();
