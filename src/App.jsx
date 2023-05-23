import React from "react"
import "./App.css"
import Proyecto from "./components/Proyecto/Proyecto"

function App() {
    return (
        <div className="App">
            <p>Prueba</p>
            <Proyecto
                title="Reading Planner API"
                tags={["Go", "MongoDB", "Gin Gonic"]}
                url="https://github.com/markalbrand56/Reading-Planner-API"
                description="REST API for Reading-Planner app using MongoDB and Go The project's objective is to track the user on the books that are currently being read and the ones that are on the queue. This API will follow the REST design pattern, due to its low complexity overall."
                icon=""
            />
        </div>
    )
}

export default App
