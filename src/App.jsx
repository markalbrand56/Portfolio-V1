import React from "react"
import styles from "./App.module.css"
import Proyecto from "./components/Proyecto/Proyecto"
import TechStack from "./components/TechStack/TechStack"
import Education from "./components/Education/Education"
import { education, projects, certificates, experience } from "./assets/data"
import Experience from "./components/Experience/Experience"

function App() {
    const spacerClass1 = `${styles.SpacerLarge} ${styles.layer1}`
    const spacerClass2 = `${styles.SpacerLarge} ${styles.layer2}`
    const spacerClass3 = `${styles.SpacerSmall} ${styles.layer3}`

    return (
        <div className={styles.App}>
            <div className={styles.Navbar}>Navigation</div>
            <div className={spacerClass3} />

            <h1 className={styles.Name}>Mark Albrand</h1>
            <h2>Backend Developer</h2>

            <TechStack />

            <div className={spacerClass1} />
            <div className={styles.Projects}>
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
            </div>

            <div className={spacerClass2} />

            <h1 className={styles.Titulo2}>Educación</h1>
            <div className={styles.Education}>
                {education.map((edu) => (
                    <Education
                        key={edu.title}
                        title={edu.title}
                        description={edu.description}
                        year={edu.year}
                    />
                ))}
            </div>

            <h1 className={styles.Titulo2}>Certificados</h1>
            <div className={styles.Certificates}>
                {certificates.map((cert) => (
                    <Education
                        key={cert.title}
                        title={cert.title}
                        description={cert.description}
                        year={cert.year}
                    />
                ))}
            </div>

            <h1 className={styles.Titulo2}>Experiencia laboral</h1>
            <div className={styles.Experience}>
                {experience.map((exp) => (
                    <Experience
                        key={exp.title}
                        title={exp.title}
                        description={exp.description}
                        year={exp.year}
                    />
                ))}
            </div>
            <div className={spacerClass1} />

            {/* TODO About me: cards */}
            <div className={styles.Footer}>Footer</div>
        </div>
    )
}

export default App
