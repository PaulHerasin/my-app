import React, { useEffect } from "react";
import { Link } from "react-scroll";
import { gsap } from "gsap";

import styles from "./MainScreen.module.scss";

import Container from "../UI/Container/Container";
import OverflowWrap from "../Gsap/OverflowWrap/OverflowWrap";
import Clouds from "./Clouds/Clouds";


const MainScreen = () => {
  // const handMove = () => {
  //   let request = null;
  //   let mouse = {
  //     x: 0,
  //     y: 0,
  //   };

  //   let cx = window.innerWidth / 2;
  //   let cy = window.innerHeight / 2;

  //   document.querySelector(`.${styles.MainScreen}`).addEventListener('mousemove', function (event) {
  //     mouse.x = event.pageX;
  //     mouse.y = event.pageY;

  //     cancelAnimationFrame(request);
  //     request = requestAnimationFrame(update);
  //   });

  //   function update() {
  //     let dx = mouse.x - cx;
  //     let dy = mouse.y - cy;

  //     let tiltx = dy / cy / 3;
  //     let tilty = -(dx / cx) / 2;
  //     let radius = Math.sqrt(Math.pow(tiltx, 2) + Math.pow(tilty, 2));
  //     let degree = radius * 40;

  //     gsap.to(`.cloud-1`, 1, {
  //       transform:
  //         'rotate3d(' +
  //         0 +
  //         ', ' +
  //         tilty +
  //         ', 0, ' +
  //         degree +
  //         'deg)',
  //     });
  //   }

  //   window.onresize = () => {
  //     cx = window.innerWidth / 2;
  //     cy = window.innerHeight / 2;
  //   }
  // }

  useEffect(() => {
    if (document.querySelector('body').clientWidth > window.LARGE_TABLET) {
      gsap.fromTo([`.${styles.Text} h1`, `.${styles.Text} h2`], {
        y: "100%",
        duration: 0,
      }, {
        y: "0%",
        stagger: {
          each: 0.5
        },
        duration: 1,
        delay: 4.5
      })

      gsap.fromTo(`.${styles.Background}`, {
        scale: 1.2,
        duration: 0,
      }, {
        scale: 1,
        duration: 4,
        delay: 3.5
      })
    }
  })


  return (
    <section className={styles.MainScreen}>
      <div className={styles.Background}></div>
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
