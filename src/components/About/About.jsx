import React from "react"
import PropTypes from "prop-types"
import { Splide, SplideSlide } from "@splidejs/react-splide"
import styles from "./About.module.css"
import "@splidejs/react-splide/css"

function About({ about, pictures }) {
    return (
        <div className={styles.Container}>
            <div className={styles.TextContainer}>
                <h1>Mark Albrand Mendoza</h1>
                {about.map((paragraph) => (
                    <p key={paragraph.toString()} className={styles.Text}>
                        {paragraph}
                    </p>
                ))}
            </div>
            <div className={styles.Slider}>
                <Splide
                    options={{
                        rewind: true,
                        type: "loop",
                        autoplay: true,
                        interval: 3500,
                        arrows: false,
                        pauseOnHover: true,
                    }}
                >
                    {pictures.map((picture, index) => (
                        <SplideSlide key={picture.toString()}>
                            <img
                                className={styles.Image}
                                src={picture.toString()}
                                alt={`About ${index}`}
                            />
                        </SplideSlide>
                    ))}
                </Splide>
            </div>
        </div>
    )
}

About.propTypes = {
    about: PropTypes.arrayOf(PropTypes.string).isRequired,
    pictures: PropTypes.arrayOf(PropTypes.string).isRequired,
}

export default About
