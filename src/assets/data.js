const education = [
    {
        title: "Universidad del Valle de Guatemala",
        description: "Ingeniería en Ciencias de la Computación y Tecnologías de la Información",
        year: "2020 - presente",
    },
    {
        title: "Colegio Bilingüe Vista Hermosa",
        description: "Bachillerato en Ciencias y Letras",
        year: "2007 - 2019",
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
        tags: [
            "Java",
            "Tomcat",
            "Neo4j",
            "Netbeans",
            "HTML",
            "CSS",
            "Javascript",
        ],
        url: "https://github.com/markalbrand56/AED-Proyecto-2",
        description:
            "UVG Match is a web application that allows students to find other students with similar " +
            "interests. The application will allow students to create a profile with their interests. " +
            "The application will then match students with other students that have similar interests.",
    },
]

const devIcons = "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/"

const techStack = [
    {
        name: "Python",
        icon: `${devIcons}python/python-original.svg`,
    },
    {
        name: "Go",
        icon: `${devIcons}go/go-original.svg`,
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
        name: "Javascript",
        icon: `${devIcons}javascript/javascript-original.svg`,
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
        name: "Neo4j",
        icon: `${devIcons}neo4j/neo4j-original.svg`,
    },
    {
        name: "JetBrains",
        icon: `${devIcons}jetbrains/jetbrains-original.svg`,
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
        name: "HTML",
        icon: `${devIcons}html5/html5-original.svg`,
    },
    {
        name: "CSS",
        icon: `${devIcons}css3/css3-original.svg`,
    },
    {
        name: "React",
        icon: `${devIcons}react/react-original.svg`,
    },
    {
        name: "Yarn",
        icon: `${devIcons}yarn/yarn-original.svg`,
    },
]

export { projects }
export { education }
export { techStack }
