import React from "react"
import "./App.css"
import Proyecto from "./components/Proyecto/Proyecto"
import projects from "./assets/projects"

function App() {
    return (
        <div className="App">
            <p>Prueba</p>
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
    )
}

export default App
