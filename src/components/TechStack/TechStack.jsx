import React, { useState } from "react"
import PropTypes from "prop-types"
import styles from "./TechStack.module.css"

const CATEGORIES = [
    "Lenguajes",
    "Frameworks",
    "Bases de Datos",
    "Frontend",
    "Backend",
    "DevOps",
    "Cloud",
    "AI",
]

function TechStack({ techStack }) {
    const [selectedTech, setSelectedTech] = useState(null)
    const [selectedCategory, setSelectedCategory] = useState("Lenguajes")

    const handleTechClick = (tech) => {
        if (selectedTech?.name === tech.name) {
            setSelectedTech(null)
        } else {
            setSelectedTech(tech)
        }
    }

    const handleCategoryChange = (category) => {
        setSelectedCategory(category)
        setSelectedTech(null)
    }

    const filteredTechStack = techStack.filter((tech) =>
        tech.category.includes(selectedCategory)
    )

    return (
        <div className={styles.TechStackContainer}>
            <div className={styles.CategorySelector}>
                {CATEGORIES.map((category) => (
                    <button
                        key={category}
                        className={
                            selectedCategory === category
                                ? styles.ActiveCategory
                                : styles.CategoryButton
                        }
                        onClick={() => handleCategoryChange(category)}
                    >
                        {category}
                    </button>
                ))}
            </div>
            <div className={styles.ImageContainer}>
                {filteredTechStack.map((tech) => (
                    <img
                        key={tech.name}
                        src={tech.icon}
                        alt={tech.name}
                        className={`${styles.Item} ${
                            selectedTech?.name === tech.name
                                ? styles.Selected
                                : ""
                        }`}
                        onClick={() => handleTechClick(tech)}
                    />
                ))}
            </div>
            <p
                className={`${styles.Name} ${
                    selectedTech ? styles.NameVisible : ""
                }`}
            >
                {selectedTech?.name}
            </p>
            <p
                className={`${styles.Description} ${
                    selectedTech ? styles.DescriptionVisible : ""
                }`}
            >
                {selectedTech?.description}
            </p>
        </div>
    )
}

TechStack.propTypes = {
    techStack: PropTypes.arrayOf(
        PropTypes.shape({
            name: PropTypes.string.isRequired,
            icon: PropTypes.string.isRequired,
            description: PropTypes.string.isRequired,
            category: PropTypes.arrayOf(PropTypes.string).isRequired,
        })
    ).isRequired,
}

export default TechStack
