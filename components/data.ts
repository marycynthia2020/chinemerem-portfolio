import { FaDocker, FaLinkedin, FaNodeJs } from "react-icons/fa";
import { SiExpress, SiLinktree } from "react-icons/si";
import { VscGithub } from "react-icons/vsc";
import { FaHtml5, FaCss3Alt, FaJs, FaReact } from "react-icons/fa";
import { SiTypescript, SiNextdotjs, SiTailwindcss } from "react-icons/si";
import { GrMysql } from "react-icons/gr";

export const navLinks = [
  { name: "Home", path: "/" },
  { name: "About", path: "/about" },
  { name: "Contact", path: "/contact" },
  { name: "Projects", path: "/projects" },
];

export const socialLinks = [
  { medium: "Github", link: "github.com/marycynthia2020", icon: VscGithub },
  {
    medium: "LinkedIn",
    link: "www.linkedin.com/in/chinemeremugbaja",
    icon: FaLinkedin,
  },
  { medium: "Linktree", link: "linktr.ee/chinemeremugbaja", icon: SiLinktree },
];

export const skillSets = [
  { icon: FaHtml5, color: "#E34F26", name: "HTML5" },
  { icon: FaCss3Alt, color: "#1572B6", name: "CSS3" },
  { icon: SiTailwindcss, color: "#38B2AC", name: "Tailwind CSS" },
  { icon: FaJs, color: "#F7DF1E", name: "JavaScript" },
  { icon: SiTypescript, color: "#3178C6", name: "TypeScript" },
  { icon: FaReact, color: "#61DAFB", name: "React" },
  { icon: SiNextdotjs, color: "#FFFFFF", name: "Next.js" },
  { icon: FaNodeJs, color: "#6d9c5a", name: "Node.js" },
  { icon: SiExpress, color: "#ffffff", name: "Express.js" },
  { icon: GrMysql, color: "#3178C6", name: "MySQL" },
  { icon: FaDocker, color: "#1D63ED", name: "Docker" },
];

export const projects = [
  {
    name: "blog",
    thumbnail:
      "https://res.cloudinary.com/djnwsinit/image/upload/v1760386910/blog_kf0io6.jpg",
    href: "https://omnipress-zeta.vercel.app/",
    tech: ["React.js", "Tailwind CSS", "JavaScript", "REST API Integration"],
    description:
      "A blogging website with user authentication and full CRUD functionality. It allows users to register, sign in, create and manage posts, and view content through a clean, responsive interface designed for a smooth reading and writing experience.",
  },
  {
    name: "movie app",
    tech: [
      "React.js",
      "Next.js",
      "JavaScript",
      "Tailwind CSS",
      "TypeScript",
      "REST API Integration",
    ],
    thumbnail:
      "https://res.cloudinary.com/djnwsinit/image/upload/v1760386910/movieapp_rw54tf.jpg ",
    href: "https://multiplex-dun.vercel.app/",

    description:
      "A movie application that allows users to browse, search, and view details about movies. It features a clean interface, responsive design, light and dark theme support, and real-time data fetched from an external movie API.",
  },
  {
    name: "skillConnet (In progress)",
    tech: [
      "React.js",
      "Next.js",
      "Tailwind CSS",
      "JavaScript",
      "TypeScript",
      "Node.js",
      "Express.js",
    ],
    description:
      "SkillConnect is a full-stack platform designed to connect users based on skills and opportunities. I built both the frontend and backend, implementing user authentication, data management, and a responsive interface to support seamless interaction across the application.",
    thumbnail:
      "https://res.cloudinary.com/djnwsinit/image/upload/v1765736026/skillcons_qfq3ta.png",
    href: "https://skillconnect-frontend-green.vercel.app/",
  },
  {
    name: "space travel",
    tech: ["React.js", "Tailwind CSS", "JavaScript"],
    description:
      "A space travel website showcasing destinations, crew, and technology through an interactive and responsive interface. It features dynamic content switching, smooth navigation, and a layout optimized for mobile, tablet, and desktop screens.",
    thumbnail:
      "https://res.cloudinary.com/djnwsinit/image/upload/v1760386910/space-travel_qimwpa.jpg",
    href: "https://space-travel-webste.netlify.app/",
  },
  {
    name: "product page",
    tech: ["React.js", "Tailwind CSS", "JavaScript"],
    description:
      "An e-commerce product page built to closely replicate a given design with pixel-perfect accuracy. It features a responsive layout, interactive product gallery, cart functionality, and detailed attention to spacing, typography, and visual consistency across devices.",
    thumbnail:
      "https://res.cloudinary.com/djnwsinit/image/upload/v1760386910/product-card_iv576g.jpg",
    href: "https://productpage101.netlify.app/",
  },
  {
    name: "task app",
    tech: ["React.js", "Tailwind CSS", "JavaScript"],
    description:
      "A fully featured todo application with light and dark theme support and advanced task management functionality. It allows users to create, complete, delete, filter, and reorder tasks, with data persistence for a smooth and consistent user experience.",
    thumbnail:
      "https://res.cloudinary.com/djnwsinit/image/upload/v1760386910/todo_fopqqq.jpg",
    href: "https://todoapp202.netlify.app/",
  },
];
