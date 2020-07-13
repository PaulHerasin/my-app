import React from "react";

import Logo from "../../assets/images/logo.svg";

import styles from "./Logo.module.scss";

const logo = (props) => (
  <img className={styles.Logo} alt={"Лого Павел"} src={Logo}></img>
);

export default logo;
