import ButtonLink from "./ButtonLink"
import illustrations from "../../assets/illustrations"

export default {
    title: "Components/ButtonLink",
    component: ButtonLink,
    tags: ["autodocs"],
    argTypes: {},
}

export const Github = {
    args: {
        children: "Github",
        url: "https://www.google.com",
        icon: illustrations.githubLogin,
        theme: "github",
    },
}

export const LinkedIn = {
    args: {
        children: "LinkedIn",
        url: "https://www.google.com",
        icon: illustrations.linkedInLogin,
        theme: "linkedin",
    },
}
