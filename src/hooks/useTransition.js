import { useSpring } from "@react-spring/web";
import { useInView } from "react-intersection-observer";

const useFadeInEffect = () => {
  const [fadeInRef, fadeInInView] = useInView({
    triggerOnce: false,
    threshold: 0.1, // Fade in sooner when 80% of the element is visible
  });

  const [fadeOutRef, fadeOutInView] = useInView({
    triggerOnce: false,
    threshold: 0.5, // Trigger fade out later when 50% of the element is visible
  });

  const fadeInSpring = useSpring({
    transform: fadeInInView ? "translateY(0) scale(1) rotate(0deg)" : "translateY(50px) scale(0.9) rotate(-1deg)",
    opacity: fadeInInView ? 1 : 0,
    config: { tension: 300, friction: 25, duration: 500 }, // Fade in duration halved
  });

  const fadeOutSpring = useSpring({
    opacity: fadeOutInView ? 1 : 0,
    config: { tension: 300, friction: 25, duration: 250 }, // Fade out faster duration halved
  });

  return { ref: (node) => { fadeInRef(node); fadeOutRef(node); }, springs: { ...fadeInSpring, ...fadeOutSpring } };
};

// Slide in from left effect
const useSlideInFromLeftEffect = () => {
  const [ref, inView] = useInView({
    triggerOnce: false,
    threshold: 0.1, // Fade in sooner when 80% of the element is visible
  });

  const springs = useSpring({
    transform: inView ? "translateX(0)" : "translateX(-50px)",
    opacity: inView ? 1 : 0,
    config: { tension: 300, friction: 25, duration: 500 }, // Duration halved
    delay: inView ? 0 : 150, // Delay halved
  });

  return { ref, springs };
};

// Slide in from right effect
const useSlideInFromRightEffect = () => {
  const [ref, inView] = useInView({
    triggerOnce: false,
    threshold: 0.1, // Fade in sooner when 80% of the element is visible
  });

  const springs = useSpring({
    transform: inView ? "translateX(0)" : "translateX(50px)",
    opacity: inView ? 1 : 0,
    config: { tension: 300, friction: 25, duration: 500 }, // Duration halved
    delay: inView ? 0 : 150, // Delay halved
  });

  return { ref, springs };
};

// Zoom in effect
const useZoomInEffect = () => {
  const [ref, inView] = useInView({
    triggerOnce: false,
    threshold: 0.1, // Fade in sooner when 80% of the element is visible
  });

  const springs = useSpring({
    transform: inView ? "scale(1)" : "scale(0.8)",
    opacity: inView ? 1 : 0,
    config: { tension: 300, friction: 25, duration: 500 }, // Duration halved
    delay: inView ? 0 : 150, // Delay halved
  });

  return { ref, springs };
};

// Rotate in effect
const useRotateInEffect = () => {
  const [ref, inView] = useInView({
    triggerOnce: false,
    threshold: 0.1, // Fade in sooner when 80% of the element is visible
  });

  const springs = useSpring({
    transform: inView ? "rotate(0deg)" : "rotate(-45deg)",
    opacity: inView ? 1 : 0,
    config: { tension: 300, friction: 25, duration: 500 }, // Duration halved
    delay: inView ? 0 : 150, // Delay halved
  });

  return { ref, springs };
};

export {
  useFadeInEffect,
  useSlideInFromLeftEffect,
  useSlideInFromRightEffect,
  useZoomInEffect,
  useRotateInEffect,
};
