import React from "react";

import styles from "./NavigationItems.module.scss";

import { Link } from "react-scroll";

const NavigationItems = (props) => {
  return (
    <ul className={styles.NavigationItems}>
      <Link
        className={styles.Link}
        to="aboutMe"
        smooth={true}
        offset={100}
        duration={500}
      >
        Обо мне
      </Link>
      <Link
        className={styles.Link}
        to="portfolio"
        smooth={true}
        offset={150}
        duration={800}
      >
        Мои работы
      </Link>
      <Link
        className={styles.Link}
        to="contact"
        smooth={true}
        offset={0}
        duration={1000}
      >
        Контакты
      </Link>
    </ul>
  );
};

export default NavigationItems;
