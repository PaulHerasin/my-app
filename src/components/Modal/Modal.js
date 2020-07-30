import React from "react";

import styles from "./Modal.module.scss";

import ModalCase from "./ModalCase/ModalCase";

import Backdrop from "../UI/Backdrop/Backdrop";

const modal = ({ modal }) => {
  let modalClases = [styles.Modal];

  modal.map((item) => {
    if (item.completed === true) {
      modalClases = [styles.Modal, styles.Opens];
    }
    return modalClases;
  });

  return (
    <div className={modalClases.join(" ")}>
      <div className={styles.Box}>
        {modal.map((item, index) => [
          <ModalCase key={item.id} {...item}></ModalCase>,
          <Backdrop key={index} />,
        ])}
      </div>
    </div>
  );
};

export default modal;
