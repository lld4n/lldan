import lext from "@/assets/projects/lext.png";
import monopoly from "@/assets/projects/monopoly.png";
import musiclyrics from "@/assets/projects/musiclyrics.png";
import nbascrapper from "@/assets/projects/nbascrapper.png";
import sneakers from "@/assets/projects/sneakers.png";
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
    name: "mono",
    secondName: "Онлайн монополия",
    description: "Проект активно пишется. Работа в команде",
    urls: [
      {
        github: true,
        url: "https://github.com/lld4n/mono",
        text: "lld4n/mono",
      },
      {
        github: false,
        url: "https://mono.lldan.ru",
        text: "mono.lldan.ru",
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
