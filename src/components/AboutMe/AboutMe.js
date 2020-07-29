import React from "react";

import styles from "./AboutMe.module.scss";

import Container from "../UI/Container/Container";

const AboutMe = (props) => {
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
            <ul className={styles.Ul}>
              <li>HTML5</li>
              <li>CSS3</li>
              <li>JS</li>
              <li>GIT</li>
              <li>React</li>
              <li>SASS</li>
              <li>ВЕМ</li>
              <li>JSX</li>
              <li>Pixel Perfect</li>
              <li>CSS Modules</li>
              <li>Emmet</li>
              <li>Адаптация</li>
              <li>Кроссбраузерность</li>
              <li>Семантическая верстка</li>
            </ul>
          </div>
        </div>
      </Container>
    </section>
  );
};
export default AboutMe;
