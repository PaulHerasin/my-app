import React from "react";
import styles from "./LogoAnimation.module.scss";

import A from "./images/A.svg";
import P from "./images/P.svg";
import SH from "./images/SH.svg";

const logoAnimation = (props) => (
  <div className={styles.LogoAnimation}>
    <div className={styles.Relative}>
      <img src={P}></img>
      <img src={A}></img>
      <img src={SH}></img>
      <img src={A}></img>
    </div>
  </div>
);

export default logoAnimation;
