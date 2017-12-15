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
};


const ROOT = window.location.href;
export const PROJECTS: Array<Project> = [
    {
        title: "Currencies",
        description: "One of my first React projects, where I wanted to learn more about React, how to use it, its styles and generally the framework itself.",
        image: ROOT+"/images/currencies.jpg",
        demo: "https://sharu95.github.io/currencies/",
        source: "https://github.com/Sharu95/currencies",
    },
    {
        title: "Kithe",
        description: "We were a group of students who attended a hackathon. The theme was related to travel, and the idea was to create a solution which encouraged people to travel more.",
        image: ROOT+"/images/kithe.png",
        demo: "https://riat.io/kithe_app.html",
        source: "https://github.com/Sharu95/Kithe",
    },
    {
        title: "Converter",
        description: "One of my first web projects, just a simple converter. My intention was to learn about web development fundamentals.",
        image: ROOT+"/images/converter.jpg",
        demo: "https://sharu95.github.io/converter",
        source: "https://github.com/Sharu95/converter",
    },
];