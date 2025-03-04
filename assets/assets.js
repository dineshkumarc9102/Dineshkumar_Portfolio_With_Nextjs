import icon from "./icon.png";
import arrow_up from "./arrow_up.svg";
import arrow_up_dark from "./arrow_up_dark.svg";
import gradient_bg from "./gradient_bg.png";
import moon_icon from "./moon_icon.svg";
import sun_icon from "./sun_icon.svg";
import menu_black from "./menu_black.svg";
import menu_white from "./menu_white.svg";
import close_black from "./close_black.svg";
import close_white from "./close_white.svg";
import profile_img from "./profile_img.png";
import profile from "./profie.png";
import hand_icon from "./hand_icon.svg";
import rigth_arrow_white from "./rigth_arrow_white.svg";
import download_icon from "./download_icon.svg";
import user_img from "./user_img.png";
import code_icon from "./code_icon.svg";
import code_icon_dark from "./code_icon_dark.svg";
import edu_icon from "./edu_icon.svg";
import edu_icon_dark from "./edu_icon_dark.svg";
import project_icon from "./project_icon.svg";
import project_icon_dark from "./project_icon_dark.svg";
import vscode from "./vscode.svg";
import github from "./github.svg";
import github_white from "./github_white.svg";
import github_black from "./github_black.svg";
import mongodb from "./mongodb.svg";
import figma from "./figma.svg";
import vit from "./vit.png";
import rbm from "./rbm.png";
import send_icon from "./send_icon.svg";
import right_arrow from "./right_arrow.svg"
import email_icon from "./email_icon.svg";
import linkedin_icon from "./linkedin_icon.svg";
import html from "./html.svg";
import css from "./css.svg";
import js from "./js.svg";
import java from "./java.svg";
import python from "./python.svg";
import reactjs from "./reactjs.svg";
import nodejs from "./nodejs.svg";
import nextjs from "./nextjs.svg";
import excel from "./excel.svg";
import tailwindcss from "./tailwindcss.svg";
import framer from "./framermotion-.svg";
import colab from "./googlecolab.svg";
import mysql from "./mysql.svg";
import gmail from "./gmail.svg";
import linkedin from "./linkedin.svg";
import motion from "./motion.png";
import vite from "./vite.svg";
import canva from "./canva.svg";
import firebase from "./firebase.svg";
import dp from './dp.png';
import home from './home.svg';
import about from './about.svg';
import education from './education.svg';
import experience from './experience.svg';
import contact from './contact.svg';
import home_white from './home_white.svg';
import about_white from './about_white.svg';
import education_white from './education-white.svg'
import experience_white from './experience_white.svg';
import contact_white from './contact_white.svg';
import netlify from './netlify.svg';
import render from './render.svg';
import render_dark from './render_dark.svg';
import postman from './postman.svg';


export const assets ={ 
    icon,
    arrow_up,
    arrow_up_dark,
    gradient_bg,
    moon_icon,
    menu_black,
    menu_white,
    close_black,
    close_white,
    profile_img,
    hand_icon,
    rigth_arrow_white,
    download_icon,
    user_img,
    code_icon,
    code_icon_dark,
    edu_icon,
    edu_icon_dark,
    project_icon,
    project_icon_dark,
    vscode,
    github,
    github_white,
    github_black,
    mongodb,
    figma,
    vit,
    rbm,
    send_icon,
    right_arrow,
    email_icon,
    linkedin_icon,
    sun_icon,
    html,
    css,
    js,
    java,
    python,
    reactjs,
    nodejs,
    nextjs,
    tailwindcss,
    framer,
    excel,
    colab,
    mysql,
    gmail,
    linkedin,
    motion,
    vite,
    canva,
    firebase,
    profile,
    dp,
    home,
    about,
    education,
    experience,
    contact,
    home_white,
    about_white,
    education_white,
    experience_white,
    contact_white,
    netlify,
    render,
    render_dark,
    postman,
}





export const infoList = [
    // {
    //     icon: assets.code_icon, iconDark: assets.code_icon_dark,
    //     title: 'Languages',
    //     description: 'HTML, CSS, JavaScript, React Js, Next Js'
    // },
    {
        icon: assets.edu_icon, iconDark: assets.edu_icon_dark,
        title: 'Education',
        description: 'BCA, MCA'
    },
    {
        icon: assets.project_icon, iconDark: assets.project_icon_dark,
        title: 'Projects',
        description: 'Build more than 5 projects'
    },
];

export const languageData = [
    {
        icon: assets.html,
        name: "HTML"
    },
    {
        icon: assets.css,
        name: "CSS"
    },
    {
        icon: assets.js,
        name: "JavaScript"
    },
    {
        icon: assets.reactjs,
        name: "React"
    },
    {
        icon: assets.python,
        name: "Python"
    },
    {
        icon: assets.java,
        name: "Java"
    },
    {
        icon: assets.nodejs,
        name: "Node.js"
    },
    {
        icon: assets.tailwindcss,
        name: "Tailwind CSS"
    },
    {
        icon: assets.vite,
        name: "Vite"
    },
    {
        icon: assets.nextjs,
        name: "Next.js"
    },
    {
        icon: assets.motion,
        name: "Framer Motion"
    }
];


