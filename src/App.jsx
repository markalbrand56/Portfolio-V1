import React from "react"
import styles from "./App.module.css"
import Proyecto from "./components/Proyecto/Proyecto"
import projects from "./assets/projects"
import TechStack from "./components/TechStack/TechStack"

function App() {
    return (
        <div className={styles.App}>
            {/* Nav ¿? */}
            <h1 className={styles.Name}>Mark Albrand</h1>
            <h2>Backend Developer</h2>
            <TechStack />
            <div className={styles.Proyects}>
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
            {/* TODO Education */}
            {/* TODO Certificates */}
            {/* TODO Experience */}
            {/* TODO About me: cards */}
        </div>
    )
}

export default App
