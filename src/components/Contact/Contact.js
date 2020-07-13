import React from "react";

import Container from "../UI/Container/Container";

import styles from "./Contact.module.scss";

import telegramImg from "../../assets/images/telegram.svg";
import messageImg from "../../assets/images/message.svg";

const contact = () => (
  <section className={styles.Contact}>
    <Container>
      <h2>Контакты</h2>
      <div className={styles.Row}>
        <div className={styles.Mail}>
          <img src={messageImg} alt="" />
          <p>geraci98.98@gmail.com</p>
        </div>

        <div className={styles.Text}>
          <p>Пишите, буду рад сотрудничать</p>
          <p>"Люблю создавать и видеть результат"</p>
        </div>

        <div className={styles.Telegram}>
          <img src={telegramImg} alt="" />
          <p>@pavel_gerasin</p>
        </div>
      </div>
    </Container>
  </section>
);

export default contact;
