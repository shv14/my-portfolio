import {
  benefitIcon1,
  benefitIcon2,
  benefitIcon3,
  benefitIcon4,
  benefitImage2,
  chromecast,
  disc02,
  file02,
  homeSmile,
  notification2,
  notification3,
  notification4,
  plusSquare,
  recording01,
  recording03,
  roadmap1,
  roadmap2,
  roadmap3,
  roadmap4,
  searchMd,
  sliders04,
  yourlogo,
} from "../assets";
import tailwind from "../assets/icons/tailwind.svg";
import mail from "../assets/icons/mail.svg";
import html from "../assets/icons/html.svg";
import react from "../assets/icons/react.svg";
import blank1 from "../assets/icons/blank1.png";
import c from "../assets/icons/c.svg";
import cpp from "../assets/icons/cpp.svg";
import git from "../assets/icons/git.svg";
import django from "../assets/icons/django.svg";
import linkedin from "../assets/icons/linkedin.svg";
import python from "../assets/icons/python.svg";
import scikitlearn from "../assets/icons/scikitlearn.png";
import powerBI from "../assets/icons/powerBI.svg";
import mongodb1 from "../assets/icons/mongodb1.svg";
import github1 from "../assets/icons/github1.svg";
import mysql from "../assets/icons/mysql.svg";
import card1 from "../assets/benefits/card-1.svg";
import card2 from "../assets/benefits/card-2.svg";
import card3 from "../assets/benefits/card-3.svg";
import card4 from "../assets/benefits/card-4.svg";
import card5 from "../assets/benefits/card-5.svg";
import card6 from "../assets/benefits/card-6.svg";

export const navigation = [
  {
    id: "0",
    title: "Home",
    url: "#Home",
  },
  {
    id: "1",
    title: "About",
    url: "#About",
  },
  {
    id: "2",
    title: "Projects",
    url: "#Projects",
  },
  {
    id: "3",
    title: "Skills",
    url: "#Skills",
  },
  {
    id: "4",
    title: "Contact",
    url: "#Contact",
  },
];

export const heroIcons = [homeSmile, file02, searchMd, plusSquare];

export const notificationImages = [notification4, notification3, notification2];

export const companyLogos = [yourlogo, yourlogo, yourlogo, yourlogo, yourlogo];

export const brainwaveServices = [
  "Photo generating",
  "Photo enhance",
  "Seamless Integration",
];

export const brainwaveServicesIcons = [
  recording03,
  recording01,
  disc02,
  chromecast,
  sliders04,
];

export const about = [
  {
    id: "0",
    title: "Introduction",
    text: "Hello there! My name is Shivansh Srivastav, and I'm currently a fourth-year student pursuing a degree in Computer Science. With a deep-rooted passion for technology and innovation, I find myself constantly intrigued by the fascinating realms of Artificial Intelligence, Machine Learning, and Full Stack Web Development.",
    imageUrl: roadmap1,
    colorful: true,
  },
  {
    id: "1",
    title: "Background and Experience",
    text: "In my journey, I've delved into the realms of Web technology and Machine Learning, crafting impactful projects. These ventures not only honed my technical skills but also fostered a deep understanding of real-world applications. Additionally, I actively volunteered in numerous college events, further refining my teamwork and leadership abilities while contributing to the vibrant campus community. Through these experiences, I've gained invaluable insights into problem-solving, innovation, and collaboration, positioning me as a dynamic and versatile contributor in the field of technology.",
    imageUrl: roadmap2,
    colorful: true,
  },
  {
    id: "2",
    title: "Skills and Expertise",
    text: "Proficient in C++, Java, Data Structures and Algorithms (DSA), and Database Management Systems (DBMS), with a strong foundation in Web development technologies. Experienced in leveraging these skills to create innovative solutions and contribute effectively to projects. Passionate about continuous learning and staying abreast of the latest advancements in the field.",
    imageUrl: roadmap3,
    colorful: true,
  },
  {
    id: "3",
    title: "Passions and Interests",
    text: "In addition to my professional pursuits, I am deeply passionate about the fields of Web development and Machine Learning. Exploring the endless possibilities that these technologies offer fascinates me, and I am continuously seeking to expand my knowledge and skills in this rapidly evolving domain. Furthermore, I have a keen interest in web development, where I enjoy crafting innovative solutions and creating engaging user experiences on the digital frontier.",
    imageUrl: roadmap4,
    colorful: true,
  },
];

export const collabText =
  "With smart automation and top-notch security, it's the perfect solution for teams looking to work smarter.";

export const collabContent = [
  {
    id: "0",
    title: "Seamless Integration",
    text: collabText,
  },
  {
    id: "1",
    title: "Smart Automation",
  },
  {
    id: "2",
    title: "Top-notch Security",
  },
];




