import React, {useEffect, useState} from "react"
import {Link} from "react-scroll"
import styles from "./App.module.css"
import About from "./components/About/About"
import ButtonLink from "./components/ButtonLink/ButtonLink"
import Education from "./components/Education/Education"
import Experience from "./components/Experience/Experience"
import Proyecto from "./components/Proyecto/Proyecto"
import TechStack from "./components/TechStack/TechStack"
import illustrations from "./assets/illustrations"
import {about, certificates, education, experience, projects,} from "./assets/data"
import PocketBase from "pocketbase"

function App() {
    const pb = new PocketBase("http://127.0.0.1:8090")
    const [projectList, setProjectList] = useState([]);

    const waveTopLarge = `${styles.SpacerLarge} ${styles.waveTopLarge1}`
    const waveBottomLarge = `${styles.SpacerLarge} ${styles.waveBottomLarge1}`
    const waveBottomSmall = `${styles.SpacerSmall} ${styles.waveBottomSmall1}`

    useEffect(() => {
        const fetchProjects = async () => {
            const records = await pb.collection("Proyectos").getFullList({
                sort: "-created",
            })

            // Convert Tags to array
            return records.map((record) => ({
                ...record,
                Tags: record.Tags.split(",").map((tag) => tag.trim()),
            }))
        }
        fetchProjects().then((records) => {
            setProjectList(records)
        })
        console.log("Project List", projectList)
    }, [])

    return (
        <div className={styles.App}>
            <nav className={styles.Navbar}>
                <img
                    className={styles.NavLogo}
                    src={illustrations.logo}
                    alt="Logo"
                />
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
                        to="experience"
                        smooth
                        duration={500}
                    >
                        Experiencia
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
                    <ButtonLink
                        icon={illustrations.mail}
                        url="mailto:mark.albrand@protonmail.com"
                    >
                        Contacto
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
                        liveDemo={project.liveDemo}
                    />
                ))}
            </section>

            <div className={waveBottomLarge} />

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

            <div className={waveTopLarge} />

            <section id="about" className={styles.About}>
                <h1 className={styles.Titulo1}>Acerca de mí</h1>
                <About about={about} pictures={illustrations.about} />
            </section>

            <div className={waveBottomSmall} />
            <div className={styles.Footer}>
                <span> Diseñado y desarrollado por Mark Albrand </span>
            </div>
        </div>
    )
}

export default App
