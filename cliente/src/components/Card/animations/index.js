import anime from "animejs/lib/anime.es.js";

const mainPhotoAnimation = () => {
  return anime({
    targets: ".anime-card",
    translateY: 30,
    direction: "alternate",
    loop: true,
    easing: "easeInOutSine",
  });
};
export { mainPhotoAnimation };
