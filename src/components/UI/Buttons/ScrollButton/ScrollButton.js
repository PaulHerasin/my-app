import React, { useContext } from "react";
import { Context } from "../../../../context";

import styles from "./ScrollButton.module.scss";

const ScrollButton = (props) => {
  const { scrollButton } = useContext(Context);
  return (
    <div className={styles.ScrollButton} onClick={() => scrollButton()}></div>
  );
};

export default ScrollButton;
