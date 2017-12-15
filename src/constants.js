/* @flow */
export const CATEGORIES ={
    PROJECTS: 'projects',
    BLOG: 'blog',
    ABOUT: 'about',
};

export const CONSTANTS = {
    LINKEDIN: "https://www.linkedin.com/in/sharanankulam/",
    GITHUB: "https://github.com/Sharu95",
    EMAIL: "mailto:developersharu@gmail.com",
    TWITTER: "https://twitter.com/_sharu20",
    DEFAULT_LANDING: CATEGORIES.PROJECTS,
};

export type Project = {
    title: string,
    description: string,
    image?: string,
    demo: string,
    source: string, 
}

export const PROJECTS: Array<Project> = [
    {
        title: "Currencies",
        description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
        image: "https://github.com/Sharu95/currencies/raw/master/img/README_1.png",
        demo: "https://sharu95.github.io/currencies/",
        source: "https://github.com/Sharu95/currencies",
    },
    {
        title: "Kithe",
        description: "Lorem Ipsum is simply dummy text oprinter took a galley of type and scrambled it to make a type specimen book.",
        image: "https://riat.io/img/portfolio/kithe-landing.png",
        demo: "https://riat.io/kithe_app.html",
        source: "https://github.com/Sharu95/Kithe",
    },
]