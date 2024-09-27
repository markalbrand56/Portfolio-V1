import React, { useRef } from "react"
import PropTypes from "prop-types"
import styles from "./MainProject.module.css"
import illustrations from "../../assets/illustrations"
import ButtonLink from "../ButtonLink/ButtonLink"

function MainProject({ title, description, tags, url, liveDemo, type }) {
    const tagContainerRef = useRef(null)
    const maxTags = 5

    const scrollLeft = () => {
        tagContainerRef.current.scrollBy({ left: -300, behavior: "smooth" })
    }

    const scrollRight = () => {
        tagContainerRef.current.scrollBy({ left: 300, behavior: "smooth" })
    }

    const shouldShowCarousel = tags.length > maxTags

    return (
        <div className={styles.Container}>
            <div className={styles.Header}>
                <div className={styles.Title}>
                    <h1>{title}</h1>
                    <span>{type}</span>
                </div>
                <div className={styles.TagsWrapper}>
                    {shouldShowCarousel && (
                        <button
                            onClick={scrollLeft}
                            className={styles.ScrollButton}
                            type="button"
                        >
                            ◀
                        </button>
                    )}

                    <div
                        className={
                            shouldShowCarousel
                                ? styles.TagsWrapped
                                : styles.Tags
                        }
                        ref={tagContainerRef}
                    >
                        {tags.map((tag) => (
                            <span key={tag} className={styles.Tag}>
                                {tag}
                            </span>
                        ))}
                    </div>

                    {shouldShowCarousel && (
                        <button
                            onClick={scrollRight}
                            className={styles.ScrollButton}
                            type="button"
                        >
                            ▶
                        </button>
                    )}
                </div>
            </div>

            <div className={styles.Content}>
                <div
                    className={styles.Description}
                    dangerouslySetInnerHTML={{ __html: description }}
                />
            </div>
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
    )
}

MainProject.defaultProps = {
    liveDemo: null,
}

MainProject.propTypes = {
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    tags: PropTypes.arrayOf(PropTypes.string).isRequired,
    url: PropTypes.string.isRequired,
    liveDemo: PropTypes.string,
    type: PropTypes.string.isRequired,
}

export default MainProject
