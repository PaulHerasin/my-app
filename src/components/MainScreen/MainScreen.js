import React, { useEffect } from "react";
import { Link } from "react-scroll";
import { gsap } from "gsap";

import styles from "./MainScreen.module.scss";

import Container from "../UI/Container/Container";
import OverflowWrap from "../Gsap/OverflowWrap/OverflowWrap";
import Clouds from "./Clouds/Clouds";


const MainScreen = () => {

  useEffect(() => {
    gsap.fromTo([`.${styles.Text} h1`, `.${styles.Text} h2`], {
      y: "100%",
      duration: 0,
    }, {
      y: "0%",
      stagger: {
        each: 0.5
      },
      duration: 1,
      delay: 2.5
    })
  })

  return (
    <section className={styles.MainScreen}>
      <Clouds></Clouds>
      <Container>
        <div className={styles.Text}>
          <OverflowWrap className={styles.Title}><h1>Павел Герасин</h1></OverflowWrap>
          <OverflowWrap ><h2>Front-End developer</h2></OverflowWrap>
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

export default MainScreen;
