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
        title: "Reading Planner API",
        tags: ["Go", "MongoDB", "Gin Gonic"],
        url: "https://github.com/markalbrand56/Reading-Planner-API",
        description:
            "REST API for Reading-Planner app using MongoDB and Go The project's " +
            "objective is to track the user on the books that are currently being " +
            "read and the ones that are on the queue. This API will follow the " +
            "REST design pattern, due to its low complexity overall.",
        icon: "",
    },
    {
        title: "UVG Match",
        tags: ["Java", "Tomcat", "Neo4j", "HTML", "CSS", "JavaScript"],
        url: "https://github.com/markalbrand56/AED-Proyecto-2",
        description:
            "UVG Match is a web application that allows students to find other students with similar " +
            "interests. The application will allow students to create a profile with their interests. " +
            "The application will then match students with other students that have similar interests.",
    },
]

const techStack = [
    {
        name: "Python",
        icon: `${devIcons}python/python-original.svg`,
    },
    {
        name: "Go",
        icon: `${devIcons}go/go-original-wordmark.svg`,
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
        name: "Java",
        icon: `${devIcons}java/java-original.svg`,
    },
    {
        name: "Kotlin",
        icon: `${devIcons}kotlin/kotlin-original.svg`,
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
        name: "Django",
        icon: `${devIcons}django/django-plain.svg`,
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
        name: "AWS",
        icon: `${devIcons}amazonwebservices/amazonwebservices-original.svg`,
    },
    {
        name: "Neo4j",
        icon: `${devIcons}neo4j/neo4j-original.svg`,
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
    {
        name: "Ubuntu",
        icon: `${devIcons}ubuntu/ubuntu-plain.svg`,
    },
    {
        name: "NPM",
        icon: `${devIcons}npm/npm-original-wordmark.svg`,
    },
    {
        name: "Yarn",
        icon: `${devIcons}yarn/yarn-original.svg`,
    },
]

const certificates = [
    {
        title: "PCAP: Programming Essentials in Python",
        description: "CISCO Networking Academy - Universidad Galileo",
        year: "2019",
    },
]

const experience = [
    {
        title: "Responsable de Sistemas en Anita's Gift Shop, Merced, CA",
        description: "Configuró y desplegó la solución empresarial tipo SAP Epos Now, luego de crear las bases de datos para los productos del local. Solucionó activamente los problemas que surgieron, ayudando a la empresa a comenzar a operar lo antes posible.",
        year: "octubre 2020 - diciembre 2020",
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
