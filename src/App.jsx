import React from "react"
import styles from "./App.module.css"
import Proyecto from "./components/Proyecto/Proyecto"
import TechStack from "./components/TechStack/TechStack"
import Education from "./components/Education/Education"
import { education, projects } from "./assets/data"

function App() {
    return (
        <div className={styles.App}>
            {/* Nav ¿? */}
            <h1 className={styles.Name}>Mark Albrand</h1>
            <h2>Backend Developer</h2>

            <TechStack />

            <h1>Proyectos</h1>
            <div className={styles.Projects}>
                {projects.map((project) => (
                    <Proyecto
                        key={project.title}
                        title={project.title}
                        description={project.description}
                        tags={project.tags}
                        url={project.url}
                    />
                ))}
            </div>

            <h1>Educación</h1>
            <div className={styles.Education}>
                {education.map((edu) => (
                    <Education
                        key={edu.title}
                        title={edu.title}
                        description={edu.description}
                        year={edu.year}
                    />
                ))}
            </div>

            {/* TODO Certificates */}
            {/* TODO Experience */}
            {/* TODO About me: cards */}
        </div>
    )
}

export default App
