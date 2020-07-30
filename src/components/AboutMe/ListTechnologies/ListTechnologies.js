import React from "react";
import styles from "./ListTechnologies.module.scss";

const listTechnologies = () => {
  const TECHNOLOGIES = [
    "HTML5",
    "CSS3",
    "JS",
    "GIT",
    "React",
    "SASS",
    "ВЕМ",
    "JSX",
    "Pixel Perfect",
    "CSS Modules",
    "Emmet",
    "Адаптация",
    "Кроссбраузерность",
    "Семантическая верстка",
  ];

  return (
    <ul className={styles.Ul}>
      {TECHNOLOGIES.map((item, index) => (
        <li key={index}>{item}</li>
      ))}
    </ul>
  );
};

export default listTechnologies;
