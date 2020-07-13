import React from "react";

import CaseList from "./CaseList/CaseList";

import styles from "./Portfolio.module.scss";

const Portfolio = (props) => {
  return (
    <section className={styles.Portfolio}>
      <h2>Мои работы</h2>
      <CaseList caseItem={props.caseItem} />
    </section>
  );
};

export default Portfolio;
