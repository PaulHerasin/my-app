import React, { useContext } from "react";

import styles from "./Backdrop.module.scss";

import { Context } from "../../../context";

const Backdrop = () => {
  const { removeCases } = useContext(Context);

  const bodyLol = () => {
    document.body.style.overflowY = "scroll";
  };

  return (
    <div
      className={styles.Backdrop}
      onClick={() => [removeCases(), bodyLol()]}
    ></div>
  );
};

export default Backdrop;
