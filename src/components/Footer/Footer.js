import React from "react";

import styles from "./Footer.module.scss";

import Container from "../UI/Container/Container";

const footer = () => (
  <footer className={styles.Footer}>
    <Container>
      <p>© 2021 Павел Герасин</p>
    </Container>
  </footer>
);

export default footer;
