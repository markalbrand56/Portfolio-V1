import React from "react"
import PropTypes from "prop-types"
import styles from "./ButtonLink.module.css"

function ButtonLink({ children, url, icon, theme }) {
    return (
        <a
            href={url}
            className={`${styles.ButtonLink} ${styles[theme]}`}
            target="_blank"
            rel="noopener noreferrer"
        >
            {children}
            <img src={icon} alt="i" />
        </a>
    )
}

ButtonLink.defaultProps = {
    children: "",
    theme: "secondary",
}

ButtonLink.propTypes = {
    children: PropTypes.string,
    url: PropTypes.string.isRequired,
    icon: PropTypes.string.isRequired,
    theme: PropTypes.oneOf(["primary", "secondary", "github", "linkedin"]),
}

export default ButtonLink
