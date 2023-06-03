import React from "react"
import PropTypes from "prop-types"
import styles from "./Proyecto.module.css"
import illustrations from "../../assets/illustrations"
import ButtonLink from "../ButtonLink/ButtonLink"

function Proyecto({ title, description, tags, url, liveDemo }) {
    return (
        <div className={styles.Container}>
            <h1>{title}</h1>
            <div className={styles.Content}>
                <div className={styles.Tags}>
                    {tags.map((tag) => (
                        <span key={tag} className={styles.Tag}>
                            {tag}
                        </span>
                    ))}
                </div>
                <p>{description}</p>
                <div className={styles.Buttons}>
                    <ButtonLink url={url} icon={illustrations.githubLogin}>
                        Ver en
                    </ButtonLink>
                    {liveDemo && (
                        <ButtonLink
                            url={liveDemo}
                            icon={illustrations.externalLinks}
                            theme="primary"
                        >
                            Live Demo
                        </ButtonLink>
                    )}
                </div>
            </div>
        </div>
    )
}

Proyecto.defaultProps = {
    liveDemo: null,
}

Proyecto.propTypes = {
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    tags: PropTypes.arrayOf(PropTypes.string).isRequired,
    url: PropTypes.string.isRequired,
    liveDemo: PropTypes.string,
}

export default Proyecto
