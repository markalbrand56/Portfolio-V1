import React from "react"
import PropTypes from "prop-types"
import styles from "./About.module.css"

function About({ about, picture }) {
    // TODO EN LA FOTO HACER UN COSO COMO EL LAB DE LA MEMORIA, AL PRESIONAR LA FOTO QUE MUESTRE OTRA COSA ATRAS
    return (
        <div className={styles.Container}>
            <div className={styles.TextContainer}>
                {about.map((paragraph) => (
                    <p key={paragraph} className={styles.Text}>{paragraph}</p>
                ))}
            </div>
            <img className={styles.Image} src={picture} alt="Me" />
        </div>
    )
}

About.propTypes = {
    about: PropTypes.arrayOf(PropTypes.string).isRequired,
    picture: PropTypes.string.isRequired,
}

export default About
