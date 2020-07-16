import React from "react";

import styles from "./Modal.module.scss";

import ModalCase from "./ModalCase/ModalCase";

import Backdrop from "../UI/Backdrop/Backdrop";

const modal = ({ modal }) => {
  let attachedClasses = [styles.Modal];

  let newModal = modal.map((item) => {
    if (item.completed === true) {
      attachedClasses = [styles.Modal, styles.Opens];
    }

    return attachedClasses;
  });

  return (
    <div className={attachedClasses.join(" ")}>
      <div className={styles.Box}>
        {modal
          .filter((item) => item.completed === true)
          .map((item, index) => [
            <ModalCase key={item} {...item}></ModalCase>,
            <Backdrop key={index} {...item} />,
          ])}
      </div>
    </div>
  );
};

export default modal;
