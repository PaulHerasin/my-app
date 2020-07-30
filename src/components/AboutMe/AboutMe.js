import React from "react";

import styles from "./AboutMe.module.scss";

import Container from "../UI/Container/Container";

import ListTechnologies from "./ListTechnologies/ListTechnologies";

const AboutMe = () => {
  return (
    <section className={styles.AboutMe} id="aboutMe">
      <Container>
        <h2>Обо мне</h2>
        <h4>
          Всем привет. Меня зовут Павел. Я Front-end developer. Я люблю
          создавать и видеть результат, поэтому мне нравится эта профессия.
        </h4>
        <div className={styles.Text}>
          <div className={styles.Column}>
            <h4>Моими умениями являются:</h4>
            <ul className={styles.Skills}>
              <li>
                Верстка новых страниц из макетов <br></br> (XD,Sketch,PSD,Figma)
              </li>
              <li>Адаптация страниц</li>
              <li>Кроссбраузерность</li>
              <li>
                Реализация JS логики <br></br> (попапы, слайдеры, анимации...)
              </li>
            </ul>
          </div>
          <div className={styles.Column}>
            <h4>Технологии:</h4>
            <ListTechnologies />
          </div>
        </div>
      </Container>
    </section>
  );
};
export default AboutMe;
