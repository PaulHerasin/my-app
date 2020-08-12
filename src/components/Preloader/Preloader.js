import React from "react";
import { useSelector } from "react-redux";
import styles from "./Preloader.module.scss";
import Logo from "../../assets/images/logo.svg";

const Preloader = () => {
  const loading = useSelector((state) => {
    return state.app.loading;
  });

  let attachedClasses = [styles.Preloader];

  if (loading) {
    attachedClasses = [styles.Preloader, styles.Opens];
  }

  return (
    <div className={attachedClasses.join(" ")}>
      <img src={Logo} alt="Logo"></img>
    </div>
  );
};

export default Preloader;
