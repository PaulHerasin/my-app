import React, { useEffect } from "react";
import OverflowWrap from "../Gsap/OverflowWrap/OverflowWrap";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger"

import CaseList from "./CaseList/CaseList";

import styles from "./Portfolio.module.scss";


const Portfolio = () => {
  gsap.registerPlugin(ScrollTrigger);
  useEffect(() => {
    if (document.querySelector('body').clientWidth > window.LARGE_TABLET) {
      setTimeout(() => {
        gsap.fromTo(`.${styles.Title} h2`, {
          y: "100%",
          duration: 0,
        }, {
          y: "0%",
          duration: 1,
          scrollTrigger: {
            trigger: `.${styles.Title} h2`,
            start: 'top bottom',
          },
        })
      }, 500);
    }
  })

  return (
    <section className={styles.Portfolio} id="portfolio">
      <OverflowWrap className={styles.Title}>
        <h2>Мои работы</h2>
      </OverflowWrap>
      <CaseList />
    </section>
  );
};

export default Portfolio;
