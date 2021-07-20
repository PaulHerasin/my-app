import React, { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { useSelector } from "react-redux";
import CaseItem from "./CaseItem/CaseItem";

import styles from "./CaseList.module.scss";

const CaseList = () => {
  const cases = useSelector((state) => {
    return state.works.cases;
  });

  gsap.registerPlugin(ScrollTrigger);
  useEffect(() => {
    if (document.querySelector('body').clientWidth > window.LARGE_TABLET) {
      setTimeout(() => {
        gsap.fromTo(`.${styles.List} > div`, {
          y: 100,
          duration: 0,
          opacity: 0,
        }, {
          y: 0,
          opacity: 1,
          duration: 1,
          delay: 1,
          stagger: 0.5,
          scrollTrigger: {
            trigger: `.${styles.List}`,
            start: 'top bottom',
          },
        })
      }, 1500);
    }
  })

  return (
    <div className={styles.List}>
      {cases.map((item) => (
        <CaseItem key={item.id} {...item} />
      ))}
    </div>
  );
};

export default CaseList;
