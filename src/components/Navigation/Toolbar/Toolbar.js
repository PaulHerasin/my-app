import React from "react";

import DrawerToggle from "../SideDrawer/DrawerToggle/DrawerToggle";
import Logo from "../../Logo/Logo";
import Container from "../../../components/UI/Container/Container";
import styles from "./Toolbar.module.scss";

const toolbar = (props) => (
  <header>
    <Container>
      <div className={styles.Toolbar}>
        <Logo />
        <DrawerToggle
          clicked={props.drawerToggleClicked}
          drawerEffect={props.drawerToggleClasses}
        />
      </div>
    </Container>
  </header>
);

export default toolbar;
