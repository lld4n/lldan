import { StaticImageData } from "next/image";
import latch from "../assets/projects/latch.png";
import leetcode from "../assets/projects/leetcode.png";
import mono from "../assets/projects/mono.png";
import musiclyrics from "../assets/projects/musiclyrics.png";
import nbascrapper from "../assets/projects/nbascrapper.png";
import sneakers from "../assets/projects/sneakers.png";

import axios from "../assets/skills/axios.svg";
import cheerio from "../assets/skills/cheerio.svg";
import convex from "../assets/skills/convex.svg";
import createreactapp from "../assets/skills/createreactapp.svg";
import express from "../assets/skills/express.svg";
import html from "../assets/skills/html.svg";
import js from "../assets/skills/js.svg";
import ky from "../assets/skills/ky.svg";
import lucide from "../assets/skills/lucide.svg";
import nextjs from "../assets/skills/nextjs.svg";
import nodejs from "../assets/skills/nodejs.svg";
import react from "../assets/skills/react.svg";
import reactrouter from "../assets/skills/reactrouter.svg";
import redux from "../assets/skills/redux.svg";
import scss from "../assets/skills/scss.svg";
import ts from "../assets/skills/ts.svg";
import vite from "../assets/skills/vite.svg";
import clerk from "@/assets/skills/clerk.svg";
import asana from "@/assets/skills/asana.svg";

type projectsType = {
  image: StaticImageData;
  title: string;
  subtitle: string;
  description: string;
  urls: projectsUrlsType[];
  skills: projectsSkillsType[];
};

type projectsSkillsType = {
  image: StaticImageData;
  background: string;
};

type projectsUrlsType = {
  text: string;
  url: string;
  github: boolean;
};

export const projects: projectsType[] = [
  {
    image: mono,
    title: "mono",
    subtitle: "Монополия онлайн",
    description:
      "Интересный опыт работы в команде с помощью Asana, а также построения сложной архитекторы бд",
    urls: [
      {
        text: "github.com/mono",
        url: "https://github.com/lld4n/mono",
        github: true,
      },
      {
        text: "mono.lldan.ru",
        url: "https://mono.lldan.ru",
        github: false,
      },
    ],
    skills: [
      {
        image: scss,
        background: "#CD6799",
      },
      {
        image: ts,
        background: "#3178C6",
      },
      {
        image: nextjs,
        background: "#FFF",
      },
      {
        image: convex,
        background: "#FFF",
      },
      {
        image: lucide,
        background: "#161617",
      },
      {
        image: clerk,
        background: "#161617",
      },
      {
        image: asana,
        background: "#FFF",
      },
    ],
  },
  {
    image: musiclyrics,
    title: "musiclyrics",
    subtitle: "Веб-приложение по поиску текста песен",
    description:
      "Мой первый проект на чистом JavaScript. Использовал бесплатное Genius API",
    urls: [
      {
        text: "github.com/musiclyrics",
        url: "https://github.com/lld4n/musiclyrics",
        github: true,
      },
      {
        text: "musiclyrics.lldan.ru",
        url: "https://musiclyrics.lldan.ru/",
        github: false,
      },
    ],
    skills: [
      {
        image: html,
        background: "#FF5800",
      },
      {
        image: scss,
        background: "#CD6799",
      },
      {
        image: js,
        background: "#F7DF1E",
      },
      {
        image: vite,
        background: "#FFF",
      },
    ],
  },
  {
    image: sneakers,
    title: "sneakers",
    subtitle: "Банальный мини-магазин кроссовок",
    description: "Мой первый полноценный проект на React",
    urls: [
      {
        text: "github.com/sneakers",
        url: "https://github.com/lld4n/sneakers",
        github: true,
      },
      {
        text: "sneakers.lldan.ru",
        url: "https://sneakers.lldan.ru",
        github: false,
      },
    ],
    skills: [
      {
        image: ts,
        background: "#3178C6",
      },
      {
        image: react,
        background: "#222222",
      },
      {
        image: createreactapp,
        background: "#2B313D",
      },
      {
        image: reactrouter,
        background: "#FFF",
      },
      {
        image: axios,
        background: "#502DD4",
      },
      {
        image: redux,
        background: "#764ABC",
      },
    ],
  },
  {
    image: nbascrapper,
    title: "nba scrapper",
    subtitle: "REST API, который парсит basketball-reference",
    description: "Хороший опыт работы с API и навык парсинга сайтов",
    urls: [
      {
        text: "github.com/nba_scrapper",
        url: "https://github.com/lld4n/nba_scrapper",
        github: true,
      },
      {
        text: "nbascrapper.lldan.ru",
        url: "https://nbascrapper.lldan.ru/api",
        github: false,
      },
    ],
    skills: [
      {
        image: ts,
        background: "#3178C6",
      },
      {
        image: nodejs,
        background: "#222222",
      },
      {
        image: express,
        background: "#FFF",
      },
      {
        image: axios,
        background: "#502DD4",
      },
      {
        image: cheerio,
        background: "#E88C1F",
      },
    ],
  },
  {
    image: latch,
    title: "latch",
    subtitle: "Веб-приложения для оценки фильмов/сериалов",
    description: "Первый опыт работы с convex",
    urls: [
      {
        text: "github.com/latch",
        url: "https://github.com/lld4n/latch",
        github: true,
      },
      {
        text: "latch.lldan.ru",
        url: "https://latch.lldan.ru",
        github: false,
      },
    ],
    skills: [
      {
        image: scss,
        background: "#CD6799",
      },
      {
        image: ts,
        background: "#3178C6",
      },
      {
        image: nextjs,
        background: "#FFF",
      },
      {
        image: convex,
        background: "#FFF",
      },
      {
        image: ky,
        background: "#FFF",
      },
      {
        image: lucide,
        background: "#161617",
      },
    ],
  },
  {
    image: leetcode,
    title: "leetcode",
    subtitle: "Мое решение задач",
    description: "Делаем самую длинную линию",
    urls: [
      {
        text: "github.com/leetcode",
        url: "https://github.com/lld4n/leetcode",
        github: true,
      },
    ],
    skills: [
      {
        image: js,
        background: "#F7DF1E",
      },
      {
        image: ts,
        background: "#3178C6",
      },
    ],
  },
];
