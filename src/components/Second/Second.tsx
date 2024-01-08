"use client";
import React from "react";
import styles from "./Second.module.scss";
import { skills } from "@/helpers/skills";
import Image from "next/image";
import { motion } from "framer-motion";

export default function Second() {
  return (
    <div className={styles.wrapper}>
      <div className={styles.section}>
        {skills.map((el, i) => {
          return (
            <motion.div
              key={el.title}
              className={styles.item}
              style={{
                backgroundColor: el.background,
                color: el.color,
              }}
              initial={{ opacity: 0, y: -100 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <Image src={el.image} alt={el.title} className={styles.image} />
              <div className={styles.title}>{el.title}</div>
              <div className={styles.emoji}>{el.emoji}</div>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}
