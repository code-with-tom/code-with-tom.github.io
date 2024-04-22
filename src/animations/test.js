import { gsap } from "gsap"

const test1 = (target) => {
  gsap.fromTo(target, {opacity: 0}, {opacity:1, duration: 3, ease: 'sine.in'})
}

export { test1 }

