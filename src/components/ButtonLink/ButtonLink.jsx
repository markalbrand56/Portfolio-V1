import React from "react"
import PropTypes from "prop-types"
import styles from "./ButtonLink.module.css"

function ButtonLink({ url, icon }) {
    return (
        <a href={url} className={styles.ButtonLink}>
            Code
            <img src={icon} alt="i" />
        </a>
    )
}

ButtonLink.propTypes = {
    url: PropTypes.string.isRequired,
    icon: PropTypes.string.isRequired,
}

export default ButtonLink
