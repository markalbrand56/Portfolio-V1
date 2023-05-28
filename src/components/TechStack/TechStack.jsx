import React, { useState } from "react"
import styles from "./TechStack.module.css"
import { techStack } from "../../assets/data"

function TechStack() {
    const [hoveredTech, setHoveredTech] = useState("")

    const handleMouseEnter = (techName) => {
        setHoveredTech(techName)
    }

    const handleMouseLeave = () => {
        setHoveredTech("")
    }

    return (
        <div className={styles.TechStackContainer}>
            <div className={styles.ImageContainer}>
                {techStack.map((tech) => (
                    <img
                        key={tech.name}
                        src={tech.icon}
                        alt={tech.name}
                        className={styles.Item}
                        onMouseEnter={() => handleMouseEnter(tech.name)}
                        onMouseLeave={handleMouseLeave}
                    />
                ))}
            </div>
            <p className={styles.Name}>{hoveredTech}</p>
        </div>
    )
}

export default TechStack
