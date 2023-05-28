import React from "react"
import PropTypes from "prop-types"
import styles from "./Experience.module.css"

function Experience({ title, description, year }) {
    return (
        <div className={styles.Container}>
            <h1 className={styles.Title}>{title}</h1>
            <div className={styles.Content}>
                <p className={styles.Year}>{year}</p>
                <p className={styles.Description}>{description}</p>
            </div>
        </div>
    )
}

Experience.propTypes = {
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    year: PropTypes.string.isRequired,
}

export default Experience
