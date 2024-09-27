const devIcons = "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/"

const education = [
    {
        title: "Universidad del Valle de Guatemala",
        description: "Ingeniería en Ciencias de la Computación y Tecnologías de la Información",
        year: "2021 - presente",
    },
    {
        title: "Colegio Bilingüe Vista Hermosa",
        description: "Bachillerato en Ciencias y Letras",
        year: "2007 - 2020",
    },
]

const projects = [
    {
        Title: "Reading Planner API",
        Tags: ["Go", "MongoDB", "Gin Gonic"],
        Github: "https://github.com/markalbrand56/Reading-Planner-API",
        Description:
            "REST API para un planificador de lectura. Permite a los usuarios crear y administrar planes de lectura, " +
            "añadiendo libros y registrando cuando se leen. Utiliza el framework Gin Gonic de Go para la " +
            "construcción del API y MongoDB para almacenar los datos en línea.",
        LiveDemo: null,
    },
    {
        Title: "UniEmpleos",
        Tags: ["React", "PostgreSQL", "Gin Gonic"],
        Github: "https://github.com/markalbrand56/IS-Proyecto",
        Description:
            "Aplicación web para la búsqueda de empleos, enfocada a universitarios con poca o ninguna " +
            "experiencia laboral. Permite a los usuarios buscar y aplicar a empleos, así como a los empleadores " +
            "publicar ofertas de trabajo. Utiliza React para el frontend, PostgreSQL para la base de datos y Gin " +
            "Gonic para el backend. Además, el proyecto ganó el segundo lugar en el evento de la Universidad del " +
            "Valle de Guatemala: Pitchapalooza 2023.",
        LiveDemo: "https://uniempleos.netlify.app/",
    },
    {
        Title: "REST API para simulación de máquina de Turing",
        Tags: ["Python", "FastAPI"],
        Github: "https://github.com/markalbrand56/TC-Proyecto-3-API",
        Description:
            "MainProject de Teoría de la Computación. Consiste en una REST API que permite simular una máquina de " +
            "Turing. Utiliza FastAPI para la construcción de una API para simular la máquina de Turing y regresar " +
            "los resultados de la simulación hacia el frontend. La simulación acepta máquinas de Turing deterministas" +
            " de una sola cinta.",
        LiveDemo: "https://tc-proyecto-3-markalbrand56.koyeb.app/docs",
    },
    {
        Title: "REST API para sistema de administración hospitalario",
        Tags: ["Python", "FastAPI", "PostgreSQL"],
        Github: "https://github.com/markalbrand56/BD-Proyecto-2-API",
        Description:
            "REST API para un sistema de administración de un hospital. Permite administrar un hospital, " +
            "añadiendo pacientes, doctores, consultas y medicamentos. Utiliza FastAPI para la construcción del API y " +
            "PostgreSQL para almacenar los datos en línea.",
        LiveDemo: null,
    },
    {
        Title: "Calculadora en React",
        Tags: ["React", "JavaScript", "CSS", "HTML"],
        Github: "https://github.com/markalbrand56/STW-Laboratorio-9",
        Description:
            "Calculadora hecha en React. Permite realizar operaciones de suma, resta, multiplicación, división, " +
            "módulo y porcentaje. Utiliza React para el frontend y JavaScript para la lógica de la calculadora.",
        LiveDemo: "https://albrand-projects-react-calculator.netlify.app/",
    },
    {
        Title: "Réplica de F1 Academy",
        Tags: ["React", "JavaScript", "CSS", "HTML"],
        Github: "https://github.com/markalbrand56/STW-Proyecto-1",
        Description:
            "Réplica de la versión de escritorio del sitio web de F1 Academy. Se utilizó React para replicar toda la" +
            " página principal y añadir el contador de días para la siguiente carrera como objeto dinámico.",
        LiveDemo: "https://albrand-projects-f1-replica.netlify.app/",
    },
]

