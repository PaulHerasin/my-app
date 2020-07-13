import React from "react";

import styles from "./NavigationItems.module.scss";

import NavigationItem from "./NavigationItem/NavigationItem";

const navigationItems = (props) => (
  <ul className={styles.NavigationItems}>
    <NavigationItem link="/" active>
      Main
    </NavigationItem>
    <NavigationItem link="/">Portfolio</NavigationItem>
    <NavigationItem link="/">About me</NavigationItem>
  </ul>
);

export default navigationItems;
