import React from "react";
import styles from "./Preloader.module.scss";
import Logo from "../../assets/images/logo.svg";

const preloader = () => {
  let preloaderClasses = [styles.Preloader];

  window.onload = function () {
    document.body.classList.add(styles.LoadedHiding);
    window.setTimeout(function () {
      document.body.classList.add(styles.Loaded);
      document.body.classList.remove(styles.LoadedHiding);
    }, 2000);
  };

  return (
    <div className={preloaderClasses.join(" ")}>
      <img src={Logo} alt="Logo"></img>
    </div>
  );
};

export default preloader;
