import { gsap } from "gsap"

const test1 = (target) => {
  gsap.fromTo(target, {x: 0}, {x:100})
}

export { test1 }

