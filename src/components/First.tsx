"use client";

import React from "react";
import "../scss/First.scss";
import Image from "next/image";
import { motion } from "framer-motion";
import me from "../images/me.jpeg";
import github from "../images/github.svg";
import telegram from "../images/telegram.svg";
const list = [
  "Привет 🖐️, попробуй нажать",
  "Еще раз 😬",
  "Класс, еще раз пожалуйста 🤗",
  "Не знаю, зачем я это написал 🫠",
  "Но... 🤔",
  "Мне кажется, это прикольный функционал 👍",
  "... 🫡",
  "Мне кажется, ты не можешь остановиться 🫠",
  "Хватит, пожалуйста 😐",
  "Серьезно 🙃",
  "Лучше посмотри мои пет-проекты 🥹",
];
export default function First() {
  const [selectedIndex, setSelectedIndex] = React.useState(0);
  return (
    <section className="first">
      <h1 className="first__title">
        <motion.span
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          Hi
        </motion.span>
        <br />
        <motion.span
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.8 }}
        >
          I am <span className="first__green">lldan</span>
        </motion.span>
        <br />
        <motion.span
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 1.4 }}
        >
          Frontend developer
        </motion.span>
      </h1>
      <motion.div
        className="first__city"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 2 }}
      >
        Kazan
      </motion.div>
      <div className="first__block">
        <motion.div
          className="first__img"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 2 }}
        >
          <Image
            src={me}
            alt="Ильдан"
            width={120}
            height={120}
            onClick={() => {
              console.log(selectedIndex);
              if (selectedIndex !== list.length - 1) {
                setSelectedIndex(selectedIndex + 1);
              }
            }}
          />
          <div className="first__popup">{list[selectedIndex]}</div>
        </motion.div>
        <motion.a
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 2 }}
          href="https://github.com/lld4n"
          className="first__link github"
        >
          <Image src={github} alt="Github" width={60} height={60} />
        </motion.a>
        <motion.a
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 2 }}
          href="https://t.me/lld4n"
          className="first__link telegram"
        >
          <Image src={telegram} alt="Telegram" width={60} height={60} />
        </motion.a>
      </div>
    </section>
  );
}
