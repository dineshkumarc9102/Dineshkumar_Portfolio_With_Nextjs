// =======================
// ✅ PROFILE / PERSONAL
// =======================
import new_profile from "./newProfile.jpg";
import new_profile_image from "./newDP.jpg";

// =======================
// ✅ SOCIAL / CONTACT
// =======================
import github from "./GitHub.svg";
import linkedin from "./linkedin.svg";
import gmail from "./gmail.svg";
import youtube from "./youtube_project.svg"

// =======================
// ✅ TECH STACK (CORE)
// =======================
import html from "./html.svg";
import css from "./css.svg";
import js from "./js.svg";
import java from "./java.svg";
import python from "./Python.svg";
import sql from "./sql.svg"
import reactjs from "./reactjs.svg";
import nodejs from "./nodejs.svg";
import express from "./Express.svg";
import nextjs from "./nextjs.svg";
import tailwindcss from "./Tailwind CSS.svg";
import mongodb from "./MongoDB.svg";
import mysql from "./mysql.svg";
import firebase from "./Firebase.svg";
import powerbi from "./Power-BI.svg";
import excel from "./excel.svg";
import colab from "./googlecolab.svg";
import jupyter from "./Jupyter.svg"
import scikit from "./scikit-learn.svg"
import numpy from "./NumPy.svg"
import pandas from "./Pandas.svg"
import matplot from "./matplotlib.svg"
import socket_io from "./Socket.io.svg"
import tmdb from "./tmdb.svg"
import cg from "./cg.svg"
import flask from "./Flask.svg"
import ml from "./ml.png"

// =======================
// ✅ TOOLS / DESIGN
// =======================
import figma from "./Figma.svg";
import canva from "./Canva.svg";
import xd from "./XD.svg";
import motion from "./motion.png";
import framer from "./framermotion.svg";
import vite from "./vite.svg";
import restapi from "./restapi.svg";

// =======================
// ✅ PLATFORMS / DEV TOOLS
// =======================
import vscode from "./vscode.svg";
import postman from "./Postman.svg";
import netlify from "./netlify.svg";
import render from "./render.svg";
import sap from "./SAP.svg";

// =======================
// ✅ EDUCATION / COMPANY
// =======================
import vit from "./vit.svg";
import rbm from "./rbm.png";
import TVSmotor from "./TVS.svg";

// =======================
// ✅ CERTIFICATES
// =======================
import dlc from "./dlc.png";
import aic from "./aic.png";
import mlc from "./mlc.png";
import networkc from "./networkc.png";
import webc from "./webc.png";
import pythonc from "./pythonc.png";
import excelc from "./excelc.png";
import gitc from "./gitc.png";

// =======================
// ✅ BRANDING
// =======================
import logo_white from "./DK logo.svg";
import logo_black from "./DK logo black.svg";

// =======================
// ✅ EXPORT ALL 
// =======================
export const assets = {

    // ✅ profile 
    new_profile,
    new_profile_image,

    // ✅ social
    github,
    linkedin,
    gmail,
    youtube,

    // ✅ tech
    html,
    css,
    js,
    java,
    python,
    sql,
    reactjs,
    nodejs,
    express,
    nextjs,
    tailwindcss,
    mongodb,
    mysql,
    firebase,
    powerbi,
    excel,
    colab,
    jupyter,
    scikit,
    numpy,
    pandas,
    matplot,
    socket_io,
    tmdb,
    cg,
    flask,
    ml,

    // ✅ tools
    figma,
    canva,
    xd,
    motion,
    framer,
    vite,
    restapi,

    // ✅ platforms
    vscode,
    postman,
    netlify,
    render,
    sap,

    // ✅ education
    vit,
    rbm,
    TVSmotor,

    // ✅ certificates
    dlc,
    aic,
    mlc,
    networkc,
    webc,
    pythonc,
    excelc,
    gitc,

    // ✅ branding
    logo_white,
    logo_black
};

// -----------------------------------------------------------------------------------------------------------------------------------------------------------

