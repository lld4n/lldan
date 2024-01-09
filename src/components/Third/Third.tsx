"use client";
import React from "react";
import styles from "./Third.module.scss";
import { projects } from "@/helpers/projects";
import { motion } from "framer-motion";
import Image from "next/image";
import arrow from "../../assets/arrowsvg.svg";
import github from "../../assets/github.svg";
export default function Third() {
  return (
    <div className={styles.wrapper}>
      <div className={styles.section}>
        {projects.map((el) => {
          if (el.subtitle)
            return (
              <motion.div
                key={el.title}
                className={styles.item}
                initial={{ opacity: 0, y: -100 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
              >
                <Image
                  src={el.image}
                  alt={el.title}
                  className={styles.preview}
                />
                <div className={styles.right}>
                  <div className={styles.title}>{el.title}</div>
                  <div className={styles.subtitle}>{el.subtitle}</div>
                  <div className={styles.description}>{el.description}</div>
                  <div className={styles.links}>
                    {el.urls.map((e) => {
                      if (e.github) {
                        return (
                          <a key={e.url} className={styles.link} href={e.url}>
                            <span>{e.text}</span>
                            <Image
                              src={github}
                              alt="github"
                              width={20}
                              height={20}
                            />
                          </a>
                        );
                      } else {
                        return (
                          <a key={e.url} className={styles.link} href={e.url}>
                            <span>{e.text}</span>
                            <Image
                              src={arrow}
                              alt="arrow"
                              width={20}
                              height={20}
                            />
                          </a>
                        );
                      }
                    })}
                  </div>
                  <div className={styles.skills}>
                    {el.skills.map((e, i) => {
                      return (
                        <div
                          key={i}
                          className={styles.skill}
                          style={{
                            backgroundColor: e.background,
                          }}
                        >
                          <Image
                            src={e.image}
                            alt="я устал"
                            className={styles.img}
                          />
                        </div>
                      );
                    })}
                  </div>
                </div>
              </motion.div>
            );
        })}
      </div>
    </div>
  );
}
