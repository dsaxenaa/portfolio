import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import React from "react";
import corpcommentImg from "@/public/corpcomment.png";
import rmtdevImg from "@/public/rmtdev.png";
import wordanalyticsImg from "@/public/wordanalytics.png";

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "High School (I.C.S.E Board)",
    location: "Lucknow, India",
    description:
      "I completed my class 10th in 2016 with 95%.",
    icon: React.createElement(LuGraduationCap),
    date: "2016",
  },
  {
    title: "Intermediate (I.S.C Board)",
    location: "Lucknow, India",
    description:
      "I did my class 12th in 2018 with 90%.",
    icon: React.createElement(LuGraduationCap),
    date: "2018",
  },
  {
    title: "Bachelor's in Technology",
    location: "Dehradun, India",
    description:
      "I did my bachelor's in Computer Science and Engineering from Dehradun and passed with a CGPA of 8.8. I studied several technologies during my college and made projects and and did internships on web development.",
    icon: React.createElement(LuGraduationCap),
    date: "2019 - 2023",
  },
  {
    title:"Web Developer Intern",
    location:"Remote",
    description:"I did my internship as a web developer in iNeuron Intelligence where I learned and implemented javascript and HTML/CSS.",
    icon:React.createElement(CgWorkAlt),
    date:"May-June 2022"
  },
  {
    title:"MERN Stack Intern",
    location:"Remote",
    description:"My next internship as a MERN Stack developer in Jeevitiv where I helped in designing the app in the frontend and the backend.",
    icon:React.createElement(FaReact),
    date:"Nov' 2022-April 2023"
  }
] as const;

export const projectsData = [
  {
    title: "Book My Taxi",
    description:
      "A taxi-booking app with different booking options using Next.js, React.js, TypeScript, Tailwind CSS and MapBox along with Clerk user authentication system.",
    tags: ["React", "Next.js", "TypeScript", "Tailwind", "Mapbox","Stripe"],
    imageUrl: corpcommentImg,
  },
  {
    title: "E-Commerce Shopping Website",
    description:
      "Designed an E-commerce app for both user and admin using React.js ,Node.js and BootStrap along with MongoDB for database.",
    tags: ["React", "Node.js","MongoDB", "BootStrap", "JWT"],
    imageUrl: rmtdevImg,
  },
  // {
  //   title: "My Social App",
  //   description:
  //     "A Facebook-like social media app using React.js and Node.js and MySQL as database.",
  //   tags: ["React", "HTML", "MySQL", "CSS", "Node.js"],
  //   imageUrl: wordanalyticsImg,
  // },
  {
    title:"Weather Radio",
    description:"Get the latest weather updates of any place with this app built using React.js and Tailwind.",
    tags:["React","Next.js", "Tailwind","Weather api"],
    imageUrl:rmtdevImg
  },
  {
    title: "Todo Planner",
    description:
      "A Todo App made using React, Node.js, Bootstrap and MongoDB.",
    tags: ["React", "BootStrap", "MongoDB", "Node.js"],
    imageUrl: wordanalyticsImg,
  }
] as const;

export const skillsData = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Node.js",
  "Git",
  "Github",
  "Tailwind",
  "MongoDB",
  "Redux",
  "Express",
  "Firebase",
  "Python",
  "Java",
  "Framer Motion",
] as const;