export const skills = [
    { iconLight: assets.html, iconDark: assets.html, name: "HTML" },
    { iconLight: assets.css, iconDark: assets.css, name: "CSS" },
    { iconLight: assets.js, iconDark: assets.js, name: "JavaScript" },
    { iconLight: assets.reactjs, iconDark: assets.reactjs, name: "React" },
    { iconLight: assets.nextjs, iconDark: assets.nextjs, name: "Next.js" },
    { iconLight: assets.tailwindcss, iconDark: assets.tailwindcss, name: "Tailwind CSS" },
    { iconLight: assets.motion, iconDark: assets.motion, name: "Framer Motion" },
    { iconLight: assets.vite, iconDark: assets.vite, name: "Vite" },
    
    { iconLight: assets.nodejs, iconDark: assets.nodejs, name: "Node.js" },
    { iconLight: assets.restapi, iconDark: assets.restapi, name: "Rest API" },
    { iconLight: assets.python, iconDark: assets.python, name: "Python" },

    { iconLight: assets.excel, iconDark: assets.excel, name: "Excel" },
    { iconLight: assets.powerbi, iconDark: assets.powerbi, name: "Power BI" },
    { iconLight: assets.sql, iconDark: assets.sql, name: "SQL" },

    { iconLight: assets.xd, iconDark: assets.xd, name: "Adobe XD" },
    { iconLight: assets.figma, iconDark: assets.figma, name: "Figma" },
    { iconLight: assets.canva, iconDark: assets.canva, name: "Canva" },

    { iconLight: assets.github, iconDark: assets.github, name: "GitHub" },
    { iconLight: assets.sap, iconDark: assets.sap, name: "SAP" },
    { iconLight: assets.netlify, iconDark: assets.netlify, name: "Netlify" },
    { iconLight: assets.render, iconDark: assets.render, name: "Render" },
    { iconLight: assets.postman, iconDark: assets.postman, name: "Postman" },
    { iconLight: assets.mongodb, iconDark: assets.mongodb, name: "MongoDB" },
    { iconLight: assets.firebase, iconDark: assets.firebase, name: "Firebase" },
    { iconLight: assets.colab, iconDark: assets.colab, name: "Google Colab" },
    { iconLight: assets.jupyter, iconDark: assets.jupyter, name: "Jupyter Notbook" },

];


export const experienceData = [
    {
        icon: assets.TVSmotor,
        title: "Executive Trainee",
        company: "TVS Motor Company",
        duration: "2025 - Present",
        description: "Driving digital transformation initiatives by working on SAP operations, data analysis using Excel, and UI/UX design with Adobe XD to convert business processes into efficient digital solutions.",
        skills: [
            { icon: assets.excel, name: "Excel" },
            { icon: assets.sap, name: "SAP" },
            { icon: assets.xd, name: "Adobe XD" },
        ]
    },
]


export const educationData = [
    {
        icon: assets.vit,
        title: 'Master of Computer Applications',
        university: 'Vellore Institute of Technology - Vellore',
        duration: '2023 - 2025',
        score: '8.43/10'
    },
    {
        icon: assets.vit,
        title: 'Bachelor of Computer Applications',
        university: 'Vellore Institute of Technology - Vellore',
        duration: '2020 - 2023',
        score: '8.49/10'
    },
    {
        icon: assets.rbm,
        title: 'Higher Secondary',
        university: 'Rathinagiri Bageerathan Matriculation Higher Secondary School - Ranipet',
        duration: '2019 - 2020',
        score: '71%'
    },
    {
        icon: assets.rbm,
        title: 'Secondary Education',
        university: 'Rathinagiri Bageerathan Matriculation Higher Secondary School - Ranipet',
        duration: '2017 - 2018',
        score: '84%'
    },
]

