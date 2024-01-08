"use client";
import React from "react";
import styles from "./First.module.scss";
import { motion } from "framer-motion";
import github from "../../assets/github.svg";
import telegram from "../../assets/telegram.svg";
import me from "../../assets/me.jpeg";
import Image from "next/image";
export default function First() {
  return (
    <div className={styles.wrapper}>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.5 }}
      >
        <Image
          src={me}
          alt="lldan"
          width={100}
          height={100}
          className={styles.avatar}
        />
      </motion.div>
      <motion.h1
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className={styles.title}
      >
        lldan
      </motion.h1>
      <div className={styles.block}>
        <motion.a
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          href="https://github.com/lld4n"
        >
          <Image src={github} alt="github" width={30} height={30} />
        </motion.a>
        <motion.a
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          href="https://t.me/lld4n"
        >
          <Image src={telegram} alt="telegram" width={30} height={30} />
        </motion.a>
      </div>
      <motion.div
        className={styles.bottom}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.5 }}
      >
        Frontend developer • Kazan
      </motion.div>
    </div>
  );
}
