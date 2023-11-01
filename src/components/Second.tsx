"use client";
import React from "react";
import { skills } from "@/helpers/skills";
import Image from "next/image";
import "../scss/Second.scss";
import { motion } from "framer-motion";

export default function Second() {
  const [like, setLike] = React.useState(false);
  return (
    <section className="second">
      <div className="second__wrapper">
        <nav className="second__nav">
          <button
            className={like ? "second__btn" : "second__btn active"}
            onClick={() => setLike(false)}
          >
            Мои скиллы
          </button>
          <button
            className={like ? "second__btn active" : "second__btn"}
            onClick={() => setLike(true)}
          >
            Мой любимый стек 🚀
          </button>
        </nav>
        <div className="second__list">
          {skills.map((el, i) => {
            return (
              <motion.div
                key={i}
                className="second__element"
                initial={{ opacity: 0, y: -50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: (i / skills.length) * 2 }}
                viewport={{ once: true }}
              >
                <Image
                  src={el.image}
                  alt="image"
                  className={
                    like
                      ? el.liked
                        ? "second__img"
                        : "second__img disabled"
                      : "second__img"
                  }
                />
                <div className="second__popup">
                  <span className="second__popup-title">{el.title}</span>
                  <span className="second__popup-description">
                    {el.description}
                  </span>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