export const toolsData = [
    { iconWhite: assets.vscode, iconBlack: assets.vscode, name: "VS Code" },
    { iconWhite: assets.github_white, iconBlack: assets.github_black, name: "GitHub" },
    { iconWhite: assets.netlify, iconBlack: assets.netlify, name: "Netlify" },
    { iconWhite: assets.render_dark, iconBlack: assets.render, name: "Render" },
    { iconWhite: assets.postman, iconBlack: assets.postman, name: "Postman" },
    { iconWhite: assets.colab, iconBlack: assets.colab, name: "Google Colab" },
    { iconWhite: assets.mongodb, iconBlack: assets.mongodb, name: "MongoDB" },
    { iconWhite: assets.firebase, iconBlack: assets.firebase, name: "Firebase" },
    { iconWhite: assets.figma, iconBlack: assets.figma, name: "Figma" },
    { iconWhite: assets.canva, iconBlack: assets.canva, name: "Canva" },
    { iconWhite: assets.excel, iconBlack: assets.excel, name: "Excel" },
];


export const educationData = [
    {
        icon: assets.vit,
        title: 'Master of Computer Applications',
        university: 'Vellore Institute of Technology',
        duration: '2023 - 2025',
        score: '8.29/10'
    },
    {
        icon: assets.vit,
        title: 'Bachelor of Computer Applications',
        university: 'Vellore Institute of Technology',
        duration: '2020 - 2023',
        score: '8.49/10'
    },
    {
        icon: assets.rbm,
        title: 'Higher Secondary',
        university: 'Rathinagiri Bageerathan Matriculation Higher Secondary School',
        duration: '2019 - 2020',
        score: '71%'
    },
    {
        icon: assets.rbm,
        title: 'Secondary Education',
        university: 'Rathinagiri Bageerathan Matriculation Higher Secondary School',
        duration: '2017 - 2018',
        score: '84%'
    },
]

export const projectData = [
    {
        title:'Chat App',
        domain: 'MERN Stack', 
        date: 'Feb - 2025',
        description: 'A real-time MERN chat app with one-on-one messaging, image sharing, and theme customization, powered by Socket.IO and Cloudinary.',
        bgImage: '/chatapp-project.png',
        link: 'https://dineshkumar-chat-app-using-mern.onrender.com/'
    },
    {
        title:'Crypto Tracker',
        domain: 'Dynamic Web App', 
        date: 'Jan - 2025',
        description: 'CryptoTracker offers real-time cryptocurrency data, including prices, market cap, and trends, powered by the CoinGecko API.',
        bgImage: '/cryptotracker_project.png',
        link: 'https://dineshkumarc-crypto-tracker.netlify.app/'
    },
    {
        title:'YouTube Clone',
        domain: 'Dynamic Web App',
        date: 'Jan - 2025',
        description: 'A YouTube clone using YouTube Data API v3 for seamless video streaming and in-app viewing.',
        bgImage: '/youtube_project.png',
        link: 'https://dineshkumarc-youtube-clone.netlify.app/'
    },
    {
        title:'Netflix Clone',
        domain: 'Dynamic Web App',
        date: 'Jan - 2025',
        description: 'A Netflix clone with TMDB API for a vast movie library and Firebase for secure authentication.',
        bgImage: '/netflix_project.png',
        link: 'https://dineshkumarc-cloneflix.netlify.app/'
    },
    {
        title:'Study on Data Breach Detection using NLP and ML Methods ',
        domain: 'Machine Learning & NLP',
        date: 'Nov - 2024',
        description: 'Conducted EDA and NLP on data breaches to uncover trends, extract patterns, and predict leak methods with 90.48% accuracy using Random Forest.',
        bgImage: '/nlp_project.png',
        link: 'https://github.com/dineshkumarc9102/Dineshkumar_Study_on_Data_Breach_Detection_using_NLP_and_ML_Methods'
    },
    
    {
        title:'Mens Look Website',
        domain: 'Static Website',
        date: 'Jul - 2024',
        description: 'A static, visually appealing website for a local salon, showcasing services and incorporating interactive features to enhance the user experience.',
        bgImage: '/menslook_project.png',
        link: 'https://dineshkumarc-mens-look.netlify.app/'
    },
    {
        title:'My Portfolio Website',
        domain: 'Static Website',
        date: 'Apr - 2024',
        description: 'My portfolio showcases my projects and contributions. Explore, and feel free to reach out for collaborations!',
        bgImage: '/portfolio_project.png',
        link: 'https://dineshkumar-portfolio-website.netlify.app/'
    },
    {
        title:'Feature Selection and Classification Model for Cancer',
        domain: 'Machine Learning',
        date: 'Mar - 2023',
        description: 'This project optimized algorithm selection for early-stage cancer detection using predictive analysis, confusion matrices, and entropy to minimize error rates.',
        bgImage: '/ml_project.png',
        link: 'https://github.com/dineshkumarc9102/Dineshkumar_Feature_Selection_And_Classification_Model_For_Cancer'
    },
    // {
    //     title: 'Agro Mobile Application',
    //     description: 'Mobile App',
    //     bgImage: './argo_project.png',
    // },
]