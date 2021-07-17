import React from "react";
import styles from "./OverflowWrap.module.scss";

const overflowWrap = (props) => (
  <div className={[styles.OverflowWrap, props.className].join(" ")}>
    {props.children}
  </div>
);

export default overflowWrap;
