import React from "react";

import CaseList from "./CaseList/CaseList";

import styles from "./Portfolio.module.scss";

const portfolio = (props) => {
  return (
    <section className={styles.Portfolio} id="portfolio">
      <h2>Мои работы</h2>
      <CaseList />
    </section>
  );
};

export default portfolio;