export const projectData = [
    {
        title: 'Financial Intelligence Dashboard',
        domain: 'Power BI & ReactJS',
        tech: ["ReactJS", "NodeJS", "ExpressJS", "JWT", "Power BI"],
        date: 'May - 2026',
        description: 'Financial dashboard for salary tracking, investments, and portfolio analytics with interactive reports.',
        bgImage: '/dashboard_project.png',
        link: 'https://dineshkumar-dashboard-website.netlify.app/'
    },
    // {
    //     title: 'Scribbly',
    //     domain: 'MERN Stack',
    //     tech: ["MongoDB", "ExpressJS", "ReactJS", "NodeJS"],
    //     date: 'May - 2025',
    //     description: 'Full-stack notes app with CRUD operations and a clean, responsive user interface.',
    //     bgImage: '/scribbly_project.png',
    //     link: 'https://dineshkumar-scribbly-using-mern.onrender.com/'
    // },
    {
        title: 'Parkinson Disease Prediction using Machine Learning',
        domain: 'Machine Learning & MERN Stack',
        tech: ["Python", "Flask", "ReactJS", "NodeJS", "Scikit-learn"],
        date: 'Mar - 2025',
        description: 'ML-powered web application for Parkinson’s disease prediction with real-time analysis.',
        bgImage: '/ml_project.png',
        link: 'https://github.com/dineshkumarc9102/Dineshkumar_Parkinson-s_Disease_Prediction'
    },
    {
        title: 'Chat App',
        domain: 'MERN Stack',
        tech: ["MongoDB", "ExpressJS", "ReactJS", "NodeJS", "Socket.IO"],
        date: 'Feb - 2025',
        description: 'Real-time chat application with messaging, image sharing, and customizable themes.',
        bgImage: '/chatapp-project.png',
        link: 'https://dineshkumar-chat-app-using-mern.onrender.com/'
    },
    {
        title: 'Crypto Tracker',
        domain: 'Dynamic Web App',
        tech: ["ReactJS", "JavaScript", "CoinGecko API", "CSS"],
        date: 'Jan - 2025',
        description: 'Cryptocurrency tracker displaying live prices, market trends, and coin statistics.',
        bgImage: '/cryptotracker_project.png',
        link: 'https://dineshkumarc-crypto-tracker.netlify.app/'
    },
    {
        title: 'YouTube Clone',
        domain: 'Dynamic Web App',
        tech: ["ReactJS", "JavaScript", "YouTube Data API"],
        date: 'Jan - 2025',
        description: 'Video streaming platform with search, recommendations, and embedded playback.',
        bgImage: '/youtube_project.png',
        link: 'https://dineshkumarc-youtube-clone.netlify.app/'
    },
    {
        title: 'Netflix Clone',
        domain: 'Dynamic Web App',
        tech: ["ReactJS", "Firebase", "TMDB API"],
        date: 'Jan - 2025',
        description: 'Movie streaming application featuring authentication and dynamic content browsing.',
        bgImage: '/netflix_project.png',
        link: 'https://dineshkumarc-cloneflix.netlify.app/'
    },
    {
        title: 'Study on Data Breach Detection using NLP and ML Methods ',
        domain: 'Machine Learning & NLP',
        tech: ["Pandas", "Scikit-learn", "NLP", "Machine Learning"],
        date: 'Nov - 2024',
        description: 'Analyzed breach datasets and achieved 90.48% prediction accuracy using NLP techniques.',
        bgImage: '/nlp_project.png',
        link: 'https://github.com/dineshkumarc9102/Dineshkumar_Study_on_Data_Breach_Detection_using_NLP_and_ML_Methods'
    },

    {
        title: 'Mens Look Website',
        domain: 'Static Website',
        tech: ["HTML", "CSS", "JavaScript"],
        date: 'Jul - 2024',
        description: 'Salon website showcasing services, pricing, and customer-focused design.',
        bgImage: '/menslook_project.png',
        link: 'https://dineshkumarc-mens-look.netlify.app/'
    },
    {
        title: 'My Portfolio Website',
        domain: 'Static Website',
        tech: ["NextJS", "Tailwind CSS", "Framer Motion"],
        date: 'Apr - 2024',
        description: 'Personal portfolio highlighting projects, skills, and professional achievements.',
        bgImage: '/portfolio_project.png',
        link: 'https://dineshkumar-portfolio-website.netlify.app/'
    },
    {
        title: 'Feature Selection and Classification Model for Cancer',
        domain: 'Machine Learning',
        tech: ["Python", "Scikit-learn", "Pandas", "NumPy"],
        date: 'Mar - 2023',
        description: 'Cancer prediction model using feature selection and classification techniques.',
        bgImage: '/ml_project.png',
        link: 'https://github.com/dineshkumarc9102/Dineshkumar_Feature_Selection_And_Classification_Model_For_Cancer'
    },
]


export const certificateData = [

    {
        title: 'Fundamentals of Deep Learning',
        issuer: 'NVIDIA',
        date: '2024',
        bgImage: assets.dlc,
        link: 'https://drive.google.com/file/d/1L9HDH4-ruS9d2U8PPDaiZik9k8qFlS0G/view?usp=drive_link'
    },
    {
        title: 'Work Smarter with Microsoft Excel',
        issuer: 'Microsoft - Coursera',
        date: '2024',
        bgImage: assets.excelc,
        link: 'https://drive.google.com/file/d/1V1nIJEtPskZnyiHuosmBVZjbacCFUKpC/view?usp=drive_link'
    },
    {
        title: 'Introduction to AI',
        issuer: 'IBM - Coursera',
        date: '2024',
        bgImage: assets.aic,
        link: 'https://drive.google.com/file/d/1uRh2dSZUsitapaXUIqdjkQxLZNa0d9K7/view?usp=drive_link'
    },
    {
        title: 'Introduction to Git and GitHub',
        issuer: 'Google - Coursera',
        date: '2024',
        bgImage: assets.gitc,
        link: 'https://drive.google.com/file/d/1mOOHNiqPaFNXyZSG77DHS25nOWj_lR3Y/view?usp=drive_link'
    },
    {
        title: 'Machine Learning with Python',
        issuer: 'IBM - Coursera',
        date: '2023',
        bgImage: assets.mlc,
        link: 'https://drive.google.com/file/d/1vSPOUdL4QUkPSrWXM6ZBEDjpQYRRnxSS/view?usp=drive_link'
    },
    {
        title: 'Networking Cardinals',
        issuer: 'VIT',
        date: '2023',
        bgImage: assets.networkc,
        link: 'https://drive.google.com/file/d/1C31zURnNN2gJDcimWStHwYWD82eY5q5f/view?usp=drive_link'
    },
    {
        title: 'Indroduction to Web Development',
        issuer: 'IBM - Coursera',
        date: '2023',
        bgImage: assets.webc,
        link: 'https://drive.google.com/file/d/1NJCT7I2-nj1GboYJZFuKw95D0oIoEIS7/view?usp=drive_link'
    },
    {
        title: 'Python Programming',
        issuer: 'VIT',
        date: 'June - 2022',
        bgImage: assets.pythonc,
        link: 'https://drive.google.com/file/d/1A--lMjqnbiWoMyJ3cU3m87dNUQA5a-Xh/view?usp=drive_link'
    },
]
