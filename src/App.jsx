import React from "react"
import "./App.css"
import Proyecto from "./components/Proyecto/Proyecto"

function App() {
    return (
        <div className="App">
            <p>Prueba</p>
            <Proyecto
                title="Prueba"
                tags={["JavaScript", "React", "CSS", "HTML", "Git"]}
                url="https://github.com/markalbrand56/STW-Laboratorio-9"
                description="Prueba"
                icon=""
            />
        </div>
    )
}

export default App
