import { StaticImageData } from "next/image";
import axios from "../assets/skills/axios.svg";
import cheerio from "../assets/skills/cheerio.svg";
import convex from "../assets/skills/convex.svg";
import createreactapp from "../assets/skills/createreactapp.svg";
import css from "../assets/skills/css.svg";
import express from "../assets/skills/express.svg";
import figma from "../assets/skills/figma.svg";
import firebase from "../assets/skills/firebase.svg";
import framermotion from "../assets/skills/framermotion.svg";
import git from "../assets/skills/git.svg";
import html from "../assets/skills/html.svg";
import jest from "../assets/skills/jest.svg";
import js from "../assets/skills/js.svg";
import ky from "../assets/skills/ky.svg";
import lucide from "../assets/skills/lucide.svg";
import nextjs from "../assets/skills/nextjs.svg";
import nodejs from "../assets/skills/nodejs.svg";
import npm from "../assets/skills/npm.svg";
import prettier from "../assets/skills/prettier.svg";
import react from "../assets/skills/react.svg";
import reactrouter from "../assets/skills/reactrouter.svg";
import redux from "../assets/skills/redux.svg";
import rollup from "../assets/skills/rollup.svg";
import scss from "../assets/skills/scss.svg";
import ts from "../assets/skills/ts.svg";
import vite from "../assets/skills/vite.svg";
import webpack from "../assets/skills/webpack.svg";
import yarn from "../assets/skills/yarn.svg";
type skillsType = {
  image: StaticImageData;
  emoji: string;
  title: string;
  background: string;
  color: string;
};
export const skills: skillsType[] = [
  {
    image: html,
    emoji: "🔥",
    title: "HTML",
    background: "#FF5800",
    color: "#FFF",
  },
  {
    image: css,
    emoji: "🤓",
    title: "CSS",
    background: "#2965F1",
    color: "#FFF",
  },
  {
    image: scss,
    emoji: "🔥",
    title: "SCSS",
    background: "#CD6799",
    color: "#FFF",
  },
  {
    image: js,
    emoji: "🚀",
    title: "JavaScript",
    background: "#F7DF1E",
    color: "#000",
  },
  {
    image: ts,
    emoji: "🔥",
    title: "TypeScript",
    background: "#3178C6",
    color: "#FFF",
  },
  {
    image: react,
    emoji: "🔥",
    title: "React",
    background: "#222222",
    color: "#FFF",
  },

  {
    image: nextjs,
    emoji: "🚀",
    title: "Next.js",
    background: "#FFF",
    color: "#000",
  },
  {
    image: nodejs,
    emoji: "⚡️",
    title: "Node.js",
    background: "#222222",
    color: "#FFF",
  },
  {
    image: express,
    emoji: "😬",
    title: "Express.js",
    background: "#FFF",
    color: "#000",
  },
  {
    image: git,
    emoji: "👍",
    title: "Git",
    background: "#F03C2E",
    color: "#FFF",
  },
  {
    image: figma,
    emoji: "🖤",
    title: "Figma",
    background: "#FFF",
    color: "#000",
  },
  {
    image: npm,
    emoji: "🤔",
    title: "NPM",
    background: "#FFF",
    color: "#000",
  },
  {
    image: yarn,
    emoji: "❤️",
    title: "Yarn",
    background: "#2C8EBB",
    color: "#FFF",
  },
  {
    image: redux,
    emoji: "🔒",
    title: "Redux",
    background: "#764ABC",
    color: "#FFF",
  },
  {
    image: firebase,
    emoji: "💔",
    title: "Google Firebase",
    background: "#FFF",
    color: "#000",
  },
  {
    image: convex,
    emoji: "❤️‍🔥",
    title: "Convex",
    background: "#FFF",
    color: "#000",
  },
  {
    image: vite,
    emoji: "🖤",
    title: "JavaScript",
    background: "#FFF",
    color: "#000",
  },
  {
    image: createreactapp,
    emoji: "🤔",
    title: "Create React App",
    background: "#2B313D",
    color: "#FFF",
  },
  {
    image: rollup,
    emoji: "🚀",
    title: "Rollup",
    background: "#FFF",
    color: "#000",
  },
  {
    image: webpack,
    emoji: "🤓",
    title: "Webpack",
    background: "#FFF",
    color: "#000",
  },
  {
    image: reactrouter,
    emoji: "🫡",
    title: "React Router",
    background: "#FFF",
    color: "#000",
  },
  {
    image: framermotion,
    emoji: "🫠",
    title: "Framer Motion",
    background: "#FFF",
    color: "#000",
  },
  {
    image: jest,
    emoji: "🚀",
    title: "Jest",
    background: "#99425B",
    color: "#FFF",
  },
  {
    image: axios,
    emoji: "😬",
    title: "Axios",
    background: "#502DD4",
    color: "#FFF",
  },
  {
    image: ky,
    emoji: "🔥",
    title: "ky",
    background: "#FFF",
    color: "#000",
  },
  {
    image: cheerio,
    emoji: "💔",
    title: "Cheerio",
    background: "#E88C1F",
    color: "#000",
  },
  {
    image: prettier,
    emoji: "❤️",
    title: "Prettier",
    background: "#1B262D",
    color: "#FFF",
  },
  {
    image: lucide,
    emoji: "🔥",
    title: "Lucide",
    background: "#161617",
    color: "#FFF",
  },
];
