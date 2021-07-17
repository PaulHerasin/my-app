import React, { useEffect } from "react";
import { gsap } from "gsap";
import Scrollbar from 'smooth-scrollbar';
import { ScrollTrigger } from "gsap/ScrollTrigger"

const GsapScrollbar = (props) => {
  // useEffect(() => {
  //   gsap.registerPlugin(ScrollTrigger);

  //   let scrollbar = Scrollbar.init(document.querySelector('#scrollbar'), {
  //     delegateTo: document.querySelector('body'),
  //     damping: 0.05
  //   });

  //   ScrollTrigger.scrollerProxy('#scrollbar', {
  //     scrollTop(value) {
  //       if (arguments.length) {
  //         scrollbar.scrollTop = value;
  //       }
  //       return scrollbar.scrollTop;
  //     },
  //   });

  //   scrollbar.addListener(ScrollTrigger.update);

  //   ScrollTrigger.defaults({
  //     scroller: document.querySelector('#scrollbar'),
  //   })
  // })

  return (
    <div id="scrollbar">
      {props.children}
    </div>
  )
}

export default GsapScrollbar;
