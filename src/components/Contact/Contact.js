import React, { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger"

import OverflowWrap from "../Gsap/OverflowWrap/OverflowWrap";
import Container from "../UI/Container/Container";

import styles from "./Contact.module.scss";

import telegramImg from "../../assets/images/telegram.svg";
import messageImg from "../../assets/images/message.svg";


const Contact = () => {
  gsap.registerPlugin(ScrollTrigger);
  useEffect(() => {

    if (document.querySelector('body').clientWidth > window.LARGE_TABLET) {
      gsap.fromTo(`.${styles.title} h2`, {
        y: "100%",
        duration: 0,
      }, {
        y: "0%",
        duration: 1,
        scrollTrigger: {
          trigger: `.${styles.title} h2`,
          start: 'top 75%',
        },
      })
      gsap.fromTo(`.${styles.text}`, {
        y: 100,
        opacity: 0,
        duration: 0,
      }, {
        y: 0,
        opacity: 1,
        duration: 1.5,
        scrollTrigger: {
          trigger: `.${styles.text}`,
          start: 'top 75%',
        },
      })
      gsap.fromTo([`.${styles.mail}`, `.${styles.telegram}`], {
        y: 50,
        opacity: 0,
        duration: 0,
      }, {
        y: 0,
        opacity: 1,
        duration: 1,
        scrollTrigger: {
          trigger: `.${styles.text}`,
          start: 'top 75%',
        },
      })
    }
  })

  return (
    <section className={styles.contact} id="contact">
      <Container>
        <OverflowWrap className={styles.title}><h2>Контакты</h2></OverflowWrap>
        <div className={styles.row}>
          <div className={styles.mail}>
            <a
              className={styles.MailLink}
              href="mailto:geraci98.98@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={messageImg} alt="mail" />
              <p>geraci98.98@gmail.com</p>
            </a>
          </div>

          <div className={styles.text}>
            <p>Пишите, буду рад сотрудничать</p>
            <p>"Люблю создавать и видеть результат"</p>
          </div>

          <div className={styles.telegram}>
            <a
              className={styles.telegramLink}
              href="https://t.me/pavel_gerasin"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={telegramImg} alt="telegram" />
              <p>@pavel_gerasin</p>
            </a>
          </div>
        </div>
      </Container>
    </section>
  );
}

export default Contact;
