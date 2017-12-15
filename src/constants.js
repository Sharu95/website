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
    image: string,
    demo: string,
    source: string, 
}

export const PROJECTS: Array<Project> = [
    {
        title: "Currencies",
        description: "One of my first React projects, where I wanted to learn more about React, how to use it, its styles and generally the framework itself.",
        image: "https://github.com/Sharu95/currencies/raw/master/img/README_1.png",
        demo: "https://sharu95.github.io/currencies/",
        source: "https://github.com/Sharu95/currencies",
    },
    {
        title: "Kithe",
        description: "We were a group of students who attended a hackathon. The theme was related to travel, and the idea was to create a solution which encouraged people to travel more.",
        image: "https://riat.io/img/portfolio/kithe-landing.png",
        demo: "https://riat.io/kithe_app.html",
        source: "https://github.com/Sharu95/Kithe",
    },
]