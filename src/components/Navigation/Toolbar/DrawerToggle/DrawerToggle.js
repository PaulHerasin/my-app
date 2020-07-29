import React from "react";

import styles from "./DrawerToggle.module.scss";

const drawerToggle = (props) => {
  let attachedClasses = [styles.DrawerToggle];

  if (props.drawerEffect) {
    attachedClasses = [styles.DrawerToggle, styles.Close];
  }

  return (
    <div onClick={props.clicked} className={attachedClasses.join(" ")}>
      <div></div>
      <div></div>
      <div></div>
    </div>
  );
};

export default drawerToggle;
