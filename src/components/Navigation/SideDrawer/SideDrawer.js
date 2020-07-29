import React from "react";

import styles from "./SideDrawer.module.scss";

import NavigationItems from "../NavigationItems/NavigationItems";

const sideDrawer = (props) => {
  let attachedClasses = [styles.SideDrawer];

  if (props.show) {
    attachedClasses = [styles.SideDrawer, styles.Opens];
  }

  return (
    <div className={attachedClasses.join(" ")}>
      <NavigationItems></NavigationItems>
    </div>
  );
};

export default sideDrawer;
