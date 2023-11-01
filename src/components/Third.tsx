"use client";
import React from "react";
import { projects } from "@/helpers/projects";
import Image from "next/image";
import Url from "@/components/Url";
import "../scss/Third.scss";
import { motion } from "framer-motion";
import { skills } from "@/helpers/skills";

export default function Third() {
  return (
    <section className="third">
      <div className="third__wrapper">
        <div className="third__title">Мои проекты</div>
        <div className="third__list">
          {projects.map((el, i) => {
            return (
              <motion.div
                key={i}
                className={
                  i % 2 === 0 ? "third__element right" : "third__element"
                }
                initial={
                  i % 2 === 0 ? { opacity: 0, x: -100 } : { opacity: 0, x: 100 }
                }
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
              >
                <Image src={el.image} alt="image" />
                <div className="third__block">
                  <div className="third__name">{el.name}</div>
                  <div className="third__second">{el.secondName}</div>
                  <div className="third__description">
                    {el.description.split("\n").map((e) => {
                      return <span key={e}>{e}</span>;
                    })}
                  </div>
                  {el.urls.map((elem) => {
                    return (
                      <Url
                        key={elem.text}
                        github={elem.github}
                        url={elem.url}
                        text={elem.text}
                      />
                    );
                  })}
                </div>
              </motion.div>
            );
          })}
          <motion.div
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="third__repo"
          >
            <Url
              github={true}
              url={"https://github.com/lld4n/leetcode"}
              text={"lld4n/leetcode"}
            />
            <div>Мое решение задач с LeetСode и Coderun</div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="third__repo"
          >
            <Url
              github={true}
              url={"https://github.com/lld4n/rl52"}
              text={"lld4n/rl52"}
            />
            <Url
              github={false}
              url={"https://rl52.lldan.ru/"}
              text={"rl52.lldan.ru"}
            />
            <div>Хранилище знаний про Frontend</div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
