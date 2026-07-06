import { ExperienceItem, Project, Service, Skill } from "./types";

export const PERSONAL_INFO = {
  name: "Arnab Pal",
  role: "AI & Full Stack Developer",
  bio: "I use cutting-edge AI tools to transform ideas into responsive websites, innovative applications, and premium UI/UX designs that are modern, functional, and visually engaging.",
  email: "mrarnab861@gmail.com",
  phone: "+918167402376",
  location: "Bankura",
  github: "https://github.com/arnab-git282",
  linkedin: "https://www.linkedin.com/in/arnab-pal-5b3bb141b?utm_source=share_via&utm_content=profile&utm_medium=member_android",
  twitter: "https://x.com/arnab13377",
};

export const SKILLS: Skill[] = [
  { name: "Html/Css", level: 95, category: "Web Development" },
  { name: "TypeScript", level: 90, category: "Web Development" },
  { name: "Stitch", level: 95, category: "UI/UX" },
  { name: "Node.js", level: 85, category: "Web Development" },
  { name: "Python", level: 90, category: "AI & ML" },
  { name: "TensorFlow / PyTorch", level: 80, category: "AI & ML" },
  { name: "SQL", level: 85, category: "Databases" },
  { name: "AWS / GCP", level: 75, category: "Cloud" },
  { name: "Figma", level: 80, category: "UI/UX" },
];

export const EXPERIENCE: ExperienceItem[] = [
  {
    title: "Student - Computer Science And Technology",
    company: "Sir Rajendra Nath Mukherjee Government Polytechnic",
    date: "2023 - PRESENT",
    description: "Studying Computer Science and Technology.",
    type: "education",
    link: "https://www.google.com/maps/place/Sir+Rajendra+Nath+Mukherjee+govt.+Polytechnic+(Basirhat+Govt.+Polytechnic+College)/@22.650491,88.8499476,17z/data=!4m14!1m7!3m6!1s0x39ff55c586aebcf7:0x974aabb4007664d0!2sSir+Rajendra+Nath+Mukherjee+govt.+Polytechnic+(Basirhat+Govt.+Polytechnic+College)!8m2!3d22.650491!4d88.8525225!16s%2Fg%2F11df0lvqcq!3m5!1s0x39ff55c586aebcf7:0x974aabb4007664d0!8m2!3d22.650491!4d88.8525225!16s%2Fg%2F11df0lvqcq?entry=ttu&g_ep=EgoyMDI2MDYyOS4wIKXMDSoASAFQAw%3D%3D"
  },
  {
    title: "Secondary Education",
    company: "Mankanali High School",
    date: "2018 - 2023",
    description: "Nothing to yet",
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
    github: "#",
    demo: "https://drive.google.com/drive/folders/1npYgqyA_JuH6eSvWaGwZl2OO0XlxM8Y7",
    category: "Web"
  },
  {
    title: "Online Coffee Shop",
    description: "Manage the online coffee shop. A complete e-commerce platform with menu browsing, online ordering, and order management.",
    image: "https://images.unsplash.com/photo-1497935586351-b67a49e012bf?auto=format&fit=crop&q=80&w=1000",
    tags: ["Python", "Django", "Tailwind CSS"],
    github: "#",
    demo: "#",
    category: "Web"
  },
  {
    title: "Diabetes Prediction System",
    description: "A machine learning project for diabetes prediction. It helps identify risks related to blood sugar issues and potential diabetes based on patient medical data.",
    image: "https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&q=80&w=1000",
    tags: ["Python", "Machine Learning", "Scikit-Learn"],
    github: "#",
    demo: "#",
    category: "Machine Learning"
  },
  {
    title: "Weather App",
    description: "A real-time weather forecasting application providing current conditions, accurate forecasts, and interactive weather maps.",
    image: "https://images.unsplash.com/photo-1592210454359-9043f067919b?auto=format&fit=crop&q=80&w=1000",
    tags: ["React", "API Integration", "Tailwind CSS"],
    github: "#",
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
