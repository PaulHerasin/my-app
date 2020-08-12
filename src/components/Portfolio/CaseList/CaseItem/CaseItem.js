import React from "react";

import { useDispatch } from "react-redux";

import { showModal } from "../../../../redux/actions";

import styles from "./CaseItem.module.scss";

const CaseItem = ({ title, imgMain, id }) => {
  const dispatch = useDispatch();

  return (
    <div className={styles.Item} onClick={() => dispatch(showModal(id))}>
      <img src={imgMain} alt={"Главная картинка"}></img>
      <div className={styles.Text}>
        <h3>{title}</h3>
      </div>
    </div>
  );
};

export default CaseItem;
