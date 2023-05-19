import React from "react"
import styles from "./ButtonLink.module.css"
import PropTypes from "prop-types"

function ButtonLink({ url, icon }) {
    return (
        <a href={url} className={styles.ButtonLink}>
            <img src={icon} alt="i" />
        </a>
    )
}

ButtonLink.propTypes = {
    url: PropTypes.string.isRequired,
    icon: PropTypes.string.isRequired,
}

export default ButtonLink
