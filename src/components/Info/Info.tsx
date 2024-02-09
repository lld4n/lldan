import React from "react";
import styles from "./Info.module.scss";
import Image from "next/image";
import lldan from "../../assets/lldan.jpeg";
export default function Info() {
  return (
    <div className={styles.wrapper}>
      <Image
        className={styles.img}
        src={lldan}
        alt="lldan"
        width={200}
        height={200}
        priority
      />
      <h1 className={styles.name}>lldan</h1>
      <div className={styles.block}>
        <a className={styles.link} href="https://github.com/lld4n">
          GitHub
        </a>
        <a className={styles.link} href="https://t.me/lld4n">
          Telegram
        </a>
      </div>
      <div className={styles.desc}>frontend developer from Kazan</div>
    </div>
  );
}
