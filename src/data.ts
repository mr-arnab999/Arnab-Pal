import portfolioImage from "./assets/images/regenerated_image_1784448355548.png";
import { ExperienceItem, Project, Service, Skill } from "./types";

export const PERSONAL_INFO = {
  name: "Arnab Pal",
  role: "AI & Full Stack Developer",
  bio: "I use cutting-edge AI tools to transform ideas into responsive websites, innovative applications, and premium UI/UX designs that are modern, functional, and visually engaging.",
  email: "mrarnab861@gmail.com",
  phone: "+918167402376",
  location: "Bankura",
  github: "https://github.com/mr-arnab999",
  linkedin: "https://www.linkedin.com/in/arnab-pal-5b3bb141b?utm_source=share_via&utm_content=profile&utm_medium=member_android",
  twitter: "https://x.com/arnab13377",
};

export const SKILLS: Skill[] = [
  { name: "HTML&CSS", level: 95, category: "Web Development" },
  { name: "TypeScript", level: 60, category: "Web Development" },
  { name: "Stitch", level: 95, category: "UI/UX" },
  { name: "Node.js", level: 50, category: "Web Development" },
  { name: "Python", level: 50, category: "AI & ML" },
  { name: "NumPy(Basic)", level: 45, category: "AI & ML" },
  { name: "ChatGPT", level: 95, category: "AI Tools" },
  { name: "Perplexity", level: 90, category: "AI Tools" },
  { name: "Claude AI", level: 85, category: "AI Tools" },
  { name: "Google AI Studio", level: 95, category: "AI Tools" },
  { name: "Figma", level: 80, category: "UI/UX" },
  { name: "Canva", level: 85, category: "UI/UX" },
];

export const EXPERIENCE: ExperienceItem[] = [
  {
    title: "Diploma-Computer Science and Technology",
    company: "Sir Rajendra Nath Mukherjee Government Polytechnic",
    date: "2023 - 2026",
    description: "CGPA: 8.2",
    performance: {
      title: "Semester Performance",
      overall: "8.2",
      semesters: [
        { name: "Semester 1", gpa: "8.0" },
        { name: "Semester 2", gpa: "9.0" },
        { name: "Semester 3", gpa: "8.4" },
        { name: "Semester 4", gpa: "8.8" },
        { name: "Semester 5", gpa: "7.6" },
        { name: "Semester 6", gpa: "Pursuing" }
      ]
    },
    type: "education",
    link: "https://www.google.com/maps/place/Sir+Rajendra+Nath+Mukherjee+govt.+Polytechnic+(Basirhat+Govt.+Polytechnic+College)/@22.650491,88.8499476,17z/data=!4m14!1m7!3m6!1s0x39ff55c586aebcf7:0x974aabb4007664d0!2sSir+Rajendra+Nath+Mukherjee+govt.+Polytechnic+(Basirhat+Govt.+Polytechnic+College)!8m2!3d22.650491!4d88.8525225!16s%2Fg%2F11df0lvqcq!3m5!1s0x39ff55c586aebcf7:0x974aabb4007664d0!8m2!3d22.650491!4d88.8525225!16s%2Fg%2F11df0lvqcq?entry=ttu&g_ep=EgoyMDI2MDYyOS4wIKXMDSoASAFQAw%3D%3D"
  },
  {
    title: "1-Year Diploma in Computer Application",
    company: "Rajiv Gandhi Computer Center, Bankura",
    date: "2023 - 2024",
    description: "95.5% score",
    type: "education",
    link: "https://www.google.com/maps/place/Rajiv+Gandhi+computer+center/@23.2415808,87.0624861,18.29z/data=!4m15!1m8!3m7!1s0x39f7a5f670544fef:0x2ece3b11aac256f!2sPratap+Bagan,+Bankura,+West+Bengal+722101!3b1!8m2!3d23.2423937!4d87.0641023!16s%2Fg%2F11b6bq3w2n!3m5!1s0x39f7a57798f7fc3f:0xf2b7b39cab579170!8m2!3d23.2406389!4d87.062605!16s%2Fg%2F11lllp8_wb?entry=ttu&g_ep=EgoyMDI2MDcxMy4wIKXMDSoASAFQAw%3D%3D"
  },
  {
    title: "Secondary Education",
    company: "Mankanali High School",
    date: "2018 - 2023",
    description: "75.4% score",
    type: "education",
    link: "https://www.google.com/maps/place/Mankanali+High+School/@23.3285623,87.042359,17z/data=!4m14!1m7!3m6!1s0x39f7a84027dd67e9:0x2c76cfcf4db0ead1!2sMankanali+High+School!8m2!3d23.3285623!4d87.042359!16s%2Fg%2F11c53rn63_!3m5!1s0x39f7a84027dd67e9:0x2c76cfcf4db0ead1!8m2!3d23.3285623!4d87.042359!16s%2Fg%2F11c53rn63_?entry=ttu&g_ep=EgoyMDI2MDYyOS4wIKXMDSoASAFQAw%3D%3D"
  }
];

