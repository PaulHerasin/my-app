import React from "react";
import { useSelector } from "react-redux";
import styles from "./Preloader.module.scss";
import Logo from "../../assets/images/logo.svg";

const Preloader = () => {
  const preloading = useSelector((state) => {
    return state.app.preloading;
  });

  let attachedClasses = [styles.preloader];

  if (!preloading) {
    attachedClasses = [styles.preloader, styles.hide];
  }

  const loading = useSelector((state) => {
    return state.app.loading;
  });

  if (loading) {
    attachedClasses = [styles.preloader, styles.showLoader];
  }

  return (
    <div className={attachedClasses.join(" ")}>
      <div className={styles.center}>
        <img src={Logo} alt="Logo"></img>
        <div className={styles.line}>
          <div className={styles.loading}></div>
        </div>
      </div>
    </div>
  );
};

export default Preloader;
