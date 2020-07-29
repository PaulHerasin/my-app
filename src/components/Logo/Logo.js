import React from "react";

import Logo from "../../assets/images/logo.svg";
import { Link } from "react-scroll";

import styles from "./Logo.module.scss";

const logo = () => (
  <Link to="contact" smooth={true} offset={0} duration={1000}>
    <img className={styles.Logo} alt={"Лого Павел"} src={Logo}></img>
  </Link>
);

export default logo;
