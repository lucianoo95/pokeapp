import anime from "animejs/lib/anime.es.js";

const mainPhotoAnimation = () => {
  return anime({
    targets: ".anime-card",
    translateY: [3, -2, 3],
    translateX: [5, -5],
    scale: [1.003, 0.998],
    rotateY: [-7, 5],
    rotateZ: -0.5,
    skewX: 0.2,
    skewY: 0.2,
    duration: 1200,
    direction: "alternate",
    loop: true,
    easing: "easeInOutSine",
  });
};
const mainPhotoShadowAnimation = () => {
  return anime({
    targets: ".anime-shadow",
    translateX: [5, -3],
    rotateX: [85, 85.8],
    duration: 1200,
    direction: "alternate",
    loop: true,
    easing: "easeInOutSine",
  });
};
export { mainPhotoAnimation, mainPhotoShadowAnimation };
