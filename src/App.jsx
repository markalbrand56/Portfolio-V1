import React, { useEffect, useState } from "react"

import { Link } from "react-scroll"
import PocketBase from "pocketbase"

import styles from "./App.module.css"

import About from "./components/About/About"
import ButtonLink from "./components/ButtonLink/ButtonLink"
import Education from "./components/Education/Education"
import Experience from "./components/Experience/Experience"
import Project from "./components/Project/Project"
import TechStack from "./components/TechStack/TechStack"
import MainProject from "./components/MainProject/MainProject"

import illustrations from "./assets/illustrations"
import { about } from "./assets/data"

function App() {
    const backendUrl = import.meta.env.VITE_BACKEND_URL
    const pb = new PocketBase(backendUrl)

    const [projectList, setProjectList] = useState([])
    const [mainProjectList, setMainProjectList] = useState([])
    const [experienceList, setExperienceList] = useState([])
    const [educationList, setEducationList] = useState([])
    const [certificateList, setCertificateList] = useState([])
    const [techStackList, setTechStackList] = useState([])

    const waveTopLarge = `${styles.SpacerLarge} ${styles.waveTopLarge1}`
    const waveBottomLarge = `${styles.SpacerLarge} ${styles.waveBottomLarge1}`
    const waveBottomSmall = `${styles.SpacerSmall} ${styles.waveBottomSmall1}`

    useEffect(() => {
        // Proyectos
        const fetchProjects = async () => {
            const records = await pb
                .collection("Proyectos_Secundarios")
                .getFullList({
                    sort: "-created",
                })
            // Convert Tags to array
            return records.map((record) => ({
                ...record,
                Tags: record.Tags.split(",").map((tag) => tag.trim()),
                LiveDemo: record.LiveDemo === "" ? null : record.LiveDemo,
            }))
        }
        fetchProjects().then((records) => {
            setProjectList(records)
        })

        const fetchMainProjects = async () => {
            const records = await pb
                .collection("Proyectos_Principales")
                .getFullList({
                    sort: "-created",
                })
            return records.map((record) => ({
                ...record,
                Tags: record.Tags.split(",").map((tag) => tag.trim()),
                LiveDemo: record.LiveDemo === "" ? null : record.LiveDemo,
            }))
        }
        fetchMainProjects().then((records) => {
            setMainProjectList(records)
        })

        // Experiencia
        const fetchExperience = async () => {
            const records = await pb.collection("Experiencia").getFullList({
                sort: "-Order",
            })
            return records
        }
        fetchExperience().then((records) => {
            setExperienceList(records)
        })

        // Educación
        const fetchEducation = async () => {
            const records = await pb.collection("Educacion").getFullList({
                sort: "-created",
            })
            return records
        }
        fetchEducation().then((records) => {
            setEducationList(records)
        })

        // Certificados
        const fetchCertificates = async () => {
            const records = await pb.collection("Certificados").getFullList({
                sort: "-created",
            })
            return records
        }
        fetchCertificates().then((records) => {
            setCertificateList(records)
        })

        // Tech Stack
        const fetchTechStack = async () => {
            const records = await pb.collection("TechStack").getFullList({
                sort: "created",
            })
            return records
        }
        fetchTechStack().then((records) => {
            setTechStackList(records)
        })
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
                <h2>Software Engineer</h2>
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

            <TechStack techStack={techStackList} />

            <div className={waveTopLarge} />
            <section id="projects" className={styles.Projects}>
                <h1 className={styles.Titulo1}>Proyectos</h1>
                <div className={styles.MainProjects}>
                    {mainProjectList.map((project) => (
                        <MainProject
                            key={project.id}
                            title={project.Title}
                            description={project.Description}
                            tags={project.Tags}
                            url={project.Github}
                            liveDemo={project.LiveDemo}
                            type={project.Type}
                        />
                    ))}
                </div>
                <div className={styles.SecondaryProjects}>
                    {projectList.map((project) => (
                        <Project
                            key={project.id}
                            title={project.Title}
                            description={project.Description}
                            tags={project.Tags}
                            url={project.Github}
                            liveDemo={project.LiveDemo}
                            type={project.Type}
                        />
                    ))}
                </div>
            </section>

            <div className={waveBottomLarge} />

            <section id="experience" className={styles.Experience}>
                <h1 className={styles.Titulo2}>Experiencia laboral</h1>
                {experienceList.map((exp) => (
                    <Experience
                        key={exp.Position}
                        title={exp.Position}
                        description={exp.Description}
                        year={exp.Date}
                    />
                ))}
            </section>

            <section id="education" className={styles.Education}>
                <h1 className={styles.Titulo2}>Educación</h1>
                {educationList.map((edu) => (
                    <Education
                        key={edu.Institute}
                        title={edu.Institute}
                        description={edu.Description}
                        year={edu.Time}
                    />
                ))}
            </section>

            <section id="certificates" className={styles.Certificates}>
                <h1 className={styles.Titulo2}>Certificados</h1>
                {certificateList.map((cert) => (
                    <Education
                        key={cert.Title}
                        title={cert.Title}
                        description={cert.Institute}
                        year={cert.Date}
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
