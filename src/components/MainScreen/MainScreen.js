import React from "react";

import styles from "./MainScreen.module.scss";
import Container from "../UI/Container/Container";
import { Link } from "react-scroll";
import Clouds from "./Clouds/Clouds";

const mainScreen = () => {
  return (
    <section className={styles.MainScreen}>
      <Clouds></Clouds>
      <Container>
        <div className={styles.MainScreenText}>
          <h1>Павел Герасин</h1>
          <h2>Front-End developer</h2>
          <Link
            className={styles.Link}
            to="aboutMe"
            smooth={true}
            offset={100}
            duration={500}
          ></Link>
        </div>
      </Container>
    </section>
  );
};

export default mainScreen;
