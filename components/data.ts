import { FaBehance, FaLinkedin } from "react-icons/fa";
import { SiFfmpeg, SiLinktree, SiVite } from "react-icons/si";
import { VscGithub } from "react-icons/vsc";
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaSass } from "react-icons/fa";
import {
  SiTypescript,
  SiNextdotjs,
  SiFirebase,
  SiTestinglibrary,
  SiTailwindcss,
  SiFramer,
  SiVitest,
} from "react-icons/si";


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
  { icon: FaSass, color: "#CC6699", name: "SCSS" },
  { icon: FaJs, color: "#F7DF1E", name: "JavaScript" },
  { icon: FaReact, color: "#61DAFB", name: "React" },
  { icon: SiVitest, color: "#6E9F18", name: "Vitest" },
  { icon: SiNextdotjs, color: "#FFFFFF", name: "Next.js" },
  { icon: SiFirebase, color: "#FFCA28", name: "Firebase" },
  { icon: SiTypescript, color: "#3178C6", name: "TypeScript" },
  { icon: SiTestinglibrary, color: "#E33332", name: "React Testing Library" },
  { icon: SiFramer, color: "#0055FF", name: "Motion" },
  { icon: SiTailwindcss, color: "#38B2AC", name: "Tailwind CSS" },
  { icon: SiVite, color: "#646CFF", name: "Vite" },
  { icon: SiFfmpeg, color: "#FF2D00", name: "FFmpeg" },
];
