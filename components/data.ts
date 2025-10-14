import {FaDocker, FaLinkedin, FaNodeJs } from "react-icons/fa";
import { SiExpress, SiLinktree } from "react-icons/si";
import { VscGithub } from "react-icons/vsc";
import { FaHtml5, FaCss3Alt, FaJs, FaReact} from "react-icons/fa";
import {
  SiTypescript,
  SiNextdotjs,
  SiTailwindcss,
} from "react-icons/si";
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
  { name: "blog", thumbnail: "https://res.cloudinary.com/djnwsinit/image/upload/v1760386910/blog_kf0io6.jpg", href: "https://omnipress-zeta.vercel.app/"},
  {name: "movie app", thumbnail: "https://res.cloudinary.com/djnwsinit/image/upload/v1760386910/movieapp_rw54tf.jpg ", href:  "https://multiplex-dun.vercel.app/"},
  {name: "space travel", thumbnail: "https://res.cloudinary.com/djnwsinit/image/upload/v1760386910/space-travel_qimwpa.jpg", href: "https://space-travel-webste.netlify.app/"},
  {name: "product page", thumbnail: "https://res.cloudinary.com/djnwsinit/image/upload/v1760386910/product-card_iv576g.jpg", href: "https://productpage101.netlify.app/"},
  {name: "task app", thumbnail: "https://res.cloudinary.com/djnwsinit/image/upload/v1760386910/todo_fopqqq.jpg", href: "https://todoapp202.netlify.app/"}
];
