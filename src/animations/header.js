import { gsap } from "gsap"


const animateInitDesktopNavbar = () => {
  const navbarLogo = document.querySelector('.anim-navbar-logo');
  const menu = document.querySelector('.anim-menu');
  const menuLinks = document.querySelectorAll('.anim-menu-link');

  const timeline = gsap.timeline();

  timeline.set(navbarLogo, { x: '-100%', opacity: 0 })
  timeline.set(menu, { x: '-100%', opacity: 0 })
  timeline.set(menuLinks, {  opacity: 0 })

  timeline.to(navbarLogo, { x: 0, opacity: 1, duration: 1, ease: 'power2.out' }, 'start')
  timeline.to(menu, { x: 0, opacity: 1, duration: 1, ease: 'power2.out' }, 'start')

  menuLinks.forEach((menuLinks, index) => {
    timeline.to(menuLinks, { opacity: 1,  duration: .1,  delay: index * 0.001, ease: "power2.inOut" }, 'start');
  });
}

const animateInitMobileNavbar = () => {
  const mobileNavbarLogo = document.querySelector('.anim-mobile-navbar-logo');
  const mobileNavbarBurger = document.querySelector('.anim-mobile-navbar-burger');

  const timeline = gsap.timeline();

  timeline.set(mobileNavbarLogo, { x: '-100%', opacity: 1 })
  timeline.set(mobileNavbarBurger, { x: '100%', opacity: 1 })

  timeline.to(mobileNavbarLogo, { x: 0, opacity: 1, duration: .5, ease: 'power2.out' }, 'start')
  timeline.to(mobileNavbarBurger, { x: 0, opacity: 1, duration: 1, ease: 'power2.out' }, 'start')
}

const animateOpenMobileBurgerMenu = () => {
  const mobileMenuPanel = document.querySelector('.anim-mobile-menu-panel');
  const mobileMenuPanelOverlay = document.querySelector('.anim-mobile-menu-panel-overlay');
  const mobileMenuIconBase = document.querySelector('.anim-mobile-menu-icon-base');
  const mobileMenuIconClose = document.querySelector('.anim-mobile-menu-icon-close');
  const mobileMenuLinks = document.querySelectorAll('.anim-mobile-menu-link');
  
  const timeline = gsap.timeline();

  timeline.set(mobileMenuIconClose, { scale: 0 })
  timeline.set(mobileMenuLinks, { x: '110%', opacity: '0' })

  timeline.to(mobileMenuIconBase, { scale: 0, display: 'none', duration: 0.15, ease: 'power2.out' })
  timeline.to(mobileMenuIconClose, { scale: 1, display: 'block', duration: 0.15, ease: 'power2.out' })
  timeline.to(mobileMenuPanel, { y: 0, duration: 0.5, ease: 'power2.out' })

  mobileMenuLinks.forEach((mobileMenuLink, index) => {
    timeline.to(mobileMenuLink, { x: 0, opacity: 1, duration: 0.15, delay: index * 0.001, ease: "power2.inOut" });
  });

  timeline.to(mobileMenuPanelOverlay, { backgroundColor: 'rgba(0, 0, 0, 0.5)', duration: 0.5, ease: 'power2.out' })
}

const animateCloseMobileBurgerMenu = () => {
  const mobileMenuPanel = document.querySelector('.anim-mobile-menu-panel');
  const mobileMenuPanelOverlay = document.querySelector('.anim-mobile-menu-panel-overlay');
  const mobileMenuIconBase = document.querySelector('.anim-mobile-menu-icon-base');
  const mobileMenuIconClose = document.querySelector('.anim-mobile-menu-icon-close');
  const mobileMenuLinks = document.querySelectorAll('.anim-mobile-menu-link');

  const timeline = gsap.timeline();

  timeline.to(mobileMenuIconClose, { scale: 0, display: 'none', duration: .15, ease: 'power2.out' })
  timeline.to(mobileMenuIconBase, { scale: 1, display: 'block', duration: .15, ease: 'power2.out' })

  mobileMenuLinks.forEach((mobileMenuLink, index) => {
    timeline.to(mobileMenuLink, { x: '110%', opacity: 0, duration: 0.15, delay: index * 0.001, ease: "power2.inOut" });
  });

  timeline.to(mobileMenuPanelOverlay, { backgroundColor: 'rgba(0, 0, 0, 1)', duration: 0.5, ease: 'power2.out' })
  timeline.to(mobileMenuPanel, { y: "-100%", duration: 0.5, ease: 'power2.in'});
}

export { 
  animateInitDesktopNavbar,
  animateInitMobileNavbar,
  animateOpenMobileBurgerMenu,
  animateCloseMobileBurgerMenu 
}

