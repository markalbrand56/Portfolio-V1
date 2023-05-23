import React from "react"
import styles from "./TechStack.module.css"
import techStack from "../../assets/techStack"

function TechStack() {
    return (
        <div className={styles.TechStackContainer}>
            {techStack.map((tech) => (
                <img src={tech.icon} alt={tech.name} className={styles.Item} />
            ))}
        </div>
    )
}

export default TechStack
