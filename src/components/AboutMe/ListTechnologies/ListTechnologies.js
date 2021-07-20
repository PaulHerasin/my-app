import React, { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger"
import styles from "./ListTechnologies.module.scss";

const ListTechnologies = () => {
  const TECHNOLOGIES = [
    "HTML5",
    "CSS3",
    "JS",
    "GSAP",
    "React",
    "GIT",
    "CSS Modules",
    "SASS",
    "Webpack",
    "Pixel Perfect",
  ];

  gsap.registerPlugin(ScrollTrigger);
  useEffect(() => {
    if (document.querySelector('body').clientWidth > window.LARGE_TABLET) {
      setTimeout(() => {
        gsap.fromTo(`.${styles.List} li`, {
          y: 20,
          duration: 0,
          opacity: 0,
        }, {
          y: 0,
          opacity: 1,
          duration: 1,
          delay: 1,
          stagger: {
            amount: 2
          },
          scrollTrigger: {
            trigger: `.${styles.List}`,
            start: 'top bottom',
          },
        })
      }, 1500);
    }
  })

  return (
    <ul className={styles.List}>
      {TECHNOLOGIES.map((item, index) => (
        <li key={index}>
          {item}
        </li>
      ))}
    </ul>
  );
};

export default ListTechnologies;
