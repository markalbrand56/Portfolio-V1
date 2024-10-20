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
]

function TechStack({ techStack }) {
    const [hoveredTech, setHoveredTech] = useState({})
    const [selectedCategory, setSelectedCategory] = useState("Lenguajes")

    const handleMouseEnter = (techName) => {
        setHoveredTech(techName)
    }

    const handleMouseLeave = () => {
        setHoveredTech({})
    }

    const handleCategoryChange = (category) => {
        setSelectedCategory(category)
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
                        type="button"
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
                        className={styles.Item}
                        onMouseEnter={() => handleMouseEnter(tech)}
                        onMouseLeave={handleMouseLeave}
                    />
                ))}
            </div>
            {hoveredTech.name && (
                <>
                    <p className={styles.Name}>{hoveredTech.name}</p>
                    <p className={styles.Description}>
                        {hoveredTech.description}
                    </p>
                </>
            )}
        </div>
    )
}

TechStack.propTypes = {
    techStack: PropTypes.arrayOf(
        PropTypes.shape({
            name: PropTypes.string,
            icon: PropTypes.string,
            description: PropTypes.string,
            category: PropTypes.arrayOf(PropTypes.string),
        })
    ).isRequired,
}

export default TechStack
