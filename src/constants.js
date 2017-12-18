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
    DESCRIPTION: {
        INTRO: 
        "I am a Computer Science student based in Norway, who studies at University of Oslo.\
        I have a general passion for technology, technological innovation and overall anything\
        that relates to tech! Within the field of Computer Science, I've found Artificial Intelligence\
        to be interesting (hence my choice of master thesis within AI), after taking courses at\
        the university. I also like design, should it be algorithm design, web design or design\
        related to art, so that is also an interest of mine.",
        GENERAL: 
        "In addition to my full-time studies, I also work part-time as a Customer Service Agent. Freetime\
        outside of this is often used to acquire new knowledge, like software frameworks, languages\
        or tools. I also like playing futsal, hiking, skiing, gaming and non-fictional reading",
        ME: "Generally, as a person, I can be really curious. If I find something that interests me, I can\
        be diving into it, using several hours a day, without noticing the motion of time. Additionally, I\
        am also patient, and believe anything is achievable if I put my mind to it. I would say those are the\
        best characteristics of mine! However, I think I should be better at planning/scheduling and\
        waking up earlier (to possibly get in more frequent morning runs! :)), which I'm not exceptionally\
        good at.",
    },
    TECH_SKILLS: 
        [ "Python", "Java", "C", "Javascript", "Common Lisp", "Scheme", "React", "HTML", "CSS", "Node", ],
    INTERESTS:
        [ "AI", "Functional paradigm", "Hiking", "Skiing", "Design", "Web design", "Technology", "Reading", "Futsal", ],
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