export const skills = [
  {
    id: "0",
    title: "Web Development",
    text: "I possess a strong command in web development, evidenced by my adeptness in various technologies and frameworks such as React.js and Next.js and Django, with a track record of successfully completing various projects in the field.",
    iconUrl: html,
    iconUrl2: tailwind,
    iconUrl3: react,
    iconUrl4: django,
    
    backgroundUrl: card1,
  },
  {
    id: "1",
    title: "Machine Learning",
    text:"I possess strong proficiency in machine learning, having crafted several impactful projects in the domain, which serve as a testament to my expertise and dedication to innovation.",
    iconUrl: python,
    iconUrl2: scikitlearn,
    iconUrl3: powerBI,
    iconUrl4: blank1,
    backgroundUrl: card2,
  },
  {
    id: "2",
    title: "Data Structures And Algorithms",
    text:"Proefficient in Data Structures And Algorithms.",
    iconUrl: blank1,
    iconUrl2: blank1,
    iconUrl3: blank1,
    iconUrl4: blank1,
    backgroundUrl:card3,
  },
  {
    id: "3",
    title: "C/C++",
    text:"I excel in C and C++, having honed my skills through completing Data Structures and Algorithms coursework. With a solid foundation in DSA, I'm equipped to tackle programming challenges effectively.",
    iconUrl: c,
    iconUrl2: cpp,
    iconUrl3: blank1,
    iconUrl4: blank1,
    backgroundUrl: card4,
  },
  {
    id: "4",
    title: "Databases",
    text:"I demonstrate adeptness in database management, facilitating seamless data organization and retrieval. My proficiency in databases ensures smooth operations and informed decision-making.",
    iconUrl: mysql,
    iconUrl2: mongodb1,
    iconUrl3: blank1,
    iconUrl4: blank1,
    backgroundUrl: card5,
  },
  {
    id: "5",
    title: "Version Control",
    text:"I am proficient in using Git and GitHub, adept at version control, collaborative development, and repository management, ensuring efficient project workflow and seamless team collaboration.",
    iconUrl: git,
    iconUrl2: github1,
    iconUrl3: blank1,
    iconUrl4: blank1,
    backgroundUrl: card6,
  },
]


export const projects = [
  {
    id: "0",
    title: "Discussion Room Website",
    text: "Study Room is a collaborative platform designed to enhance online learning and discussions. Using Django for the backend and Bootstrap for a sleek, responsive design, this project allows users to create virtual study rooms and engage in real-time conversations on various topics.",
    backgroundUrl: card2,
    iconUrl: benefitIcon2,
    imageUrl: benefitImage2,
    light: true,
    link: "http://dibneyralph.pythonanywhere.com/",
  },
  {
    id: "1",
    title: "Notes Web application",
    text: "Notes Web Application using the MERN stack (MongoDB, Express.js, React, Node.js) and Bootstrap for a sleek and responsive design. This project offers users an efficient and user-friendly platform to create, manage, and organize their notes.",
    backgroundUrl: card5,
    iconUrl: benefitIcon1,
    imageUrl: benefitImage2,
    link: "https://mern-notes-application.netlify.app/"
  },
  {
    id: "2",
    title: "Netflix Clone",
    text: "Netflix clone website is a recreation of the popular streaming platform, built using TypeScript, React.js, Next.js, and MongoDB. This project aims to replicate the core features and functionalities of Netflix. The website delivers a seamless and responsive viewing experience across different devices, ensuring optimal performance and accessibility.",
    backgroundUrl: card6,
    iconUrl: benefitIcon2,
    imageUrl: benefitImage2,
    link: "https://netflix-clone-1w2d.vercel.app/auth"
  },
  {
    id: "3",
    title: "Personal Portfolio Website",
    text: "Lets users quickly find answers to their questions without having to search through multiple sources.",
    backgroundUrl: card4,
    iconUrl: benefitIcon4,
    imageUrl: benefitImage2,
    light: true,
    link: "https://shv14.github.io/myportfolio.github.io/"
  },
  {
    id: "4",
    title: "Instagram Spam User Detector",
    text: "Instagram spam user detector, powered by machine learning. Leveraging advanced algorithms, it swiftly categorizes Instagram users as spam or legitimate based on their behavior and interactions.",
    backgroundUrl: "./src/assets/benefits/card-1.svg",
    stack: "Machine Learning, HTML, CSS, JavaScript, Flask",
    iconUrl: benefitIcon1,
    imageUrl: benefitImage2,
    link:"https://github.com/shv14/Instagram-Spam-Detection",
  },
  {
    id: "5",
    title: "Random Revolve",
    text: "This Website is powered by React.js and bootstrap. It focuses on generating random posts with an authentication also there is another feature of infinite scroll and a search bar to search through the page.",
    backgroundUrl:card3,
    iconUrl: benefitIcon3,
    imageUrl: benefitImage2,
    link: "https://mern-randomrevolve-app.netlify.app/"
  },
];

export const socials = [
  {
    id: "0",
    title: "LinkedIn",
    iconUrl: linkedin,
    url: "https://linkedin.com/in/shivansh-srivastav-124a08284",
  },
  {
    id: "1",
    title: github1,
    iconUrl: "./src/assets/icons/github1.svg",
    url: "https://github.com/shv14",
  },
  {
    id: "2",
    title: "email",
    iconUrl: mail,
    url: "mailto:shivansh14202@gmail.com",
  },

];
