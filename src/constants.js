/* @flow */
export const CATEGORIES = {
    PROJECTS: 'projects',
    BLOG: 'blog',
    ABOUT: 'about',
    
    TITLE: {
        PROJECTS: 'Projects',
        BLOG: 'Blog',
        ABOUT: 'About me'
    }
};

export const CONSTANTS = {
    LINKEDIN: "https://www.linkedin.com/in/sharanankulam/",
    GITHUB: "https://github.com/Sharu95",
    TWITTER: "https://twitter.com/_sharu20",
    MEDIUM: "https://medium.com/@developersharu",
    DEFAULT_LANDING: CATEGORIES.PROJECTS,
};

export type Project = {
    title: string,
    description: string,
    image: string,
    demo: string,
    source: string,
    tag: Array<string>,
};


export const ROOT = window.location.href;
//console.log('CONSTANTS ROOT FETCH', ROOT+"/images/currencies.jpg");

export const PROJECTS: Array<Project> = [
    {
        title: "Smart Mirror",
        description: "Inspired by the MagicMirror OSS project and Max Braun's (Google X) smart mirror implementation, I wanted to learn some new technologies and implement one myself.",
        image: "/images/smart_mirror.png",
        demo: "https://sharu95.github.io/smart-mirror",
        source: "",
        tag: ["React", "Redux"],
    },
    {
        title: "Github website",
        description: "Diving further into react, to be able to understand the technical aspects of the framework, and lifecycles. After this, I think Redux would be good to look at.",
        image: "/images/website.jpg",
        demo: "/",
        source: "https://github.com/Sharu95/website",
        tag: ["React"],
    },
    {
        title: "Currencies",
        description: "One of my first React projects, where I wanted to learn more about React, how to use it, its styles and generally the framework itself.",
        image: "/images/currencies.jpg",
        demo: "https://sharu95.github.io/currencies/",
        source: "https://github.com/Sharu95/currencies",
        tag: ["React"],
    },
    {
        title: "Kithe",
        description: "We were a group of students who attended a hackathon. The idea was to create a solution which encouraged people to travel more.",
        image: "/images/kithe.png",
        demo: "https://riat.io/kithe_app.html",
        source: "https://github.com/Sharu95/Kithe",
        tag: ["Android", "Java"],
    },
    {
        title: "Converter",
        description: "One of my first web projects, just a simple converter. My intention was to learn about web development fundamentals.",
        image: "/images/converter.jpg",
        demo: "https://sharu95.github.io/converter",
        source: "https://github.com/Sharu95/converter",
        tag: ["JQuery"],
    },
];

export const ABOUT_ME = {
    TITLE: "Student, Software Engineer & thinker",
    DESCRIPTION: {
        INTRO:
        "I am a Computer Science student based in Norway, who studies at University of Oslo.\
        I have a general passion for technology, technological innovation and overall anything\
        that relates to tech! Within the field of Computer Science, I've genuinely found Artificial Intelligence\
        to be interesting after taking courses at the university, which also became a motivation for writing a\
        master thesis within the field. My master thesis relates to optimising charging processes\
        of electric vehicles, both economically and environmentally, by using neural models.",
        
        GENERAL:
        "During my full-time studies, I've also worked part-time as a Customer Service Agent. Freetime\
        outside studies and job, is often used to disconnect and reflect or to acquire new\
        knowledge, like learning new software frameworks, languages or tools. I also like playing\
        futsal, hiking, skiing, gaming and non-fictional reading",
        
        ME: "I am a person with big ambitions, I think and reflect a lot, and I hope to make an impact through\
        my interest in technology, both in my professional career and life in general. I believe that knowledge\
        is best utilized through interdiscplinary collaboration, and don't like to think of knowledge,\
        learning or concepts in \"silos\". Knowledge-sharing is truly a value of mine, and I believe that\
        I can learn a lot from other people, and likewise, educate others with the knowledge i possess.\
        Additionally, I consciously strive to be a better human-being, genuinely want people to do good\
        in life and eventually, my ambition is to help people with limited resources\
        to be able to have similar opportunities as I've had so far in life."
    },
    TECH_SKILLS:
        [ "Python", "Java", "C", "R", "Javascript", "Common Lisp", "Scheme", "React", "HTML", "CSS", "Node", "Django", "MongoDB", "Flask", "Git"],
    INTERESTS:
        [ "AI", "AGI", "Functional paradigm", "Hiking", "Research", "Skiing", "Design", "Web design", "Technology", "Reading", "Futsal", ],
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
