import React from "react";
import styles from "./ModalBackground.module.scss";
import Logo from "../../../assets/images/logo.svg";

const modalBackground = (props) => {
  if (props.modalBackground) {
    return (
      <div className={styles.ModalBackground}>
        <img src={Logo} alt="logo"></img>
      </div>
    );
  } else {
    return null;
  }
};

export default modalBackground;
