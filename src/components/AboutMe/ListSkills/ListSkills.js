import React, { useEffect } from "react";
import styles from "./ListSkills.module.scss";
import OverflowWrap from "../../Gsap/OverflowWrap/OverflowWrap";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger"

const ListSkills = () => {
  const SKILLS = [
    "Верстка новых страниц из макетов (XD,Sketch,PSD,Figma)",
    "Адаптация страниц",
    "Кроссбраузерность",
    "Реализация JS логики (попапы, слайдеры, анимации...)",
  ];

  gsap.registerPlugin(ScrollTrigger);
  useEffect(() => {
    if (document.querySelector('body').clientWidth > window.LARGE_TABLET) {
      setTimeout(() => {
        gsap.fromTo(`.${styles.Skills} li`, {
          y: "100%",
          duration: 0,
          opacity: 0,
        }, {
          y: "0%",
          opacity: 1,
          duration: 1,
          delay: 1,
          stagger: {
            amount: 2
          },
          scrollTrigger: {
            trigger: `.${styles.Skills} li`,
            start: 'top bottom',
          },
        })
      });
    }
  })

  return (
    <ul className={styles.Skills}>
      {SKILLS.map((item, index) => (
        <li key={index} >
          <OverflowWrap>
            <div className={styles.Item}>{item}</div>
          </OverflowWrap>
        </li>
      ))}
    </ul>
  );
};

export default ListSkills;
