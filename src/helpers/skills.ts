import css from "../images/skills/css.svg";
import expressjs from "../images/skills/expressjs.svg";
import figma from "../images/skills/figma.svg";
import firebase from "../images/skills/firebase.svg";
import framermotion from "../images/skills/framermotion.svg";
import git from "../images/skills/git.svg";
import html from "../images/skills/html.svg";
import javascript from "../images/skills/javascript.svg";
import jest from "../images/skills/jest.svg";
import nextjs from "../images/skills/nextjs.svg";
import nodejs from "../images/skills/nodejs.svg";
import npm from "../images/skills/npm.svg";
import react from "../images/skills/react.svg";
import reactrouter from "../images/skills/reactrouter.svg";
import redux from "../images/skills/redux.svg";
import sass from "../images/skills/sass.svg";
import tailwind from "../images/skills/tailwind.svg";
import typescript from "../images/skills/typescript.svg";
import vite from "../images/skills/vite.svg";
import webpack from "../images/skills/webpack.svg";
import yarn from "../images/skills/yarn.svg";
import { StaticImageData } from "next/image";

type skillsType = {
  image: StaticImageData;
  liked: boolean;
  description: string;
  title: string;
};
export const skills: skillsType[] = [
  { image: css, liked: false, description: "База", title: "CSS" },
  {
    image: expressjs,
    liked: false,
    description: "Веб-фреймворк для бэкенда на nodejs",
    title: "Express.js",
  },
  {
    image: figma,
    liked: true,
    description: "База не только для дизайнеров",
    title: "Figma",
  },
  {
    image: firebase,
    liked: true,
    description: "Облачная база данных и не только от Google",
    title: "Google Firebase",
  },
  {
    image: framermotion,
    liked: true,
    description: "Отличная библиотека для анимации на React",
    title: "Framer Motion",
  },
  { image: git, liked: true, description: "База", title: "Git" },
  { image: html, liked: false, description: "База", title: "HTML" },
  { image: javascript, liked: false, description: "База", title: "JavaScript" },
  {
    image: jest,
    liked: false,
    description: "Библиотека для тестирования JS кода",
    title: "Jest",
  },
  {
    image: nextjs,
    liked: false,
    description: "SSR и тд и тп",
    title: "Next.js",
  },
  { image: nodejs, liked: false, description: "Бэкенд", title: "Node.js" },
  { image: npm, liked: false, description: "Пакетный менеджер", title: "NPM" },
  { image: react, liked: true, description: "Мой любимец", title: "React 🔥" },
  {
    image: reactrouter,
    liked: true,
    description: "Библиотека для маршрутизации React",
    title: "React Router",
  },
  {
    image: redux,
    liked: true,
    description: "Управление состояниями данных",
    title: "Redux",
  },
  {
    image: sass,
    liked: true,
    description: "Лучше, чем css. Less не нравится, люблю скобки ставить",
    title: "SASS",
  },
  {
    image: tailwind,
    liked: false,
    description:
      "Библиотека, которая продолжает идею bootstrap и улучшает ее, но мне не понравилось",
    title: "Tailwind",
  },
  {
    image: typescript,
    liked: true,
    description: "Мой любимец",
    title: "TypeScript",
  },
  {
    image: vite,
    liked: true,
    description: "Сборка веб-приложений",
    title: "Vite",
  },
  {
    image: webpack,
    liked: false,
    description: "Сборка веб-приложений, Vite нравится больше",
    title: "Webpack",
  },
  {
    image: yarn,
    liked: true,
    description: "Пакетный менеджер, лучше чем npm",
    title: "Yarn",
  },
];
