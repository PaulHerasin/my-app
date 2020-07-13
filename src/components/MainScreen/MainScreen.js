import React from "react";

import styles from "./MainScreen.module.scss";
import Container from "../UI/Container/Container";
import ScrollButton from "../UI/Buttons/ScrollButton/ScrollButton";
import Clouds from "./Clouds/Clouds";

const mainScreen = (props) => {
  return (
    <section className={styles.MainScreen}>
      <Clouds></Clouds>
      <Container>
        <div className={styles.MainScreenText}>
          <h1>Павел Герасин</h1>
          <h2>Front-End developer</h2>
          <ScrollButton></ScrollButton>
        </div>
      </Container>
    </section>
  );
};

export default mainScreen;
