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
        text: "Github",
        url: "https://www.google.com",
        icon: illustrations.githubLogin,
    },
}
