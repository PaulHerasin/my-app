import React, { useState } from "react";

import Toolbar from "../../components/Navigation/Toolbar/Toolbar";
import SideDrawer from "../../components/Navigation/SideDrawer/SideDrawer";

import Aux from "../Aux/Aux";

const Layout = (props) => {
  let [show, setShow] = useState(false);

  let handleShow = () => setShow(!show);

  return (
    <Aux>
      <Toolbar drawerToggleClicked={handleShow} drawerToggleClasses={show}>
        Launch demo modal
      </Toolbar>
      <SideDrawer show={show}></SideDrawer>
      {props.children}
    </Aux>
  );
};

export default Layout;
