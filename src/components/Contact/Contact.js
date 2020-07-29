import React from "react";

import Container from "../UI/Container/Container";

import styles from "./Contact.module.scss";

import telegramImg from "../../assets/images/telegram.svg";
import messageImg from "../../assets/images/message.svg";

const contact = () => (
  <section className={styles.Contact} id="contact">
    <Container>
      <h2>Контакты</h2>
      <div className={styles.Row}>
        <div className={styles.Mail}>
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

        <div className={styles.Text}>
          <p>Пишите, буду рад сотрудничать</p>
          <p>"Люблю создавать и видеть результат"</p>
        </div>

        <div className={styles.Telegram}>
          <a
            className={styles.TelegramLink}
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

export default contact;
