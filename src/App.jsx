import React from "react"
import styles from "./App.module.css"
import Proyecto from "./components/Proyecto/Proyecto"
import TechStack from "./components/TechStack/TechStack"
import Education from "./components/Education/Education"
import { education, projects, certificates, experience } from "./assets/data"
import Experience from "./components/Experience/Experience"
import { Link, animateScroll as scroll } from "react-scroll"

function App() {
    const waveTopLarge = `${styles.SpacerLarge} ${styles.waveTopLarge1}`
    const waveBottomLarge = `${styles.SpacerLarge} ${styles.waveBottomLarge1}`
    const waveBottomSmall = `${styles.SpacerSmall} ${styles.waveBottomSmall1}`

    return (
        <div className={styles.App}>
            <nav className={styles.Navbar}>
                <div className={styles.NavLogo}>Logo</div>
                <div className={styles.NavLinks}>
                    <Link
                        className={styles.NavLink}
                        to="projects"
                        smooth
                        duration={500}
                    >
                        Proyectos
                    </Link>
                    <Link
                        className={styles.NavLink}
                        to="education"
                        smooth
                        duration={500}
                    >
                        Educación
                    </Link>
                    <Link
                        className={styles.NavLink}
                        to="certificates"
                        smooth
                        duration={500}
                    >
                        Certificados
                    </Link>
                    <Link
                        className={styles.NavLink}
                        to="experience"
                        smooth
                        duration={500}
                    >
                        Experiencia
                    </Link>
                </div>
            </nav>
            <div className={waveBottomSmall} />

            <section className={styles.Hero}>
                <p>Hola! Mi nombre es</p>
                <h1 className={styles.Name}>Mark Albrand</h1>
                <h2>Backend Developer</h2>
                <span>
                    Soy un estudiante en la carrera de Ingeniería en Ciencias de
                    la Computación, con experiencia en desarrollo web y backend.
                </span>
            </section>

            <TechStack />

            <div className={waveTopLarge} />
            <section id="projects" className={styles.Projects}>
                <h1 className={styles.Titulo1}>Proyectos</h1>
                {projects.map((project) => (
                    <Proyecto
                        key={project.title}
                        title={project.title}
                        description={project.description}
                        tags={project.tags}
                        url={project.url}
                    />
                ))}
            </section>

            <div className={waveBottomLarge} />

            <section id="education" className={styles.Education}>
                <h1 className={styles.Titulo2}>Educación</h1>
                {education.map((edu) => (
                    <Education
                        key={edu.title}
                        title={edu.title}
                        description={edu.description}
                        year={edu.year}
                    />
                ))}
            </section>

            <section id="certificates" className={styles.Certificates}>
                <h1 className={styles.Titulo2}>Certificados</h1>
                {certificates.map((cert) => (
                    <Education
                        key={cert.title}
                        title={cert.title}
                        description={cert.description}
                        year={cert.year}
                    />
                ))}
            </section>

            <section id="experience" className={styles.Experience}>
                <h1 className={styles.Titulo2}>Experiencia laboral</h1>
                {experience.map((exp) => (
                    <Experience
                        key={exp.title}
                        title={exp.title}
                        description={exp.description}
                        year={exp.year}
                    />
                ))}
            </section>
            <div className={waveTopLarge} />

            {/* TODO About me: cards */}
            <div className={styles.Footer}>Footer</div>
        </div>
    )
}

export default App
