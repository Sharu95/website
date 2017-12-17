/* @flow */
export const CATEGORIES = {
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
    tag: string, 
};


export const ROOT = window.location.href;
console.log('CONSTANTS ROOT FETCH', ROOT+"/images/currencies.jpg");

export const PROJECTS: Array<Project> = [
    {
        title: "Github website",
        description: "Diving further into react, to be able to understand the technical aspects of the framework, and lifecycles. After this, I think Redux would be good to look at.",
        image: "/images/website.jpg",
        demo: "/",
        source: "https://github.com/Sharu95/website",
        tag: "React",
    },
    {
        title: "Currencies",
        description: "One of my first React projects, where I wanted to learn more about React, how to use it, its styles and generally the framework itself.",
        image: "/images/currencies.jpg",
        demo: "https://sharu95.github.io/currencies/",
        source: "https://github.com/Sharu95/currencies",
        tag: "React",
    },
    {
        title: "Kithe",
        description: "We were a group of students who attended a hackathon. The idea was to create a solution which encouraged people to travel more.",
        image: "/images/kithe.png",
        demo: "https://riat.io/kithe_app.html",
        source: "https://github.com/Sharu95/Kithe",
        tag: "Android",
    },
    {
        title: "Converter",
        description: "One of my first web projects, just a simple converter. My intention was to learn about web development fundamentals.",
        image: "/images/converter.jpg",
        demo: "https://sharu95.github.io/converter",
        source: "https://github.com/Sharu95/converter",
        tag: "Javascript",
    },
];

export const ABOUT_ME = {
    TITLE: "Student, Software Engineer & thinker",
    DESCRIPTION: 
        "Some description about that moi",
    TECH_SKILLS: 
        [ "Java", "C", "Python", "Javascript", "Functional Programming" ],
    INTERESTS:
        [ "AI", "Functional paradigm", "Hiking", "Design", "Web design", "Technology", "Reading"],
    SPEAKS: [ 
        {
            "emoji": "🇳🇴",
            "language": "Norwegian",
        },
        {
            "emoji": "🇱🇰",
            "language": "Tamil",
        },
        {
            "emoji": "🇬🇧",
            "language": "English",
        },
    ]
}