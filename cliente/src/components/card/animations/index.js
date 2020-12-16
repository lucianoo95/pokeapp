import anime from 'animejs/lib/anime.es.js'

const mainPhotoAnimation = () => {
  return anime({
    targets: '.anime-card',
    translateY: [0, 5],
    scale: [1.003, 0.998],
    rotateY: [-7, 5],
    rotateZ: -0.5,
    skewX: 0.2,
    skewY: 0.2,
    direction: 'alternate',
    loop: true,
    easing: 'easeInOutSine'
  })
}
const mainPhotoShadowAnimation = () => {
  return anime({
    targets: '.anime-shadow',
    translateX: [5, -3],
    rotateX: [85, 85.8],
    duration: 1200,
    direction: 'alternate',
    loop: true,
    easing: 'easeInOutSine'
  })
}
const mainPhotoInAnimation = (mainPhotoAnimation) => {
  return anime({
    targets: '.anime-card',
    translateY: [-1000, 0],
    opacity: [0, 1],
    easing: 'easeInOutSine',
    skewX: 0.2,
    skewY: 0.2,
    complete: function () {
      mainPhotoAnimation()
    }
  })
}
const mainShadowInAnimation = () => {
  return anime({
    targets: '.anime-shadow',
    opacity: [0, 1],
    duration: 500,
    delay: 1000,
    complete: function () {
      mainPhotoAnimation()
    }
  })
}
const mainTitleAnimation = () => {
  return anime({
    targets: '.anime-title',
    translateY: [50, 0],
    opacity: [0, 1],
    delay: anime.stagger(450, { start: 800 })
  })
}
const cardHoverAnimation = () => {
  return anime({
    targets: '.anime-cardContainer',
    translateY: -30,
    filter: 'brightness(125%)',
    easing: 'easeOutExpo'
  })
}
const cardNotHoverAnimation = () => {
  return anime({
    targets: '.anime-cardContainer',
    translateY: 0,
    filter: 'brightness(85%)',
    easing: 'easeOutExpo'
  })
}
const cardFlipAnimation = () => {
  return anime({
    targets: '.anime-cardContainer',
    rotateY: { value: '+=360' },
    easing: 'easeInOutSine',
    duration: 300
  })
}
const buttonsInAnimation = () => {
  return anime({
    targets: '.anime-button',
    opacity: 1,
    delay: anime.stagger(-500, { start: 1000 })
  })
}
export {
  mainPhotoAnimation,
  mainPhotoShadowAnimation,
  mainPhotoInAnimation,
  mainShadowInAnimation,
  mainTitleAnimation,
  cardHoverAnimation,
  cardNotHoverAnimation,
  cardFlipAnimation,
  buttonsInAnimation
}
