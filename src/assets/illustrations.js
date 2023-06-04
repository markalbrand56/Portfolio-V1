import logo from "./svg/logo-no-background.svg"
import me from "./img/M4K05373.jpg"
import externalLinks from "./svg/icons8-external-link.svg"
import Challenger from "./img/M4K01929.png"
import EC from "./img/M4K03098.png"
import Moon from "./img/M4K04607-1.png"
import mail from "./svg/mail-svgrepo-com.svg"

const devIcons = "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/"

const illustrations = {
    githubLogin: `${devIcons}github/github-original.svg`,
    linkedInLogin: `${devIcons}linkedin/linkedin-plain.svg`,
    logo,
    externalLinks,
    mail,
    about: [me, Challenger, EC, Moon],
}

export default illustrations
