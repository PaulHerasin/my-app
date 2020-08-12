import React from "react";
import { useSelector } from "react-redux";
import styles from "./Modal.module.scss";

import ModalCase from "./ModalCase/ModalCase";

import Backdrop from "../UI/Backdrop/Backdrop";

const Modal = () => {
  const showModal = useSelector((state) => {
    return state.works.modal;
  });

  let modalClases = [styles.Modal];

  showModal.map((item) => {
    if (item.completed === true) {
      modalClases = [styles.Modal, styles.Opens];
    }
    return modalClases;
  });

  return (
    <div className={modalClases.join(" ")}>
      <div className={styles.Box}>
        {showModal.map((item, index) => [
          <ModalCase key={item.id} {...item}></ModalCase>,
          <Backdrop key={index} />,
        ])}
      </div>
    </div>
  );
};

export default Modal;