export const PROJECTS: Project[] = [
  {
    title: "Library Management System",
    description: "A comprehensive digital library management system for tracking books, managing members, and streamlining the borrowing process with an intuitive interface.",
    image: "https://images.unsplash.com/photo-1507842217343-583bb7270b66?auto=format&fit=crop&q=80&w=1000",
    tags: ["React", "Node.js", "PostgreSQL", "Tailwind"],
    github: "https://github.com/mr-arnab999",
    demo: "https://drive.google.com/drive/folders/1npYgqyA_JuH6eSvWaGwZl2OO0XlxM8Y7",
    category: "Web"
  },
  {
    title: "Online Coffee Shop",
    description: "Manage the online coffee shop. A complete e-commerce platform with menu browsing, online ordering, and order management.",
    image: "https://images.unsplash.com/photo-1497935586351-b67a49e012bf?auto=format&fit=crop&q=80&w=1000",
    tags: ["Python", "Django", "Tailwind CSS"],
    github: "https://github.com/mr-arnab999",
    demo: "#",
    category: "Web"
  },
  {
    title: "Diabetes Prediction System",
    description: "A machine learning project for diabetes prediction. It helps identify risks related to blood sugar issues and potential diabetes based on patient medical data.",
    image: "https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&q=80&w=1000",
    tags: ["Python", "Machine Learning", "Scikit-Learn"],
    github: "https://github.com/mr-arnab999",
    demo: "#",
    category: "Machine Learning"
  },
  {
    title: "Weather App",
    description: "A real-time weather forecasting application providing current conditions, accurate forecasts, and interactive weather maps.",
    image: "https://images.unsplash.com/photo-1592210454359-9043f067919b?auto=format&fit=crop&q=80&w=1000",
    tags: ["React", "API Integration", "Tailwind CSS"],
    github: "https://github.com/mr-arnab999",
    demo: "#",
    category: "Web"
  },
  {
    title: "Personal Portfolio",
    description: "A modern, highly responsive personal portfolio website built to showcase my skills, experience, and projects.",
    image: portfolioImage,
    tags: ["React", "HTML & CSS", "AI Tools"],
    github: "https://github.com/mr-arnab999",
    demo: "#",
    category: "Web"
  }
];

export const SERVICES: Service[] = [
  {
    title: "AI Integration",
    description: "Seamlessly integrate Large Language Models and custom AI solutions into your existing products to 10x your capabilities.",
    iconName: "Brain"
  },
  {
    title: "Web Development",
    description: "Build incredibly fast, responsive, and accessible web applications with modern frameworks and stunning animations.",
    iconName: "Code2"
  },
  {
    title: "UI/UX Design",
    description: "Craft premium, user-centric interfaces with a focus on conversion, accessibility, and pixel-perfect implementation.",
    iconName: "Palette"
  }
];
