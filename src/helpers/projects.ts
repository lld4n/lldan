import lext from "../images/projects/lext.png";
import monopoly from "../images/projects/monopoly.png";
import musiclyrics from "../images/projects/musiclyrics.png";
import nbascrapper from "../images/projects/nbascrapper.png";
import sneakers from "../images/projects/sneakers.png";
import { StaticImageData } from "next/image";

type projectsType = {
  image: StaticImageData;
  name: string;
  secondName: string;
  description: string;
  urls: projectsUrlsType[];
};

type projectsUrlsType = {
  text: string;
  url: string;
  github: boolean;
};
export const projects: projectsType[] = [
  {
    image: sneakers,
    name: "SneakerS",
    secondName: "Банальный мини-магазин кроссовок на React",
    description:
      "Мой первый полноценный проект на React\nReact + TS + Redux + mockapi",
    urls: [
      {
        github: true,
        url: "https://github.com/lld4n/sneakers",
        text: "lld4n/sneakers",
      },
      {
        github: false,
        url: "https://sneakers.lldan.ru",
        text: "sneakers.lldan.ru",
      },
    ],
  },
  {
    image: musiclyrics,
    name: "musiclyrics",
    secondName: "Веб-приложение по поиску текста песни",
    description:
      "Мой первый полноценный проект на чистом JS\nИспользовал бесплатное Genius API",
    urls: [
      {
        github: true,
        url: "https://github.com/lld4n/musiclyrics",
        text: "lld4n/musiclyrics",
      },
      {
        github: false,
        url: "https://musiclyrics.lldan.ru",
        text: "musiclyrics.lldan.ru",
      },
    ],
  },
  {
    image: monopoly,
    name: "monopoly",
    secondName: "Онлайн монополия",
    description:
      "Интересный опыт работы с Google Firebase\nVite + React + TS + Firebase",
    urls: [
      {
        github: true,
        url: "https://github.com/lld4n/monopoly",
        text: "lld4n/monopoly",
      },
      {
        github: false,
        url: "https://monopoly.lldan.ru",
        text: "monopoly.lldan.ru",
      },
    ],
  },
  {
    image: nbascrapper,
    name: "nba scrapper",
    secondName: "REST API, который парсит basketball-reference",
    description:
      "Хороший опыт работы с запросами\nExpress + Axios + Cheerio + TS",
    urls: [
      {
        github: true,
        url: "https://github.com/lld4n/nba_scrapper",
        text: "lld4n/nba_scrapper",
      },
      {
        github: false,
        url: "https://nbascrapper.lldan.ru/api/other/actualseason",
        text: "nbascrapper.lldan.ru",
      },
    ],
  },
  {
    image: lext,
    name: "lext",
    secondName: "Markdown парсер",
    description:
      "Опыт написания тестов и публикации на npm\nTS + Jest + React + Rollup",
    urls: [
      {
        github: true,
        url: "https://github.com/lld4n/lext",
        text: "lld4n/lext",
      },
      {
        github: false,
        url: "https://www.npmjs.com/package/@lldan/lext",
        text: "npmjs/@lldan/lext",
      },
    ],
  },
];