const techStack = [
    {
        name: "Go",
        icon: `${devIcons}go/go-original-wordmark.svg`,
    },
    {
        name: "Python",
        icon: `${devIcons}python/python-original.svg`,
    },
    {
        name: "C",
        icon: `${devIcons}c/c-original.svg`,
    },
    {
        name: "C++",
        icon: `${devIcons}cplusplus/cplusplus-original.svg`,
    },
    {
        name: "FastAPI",
        icon: `${devIcons}fastapi/fastapi-original.svg`,
    },
    {
        name: "Gin Gonic",
        icon: "https://raw.githubusercontent.com/gin-gonic/logo/master/color.png",
    },
    {
        name: "Django",
        icon: `${devIcons}django/django-plain.svg`,
    },
    {
        name: "AWS",
        icon: `${devIcons}amazonwebservices/amazonwebservices-original-wordmark.svg`,
    },
    {
        name: "Android",
        icon: `${devIcons}android/android-original.svg`,
    },
    {
        name: "Firebase",
        icon: `${devIcons}firebase/firebase-plain.svg`,
    },
    {
        name: "PostgreSQL",
        icon: `${devIcons}postgresql/postgresql-original.svg`,
    },
    {
        name: "MongoDB",
        icon: `${devIcons}mongodb/mongodb-original.svg`,
    },
    {
        name: "HTML",
        icon: `${devIcons}html5/html5-original.svg`,
    },
    {
        name: "CSS",
        icon: `${devIcons}css3/css3-original.svg`,
    },
    {
        name: "JavaScript",
        icon: `${devIcons}javascript/javascript-original.svg`,
    },
    {
        name: "React",
        icon: `${devIcons}react/react-original.svg`,
    },
    {
        name: "Vue.js",
        icon: `${devIcons}vuejs/vuejs-original.svg`,
    },
    {
        name: "Java",
        icon: `${devIcons}java/java-original.svg`,
    },
    {
        name: "Kotlin",
        icon: `${devIcons}kotlin/kotlin-original.svg`,
    },
    {
        name: "JetBrains",
        icon: `${devIcons}jetbrains/jetbrains-original.svg`,
    },
    {
        name: "Visual Studio Code",
        icon: `${devIcons}vscode/vscode-original.svg`,
    },
    {
        name: "Visual Studio",
        icon: `${devIcons}visualstudio/visualstudio-plain.svg`,
    },
    {
        name: "Git",
        icon: `${devIcons}git/git-original.svg`,
    },
    {
        name: "Linux",
        icon: `${devIcons}linux/linux-original.svg`,
    },
]

const certificates = [
    {
        Title: "PCAP: Programming Essentials in Python",
        Institute: "CISCO Networking Academy - Universidad Galileo",
        Date: "2019",
    },
]

const experience = [
    {
        Position: "Desarrollador BackEnd en Garoo, Guatemala",
        Description: "Encargado de liderar la concepción, desarrollo y despliegue de bots avanzados utilizando " +
            "tecnologías de inteligencia artificial, con un enfoque particular en la plataforma OpenAI. Además de " +
            "la colaboración en el desarrollo backend para aplicaciones web, aportando experiencia en la creación " +
            "de APIs robustas.",
        Date: "noviembre 2023 - presente",
    },
    {
        Position: "Responsable de Sistemas en Anita's Gift Shop, Merced, CA",
        Description: "Configuró y desplegó la solución empresarial tipo SAP Epos Now, luego de crear las bases de datos para los productos del local. Solucionó activamente los problemas que surgieron, ayudando a la empresa a comenzar a operar lo antes posible.",
        Date: "octubre 2020 - diciembre 2020",
    },
]

const about = [
    "Soy un estudiante de Ingeniería en Ciencias de la Computación y Tecnologías de la Información en la Universidad del Valle de Guatemala. Me apasiona la tecnología y la programación, y me encanta aprender cosas nuevas.",
    "Aprendí a programar por mi cuenta mientras estudiaba en el colegio, y desde entonces he estado aprendiendo y practicando constantemente. Gracias a eso la programación se ha convertido en una de mis pasiones.",
    "Me encanta descubrir nuevas tecnologías, en mi tiempo libre suelo intentar aprender algo nuevo, ya sea un nuevo lenguaje de programación, un nuevo framework, o cualquier otra cosa que me llame la atención.",
    "Me encanta la música, me considero un Petrolhead (amante de los autos), me gusta practicar la fotografía, y me encanta viajar.",
]

export { projects }
export { education }
export { techStack }
export { certificates }
export { experience }
export { about }
