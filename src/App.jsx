import React from "react"
import { Link } from "react-scroll"
import styles from "./App.module.css"
import Proyecto from "./components/Proyecto/Proyecto"
import TechStack from "./components/TechStack/TechStack"
import Education from "./components/Education/Education"
import {
    education,
    projects,
    certificates,
    experience,
    about,
    me,
} from "./assets/data"
import Experience from "./components/Experience/Experience"
import ButtonLink from "./components/ButtonLink/ButtonLink"
import illustrations from "./assets/illustrations"
import About from "./components/About/About"

function App() {
    const waveTopLarge = `${styles.SpacerLarge} ${styles.waveTopLarge1}`
    const waveBottomLarge = `${styles.SpacerLarge} ${styles.waveBottomLarge1}`
    const waveBottomSmall = `${styles.SpacerSmall} ${styles.waveBottomSmall1}`

    return (
        <div className={styles.App}>
            <nav className={styles.Navbar}>
                <img className={styles.NavLogo} src={illustrations.logo}  alt="Logo"/>
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
                    <Link
                        className={styles.NavLink}
                        to="about"
                        smooth
                        duration={500}
                    >
                        Acerca de mí
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

                <div className={styles.Buttons}>
                    <ButtonLink
                        icon={illustrations.githubLogin}
                        url="https://github.com/markalbrand56"
                        theme="github"
                    >
                        GitHub
                    </ButtonLink>
                    <ButtonLink
                        icon={illustrations.linkedInLogin}
                        url="https://www.linkedin.com/in/mark-alexander-albrand-mendoza/"
                        theme="linkedin"
                    >
                        LinkedIn
                    </ButtonLink>
                </div>
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

            <section id="about" className={styles.About}>
                <h1 className={styles.Titulo1}>Acerca de mí</h1>
                <About about={about} picture={me} />
            </section>

            <div className={styles.Footer}>Footer</div>
        </div>
    )
}

export default App
