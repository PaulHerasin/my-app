import React from "react";

import styles from "./Clouds.module.scss";

const clouds = () => {
  let w = window.screen.availWidth;

  if (w > 900) {
    return (
      <div className={styles.Clouds}>
        <div className={styles.Relative}>
          <div></div>
          <div></div>
          <div></div>
        </div>
      </div>
    );
  } else {
    return null;
  }
};

export default clouds;
