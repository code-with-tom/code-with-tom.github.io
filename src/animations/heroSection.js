import { gsap } from "gsap"

const animateHeroSection = () => {
  const heroItems = document.querySelectorAll('.anim-hero-item');
  gsap.set(heroItems, { opacity: 0, y:60 });
  
 
  heroItems.forEach((heroItem, index) => {

    gsap.to(heroItem, { opacity: 1, y: 0, duration: 1,  delay: 0.5 + index * 0.25, ease: "sine.inOut" });
  });
}

const animateHeroBlob = () => {
  const heroBlobs = document.querySelectorAll('.anim-hero-blob');
  gsap.set(heroBlobs, { opacity: 0 });
  
  
  heroBlobs.forEach((heroBlob, index) => {
    
    gsap.to(heroBlob, { x: "random(-50, 50, 5)", //chooses a random number between -20 and 20 for each target, rounding to the closest 5!
    y: "random(-400, 400, 3)",
    scale: "random(0.75, 1.5)",
    opacity: "random(.75, 1)",
    rotateZ:  "random(0, 360)",
    duration:1,
    ease:"none",
    repeat:-1,
    repeatRefresh:true });
  });
}

export { animateHeroSection, animateHeroBlob }

