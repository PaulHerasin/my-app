import React from "react";
import styles from "./Preloader.module.scss";
import Logo from "../../assets/images/logo.svg";

const preloader = () => {
  return (
    <div className={styles.Preloader}>
      <img src={Logo} alt="Logo"></img>
    </div>
  );
};

export default preloader;
