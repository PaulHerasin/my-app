import React, { useContext } from "react";

import styles from "./Backdrop.module.scss";

import { Context } from "../../../context";

const Backdrop = () => {
  const { removeCases } = useContext(Context);

  return <div className={styles.Backdrop} onClick={() => removeCases()}></div>;
};

export default Backdrop;
