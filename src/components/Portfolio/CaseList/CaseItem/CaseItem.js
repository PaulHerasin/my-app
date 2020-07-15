import React, { useContext } from "react";

import styles from "./CaseItem.module.scss";

import { Context } from "../../../../context";

const PortfolioItem = ({ title, imgMain, id }) => {
  const { openModal } = useContext(Context);

  return (
    <div className={styles.Item} onClick={() => openModal(id)}>
      <img src={imgMain} alt={"Главная картинка"}></img>
      <div className={styles.Text}>
        <h3>{title}</h3>
      </div>
    </div>
  );
};

export default PortfolioItem;
