import React, { useState } from "react";

import DrawerToggle from "./DrawerToggle/DrawerToggle";
import Logo from "../../Logo/Logo";
import Container from "../../../components/UI/Container/Container";
import styles from "./Toolbar.module.scss";
import SideDrawer from "../SideDrawer/SideDrawer";

const Toolbar = () => {
  let [show, setShow] = useState(false);

  let handleShow = () => setShow(!show);

  window.addEventListener("scroll", function () {
    if (window.pageYOffset > 400) {
      setShow(false);
    }
  });

  return (
    <header>
      <Container>
        <div className={styles.Toolbar}>
          <Logo />
          <DrawerToggle clicked={handleShow} drawerEffect={show} />
          <SideDrawer show={show}></SideDrawer>
        </div>
      </Container>
    </header>
  );
};
export default Toolbar;
