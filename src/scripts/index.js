import '@styles/styles.css';
import { gsap } from "gsap-trial";
import { ScrollTrigger } from "gsap-trial/ScrollTrigger.js";
import { ScrollSmoother } from "gsap-trial/ScrollSmoother.js";
gsap.registerPlugin(ScrollTrigger, ScrollSmoother);


if (ScrollTrigger.isTouch !== 1) {
  ScrollSmoother.create({
    wrapper: '.smooth-wrapper',
    content: '.smooth-content',
    smooth: 1.5,
    effects: true,
  });

  gsap.fromTo('.hero-section',
    { opacity: 1, },
    {
      opacity: 0,
      scrollTrigger: {
        trigger: '.hero-section',
        start: 'center',
        end: '+=850',
        scrub: true,
      },
    },
  );

  const itemsLeft = gsap.utils.toArray('.gallery-column--left .gallery__item');
  const itemsRight = gsap.utils.toArray('.gallery-column--right .gallery__item');

  itemsLeft.forEach((item) => {
    gsap.fromTo(item,
      {
        x: -50,
        opacity: 0,
      },
      {
        opacity: 1,
        x: 0,
        scrollTrigger: {
          trigger: item,
          start: '-=800',
          end: '-=100',
          scrub: true,
        },
      },
    );
  });


  itemsRight.forEach((item) => {
    gsap.fromTo(item,
      {
        x: 50,
        opacity: 0,
      },
      {
        opacity: 1,
        x: 0,
        scrollTrigger: {
          trigger: item,
          start: '-=800',
          end: '-=100',
          scrub: true,
        },
      },
    );
  });
};