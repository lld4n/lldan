import React from "react";
import styles from "./Projects.module.scss";
import mono from "../../assets/badges/mono.svg";
import musiclyrics from "../../assets/badges/musiclyrics.svg";
import nba from "../../assets/badges/nba.svg";
import latch from "../../assets/badges/latch.svg";
import leetcode from "../../assets/badges/leetcode.svg";
import sneakers from "../../assets/badges/sneakers.svg";
import Image from "next/image";
import {
  ASANA,
  AXIOS,
  CHEERIO,
  CLERK,
  CONVEX,
  EXPRESSJS,
  GULP,
  HTML,
  JAVASCRIPT,
  KY,
  LUCIDE,
  NETLIFY,
  NEXTJS,
  REACT,
  REDUX,
  SCSS,
  TYPESCRIPT,
  VERCEL,
  VITE,
} from "@/components/Skill/Skill";
export default function Projects() {
  return (
    <div className={styles.wrapper}>
      <div className={styles.item}>
        <Image src={mono} alt="mono" />
        <h2 className={styles.title}>mono</h2>
        <h3 className={styles.subtitle}>Онлайн монополия</h3>
        <div className={styles.desc}>
          Опыт работы в команде по методологии Agile
        </div>
        <div className={styles.tech}>
          <NEXTJS />
          <CONVEX />
          <ASANA />
          <CLERK />
          <LUCIDE />
          <SCSS />
          <TYPESCRIPT />
          <VERCEL />
        </div>
        <div className={styles.block}>
          <a className={styles.link} href="https://github.com/lld4n/mono">
            GitHub
          </a>
          <a className={styles.link} href="https://mono.lldan.ru">
            mono.lldan.ru
          </a>
        </div>
      </div>
      <div className={styles.item}>
        <Image src={musiclyrics} alt="musiclyrics" />
        <h2 className={styles.title}>musiclyrics</h2>
        <h3 className={styles.subtitle}>Поиск текста песни</h3>
        <div className={styles.desc}>
          Мой первый проект на чистом JavaScript
        </div>
        <div className={styles.tech}>
          <JAVASCRIPT />
          <SCSS />
          <HTML />
          <VITE />
          <GULP />
          <VERCEL />
        </div>
        <div className={styles.block}>
          <a
            className={styles.link}
            href="https://github.com/lld4n/musiclyrics"
          >
            GitHub
          </a>
          <a className={styles.link} href="https://musiclyrics.lldan.ru">
            musiclyrics.lldan.ru
          </a>
        </div>
      </div>
      <div className={styles.item}>
        <Image src={sneakers} alt="sneakers" />
        <h2 className={styles.title}>sneakers</h2>
        <h3 className={styles.subtitle}>Мини-магазин кроссовок</h3>
        <div className={styles.desc}>Мой первый проект на React</div>
        <div className={styles.tech}>
          <REACT />
          <TYPESCRIPT />
          <REDUX />
          <AXIOS />
          <SCSS />
          <VERCEL />
        </div>
        <div className={styles.block}>
          <a className={styles.link} href="https://github.com/lld4n/sneakers">
            GitHub
          </a>
          <a className={styles.link} href="https://sneakers.lldan.ru">
            sneakers.lldan.ru
          </a>
        </div>
      </div>
      <div className={styles.item}>
        <Image src={nba} alt="nba" />
        <h2 className={styles.title}>nba scrapper</h2>
        <h3 className={styles.subtitle}>
          REST API, который возвращает баскетбольную информацию
        </h3>
        <div className={styles.desc}>Попробовал написать свое API</div>
        <div className={styles.tech}>
          <EXPRESSJS />
          <CHEERIO />
          <AXIOS />
          <NETLIFY />
          <TYPESCRIPT />
        </div>
        <div className={styles.block}>
          <a
            className={styles.link}
            href="https://github.com/lld4n/nba_scrapper"
          >
            GitHub
          </a>
          <a
            className={styles.link}
            href="https://nbascrapper.lldan.ru/api/other/actualseason"
          >
            nbascrapper.lldan.ru
          </a>
        </div>
      </div>
      <div className={styles.item}>
        <Image src={latch} alt="latch" />
        <h2 className={styles.title}>latch</h2>
        <h3 className={styles.subtitle}>Оценка фильмов/сериалов</h3>
        <div className={styles.desc}>
          Простой проект, основанный на API Кинопоиска
        </div>
        <div className={styles.tech}>
          <NEXTJS />
          <CONVEX />
          <KY />
          <LUCIDE />
          <TYPESCRIPT />
          <SCSS />
          <VERCEL />
        </div>
        <div className={styles.block}>
          <a className={styles.link} href="https://github.com/lld4n/latch">
            GitHub
          </a>
          <a className={styles.link} href="https://latch.lldan.ru">
            latch.lldan.ru
          </a>
        </div>
      </div>
      <div className={styles.item}>
        <Image src={leetcode} alt="leetcode" />
        <h2 className={styles.title}>leetcode</h2>
        <h3 className={styles.subtitle}>Решение задач</h3>
        <div className={styles.desc}>
          Хочу узнать, насколько это вообще полезно
        </div>
        <div className={styles.tech}>
          <TYPESCRIPT />
          <JAVASCRIPT />
        </div>
        <div className={styles.block}>
          <a className={styles.link} href="https://github.com/lld4n/leetcode">
            GitHub
          </a>
        </div>
      </div>
    </div>
  );
}
