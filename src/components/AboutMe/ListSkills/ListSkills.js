import React from "react";
import styles from "./ListSkills.module.scss";

const listSkills = () => {
  const SKILLS = [
    "Верстка новых страниц из макетов (XD,Sketch,PSD,Figma)",
    "Адаптация страниц",
    "Кроссбраузерность",
    "Реализация JS логики (попапы, слайдеры, анимации...)",
  ];

  return (
    <ul className={styles.Skills}>
      {SKILLS.map((item, index) => (
        <li key={index}>{item}</li>
      ))}
    </ul>
  );
};

export default listSkills;
