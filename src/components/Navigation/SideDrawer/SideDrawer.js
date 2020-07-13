import React from "react";

import styles from "./SideDrawer.module.scss";

import Container from "../../UI/Container/Container";

import NavigationItems from "../NavigationItems/NavigationItems";

const sideDrawer = (props) => {
  let attachedClasses = [styles.SideDrawer];

  if (props.show) {
    attachedClasses = [styles.SideDrawer, styles.Opens];
  }

  return (
    <div className={attachedClasses.join(" ")}>
      <Container>
        <div className={styles.NavContainer}>
          <h2>Menu</h2>
          <NavigationItems></NavigationItems>
        </div>
      </Container>
    </div>
  );
};

export default sideDrawer;
