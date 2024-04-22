import { gsap } from "gsap"

const animateLogo = () => {
  const logo = document.querySelector('.anim-logo')
  gsap.set(logo, { opacity: 0 });

  gsap.to(logo, { opacity: 1, duration: 0.5, ease: "power2.inOut" });
}

const animateMenu = () => {
  const menuItems = document.querySelectorAll('.anim-menu-item');
  gsap.set(menuItems, { opacity: 0 });

  menuItems.forEach((menuItem, index) => {
    console.log('pol');
    gsap.to(menuItem, { opacity: 1, duration: 1, delay: index * 0.2, ease: "power2.inOut" });
  });
}

export { animateLogo, animateMenu }

