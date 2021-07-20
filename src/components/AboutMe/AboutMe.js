import React, { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger"

import styles from "./AboutMe.module.scss";

import Container from "../UI/Container/Container";
import ListTechnologies from "./ListTechnologies/ListTechnologies";
import ListSkills from "./ListSkills/ListSkills";
import OverflowWrap from "../Gsap/OverflowWrap/OverflowWrap";

const AboutMe = () => {
  gsap.registerPlugin(ScrollTrigger);
  useEffect(() => {

    if (document.querySelector('body').clientWidth > window.LARGE_TABLET) {
      setTimeout(() => {
        gsap.fromTo(`.${styles.AboutMe} h2`, {
          y: "100%",
          duration: 0,
        }, {
          y: "0%",
          duration: 1,
          scrollTrigger: {
            trigger: `.${styles.AboutMe} h2`,
            start: 'top bottom',
          },
        })
        gsap.fromTo(`.${styles.TitleText}`, {
          y: 100,
          opacity: 0,
          duration: 0,
        }, {
          y: 0,
          opacity: 1,
          duration: 1,
          scrollTrigger: {
            trigger: `.${styles.TitleText}`,
            start: 'top bottom',
          },
        })
        gsap.fromTo(`.${styles.ColumnTitle} h4`, {
          y: 100,
          opacity: 0,
          duration: 0,
        }, {
          y: 0,
          opacity: 1,
          duration: 1,
          scrollTrigger: {
            trigger: `.${styles.ColumnTitle} h4`,
            start: 'top bottom',
          },
        })
      }, 1500);
    }
  })

  return (
    <section className={styles.AboutMe} id="aboutMe">
      <Container>
        <OverflowWrap className={styles.Title}><h2>Обо мне</h2></OverflowWrap>
        <h4 className={styles.TitleText}>
          Всем привет. Меня зовут Павел. Я Front-end developer. Я люблю
          создавать и видеть результат, поэтому мне нравится эта профессия.
        </h4>
        <div className={styles.Text}>
          <div className={styles.Column}>
            <OverflowWrap className={styles.ColumnTitle}>
              <h4 >Моими умениями являются:</h4>
            </OverflowWrap>
            <ListSkills />
          </div>
          <div className={styles.Column}>
            <OverflowWrap className={styles.ColumnTitle}>
              <h4>Технологии:</h4>
            </OverflowWrap>
            <ListTechnologies />
          </div>
        </div>
      </Container>
    </section>
  );
};
export default AboutMe;
