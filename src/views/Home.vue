<script setup>
import { ref, onMounted } from 'vue'

import { 
  animateInitDesktopNavbar,
  animateInitMobileNavbar,
  animateOpenMobileBurgerMenu,
  animateCloseMobileBurgerMenu 
} from '@animations/header';

const mobileMenu = ref(false)

const toggleMobileMenu = () => {
  mobileMenu.value = !mobileMenu.value;

  if(mobileMenu.value) {
    animateOpenMobileBurgerMenu()
    // document.body.style.overflow = 'hidden'
  } else {
    animateCloseMobileBurgerMenu()
    // document.body.style.overflow = 'auto'
  }
}

onMounted(() => {
  animateInitDesktopNavbar()
  animateInitMobileNavbar()
})

// import { ref, onMounted } from 'vue'
// import { animateLogo, animateMenu } from '@animations/header';
// import { animateHeroSection, animateHeroBlob, animateHeroIcons} from '@animations/heroSection';

// const sections = ref([]);
// const current = ref("home")

// onMounted(() => {
  // sections.value = document.querySelectorAll('section')
  // window.addEventListener('wheel', handleScroll, { passive: false })
  // scrollToSection(sections.value[0]);
  // animateHeroSection()
  // animateLogo()
  // animateMenu()
  // animateHeroBlob()
  // animateHeroIcons()
// });

// const handleScroll = (event) => {
//   event.preventDefault()

//   if (sections.value.length === 0) return

//   const currentSection = document.querySelector('.active');
//   const currentIndex = Array.from(sections.value).indexOf(currentSection);
//   const nextIndex = currentIndex + (event.deltaY > 0 ? 1 : -1);

//   if (nextIndex >= 0 && nextIndex < sections.value.length) {
//     scrollToSection(sections.value[nextIndex]);
//   }
// }

// const scrollToSection = (section) => {
//   current.value = section.getAttribute("name")

//   if(section.getAttribute("name") === 'home') {
    
//   }
//   else if(section.getAttribute("name") === 'services') {
//     // test1('.test-1')
//   }
//   else if(section.getAttribute("name") === 'portfolio') {
//     // test1('.test-2')
//   }
//   else if(section.getAttribute("name") === 'blog') {
//     // test1('.test-3')
//   }
//   else if(section.getAttribute("name") === 'about') {
//     // test1('.test-4')
//   }
//   else if(section.getAttribute("name") === 'contact') {
//     // test1('.test-5')
//   }

//   const targetScrollPosition = section.offsetTop;
//   const startScrollPosition = window.pageYOffset;
//   const distance = targetScrollPosition - startScrollPosition;
//   const duration = 400; // Adjust duration as needed

//   let startTime;

//   const scrollAnimation = (currentTime) => {
   
//     if (!startTime) startTime = currentTime;
//     const timeElapsed = currentTime - startTime;
//     const scrollProgress = Math.min(timeElapsed / duration, 1);
//     const scrollPosition = startScrollPosition + distance * scrollProgress;
//     window.scrollTo(0, scrollPosition);

//     if (timeElapsed < duration) {
//       requestAnimationFrame(scrollAnimation);
//     } else {
//       sections.value.forEach((sec) => {
//         sec.classList.remove('active');
//       });
//       section.classList.add('active');
//     }
//   }

//   requestAnimationFrame(scrollAnimation);
// }
</script>

<template>
  <nav class="anim-navbar hidden md:block sticky text-white h-[80px] w-full top-0 z-50 bg-black border-b border-purple-600 border-opacity-25 backdrop-filter backdrop-blur-xl">
    <div class="mx-auto max-w-screen-lg h-full px-4 lg:px-0">
      <div class="flex justify-between items-center h-full">
        <div class="select-none">
          <div class="anim-navbar-logo flex space-x-1 oswald uppercase ">
            <div>Code</div>
            <div>With</div>
            <div>Tom</div>
          </div>
        </div>
        <div class="anim-menu">
          <ul class="oswald uppercase">
            <li class="space-x-6">
              <a class="anim-menu-link cursor-pointer select-none"  @click="scrollToSection(sections[0])">Home</a>
              <a class="anim-menu-link cursor-pointer select-none"  @click="scrollToSection(sections[1])">Services</a>
              <a class="anim-menu-link cursor-pointer select-none"  @click="scrollToSection(sections[2])">Portfolio</a>
              <a class="anim-menu-link cursor-pointer select-none"  @click="scrollToSection(sections[3])">Blog</a>
              <a class="anim-menu-link cursor-pointer select-none"  @click="scrollToSection(sections[4])">About</a>
              <a class="anim-menu-link cursor-pointer select-none"  @click="scrollToSection(sections[5])">Contact</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </nav>
 
  <nav class="block md:hidden sticky text-white h-[80px] w-full top-0 z-50 bg-black border-b border-purple-600 border-opacity-25">
    <div class="h-full px-4">
      <div class="flex justify-between items-center h-full  bg-black relative z-50">
        <div class="select-none">
          <div class="anim-mobile-navbar-logo flex space-x-1 oswald uppercase">
            <div>Code</div>
            <div>With</div>
            <div>Tom</div>
          </div>
        </div>
        <div @click="toggleMobileMenu()" class="anim-mobile-navbar-burger h-[80px] w-[80px] flex justify-end items-center">
          <img  class="anim-mobile-menu-icon-base w-8 h-8" src="@assets/icons/menu-right.png" alt="">
          <img  class="anim-mobile-menu-icon-close hidden w-8 h-8" src="@assets/icons/menu-close.png" alt="">
        </div>
      </div>
      <div class="anim-mobile-menu-panel block relative z-0 -translate-y-full">
        <ul class="oswald uppercase">
          <li class="anim-mobile-menu-panel-overlay flex flex-col bg-black -mx-4 p-4 backdrop-filter backdrop-blur-xl border-b border-purple-600 border-opacity-25
              divide-y-2 divide-purple-600 divide-opacity-10">
            <a class="anim-mobile-menu-link cursor-pointer select-none py-4" :class="current === 'home' ? 'text-purple-600' : 'text-white'" @click="scrollToSection(sections[0])">Home</a>
            <a class="anim-mobile-menu-link cursor-pointer select-none py-4" :class="current === 'services' ? 'text-purple-600' : 'text-white'" @click="scrollToSection(sections[1])">Services</a>
            <a class="anim-mobile-menu-link cursor-pointer select-none py-4" :class="current === 'portfolio' ? 'text-purple-600' : 'text-white'" @click="scrollToSection(sections[2])">Portfolio</a>
            <a class="anim-mobile-menu-link cursor-pointer select-none py-4" :class="current === 'blog' ? 'text-purple-600' : 'text-white'" @click="scrollToSection(sections[3])">Blog</a>
            <a class="anim-mobile-menu-link cursor-pointer select-none py-4" :class="current === 'about' ? 'text-purple-600' : 'text-white'" @click="scrollToSection(sections[4])">About</a>
            <a class="anim-mobile-menu-link cursor-pointer select-none py-4" :class="current === 'contact' ? 'text-purple-600' : 'text-white'" @click="scrollToSection(sections[5])">Contact</a>
          </li>
        </ul>
      </div>
    </div>
  </nav>

  <div class=" text-white">
    <section name="home" class="py-20 bg-black h-screen -mt-[80px] relative overflow-hidden">
      <ul class="absolute h-screen w-screen top-0 left-0 bottom-0 right-0 filter blur-[128px] overflow-hidden">
        <li class="anim-hero-blob absolute bg-purple-600 bg-opacity-25 h-[400px] w-[400px] right-0 bottom-0"></li>
        <li class="anim-hero-blob absolute bg-purple-600 bg-opacity-25 h-[300px] w-[300px] left-0 top-0"></li>
      </ul>
      <div class="relative test-0 oswald h-full w-full flex flex-col justify-center mx-auto max-w-screen-lg px-4 lg:px-0">
        <div class="anim-hero-item text-purple-600 uppercase">
          Crafting Digital Solutions with Precision
        </div>
        <div class="anim-hero-item text-5xl md:text-8xl mt-2">
          I’M THOMAS, DEVELOPER FROM FRANCE
        </div>
        <div class="anim-hero-item text-2xl md:text-xl mt-8 md:w-[700px]">
          Welcome to my digital playground. Experience the fusion of creativity and technology. Dive into my portfolio and explore my world 
        </div>
        <div class="absolute bottom-0 w-full hidden">
          <ul class="flex space-x-12">
            <li class="relative w-14 h-14 anim-hero-images">
              <img class="absolute left-0 h-full w-full" src="@assets/icons/html.png" alt="">
            </li>
            <li class="w-14 h-14 anim-hero-images">
              <img class="h-full w-full" src="@assets/icons/css.png" alt="">
            </li>
            <li class="w-14 h-14 anim-hero-images">
              <img class="h-full w-full" src="@assets/icons/js.png" alt="">
            </li>
            <li class="w-14 h-14 anim-hero-images">
              <img class="h-full w-full" src="@assets/icons/vue.png" alt="">
            </li>
            <li class="w-14 h-14 anim-hero-images">
              <img class="h-full w-full" src="@assets/icons/tailwind.png" alt="">
            </li>
            <li class="w-14 h-14 anim-hero-images">
              <img class="h-full w-full" src="@assets/icons/electron.png" alt="">
            </li>
            <li class="w-14 h-14 anim-hero-images">
              <img class="h-full w-full" src="@assets/icons/unity.png" alt="">
            </li>
            <li class="w-14 h-14 anim-hero-images">
              <img class="h-full w-full" src="@assets/icons/godot.png" alt="">
            </li>
            <li class="w-14 h-14 anim-hero-images">
              <img class="h-full w-full" src="@assets/icons/blender.png" alt="">
            </li>
          </ul>
        </div>
      </div>
    </section>
    <section name="services" class="py-20 bg-black h-screen ">
      <div class="test-1 flex justify-center items-center h-full w-full">
        Section SERVICES
      </div>
    </section>
    <section name="portfolio" class="py-20 bg-black h-screen ">
      <div class="test-2 flex justify-center items-center h-full w-full">
        Section PORTFOLIO
      </div>
    </section>
    <section name="blog" class="py-20 bg-black h-screen ">
      <div class="test-3 flex justify-center items-center h-full w-full">
        Section BLOG
      </div>
    </section>
    <section name="about" class="py-20 bg-black h-screen ">
      <div class="test-4 flex justify-center items-center h-full w-full">
        Section ABOUT
      </div>
    </section>
    <section name="contact" class="py-20 bg-black h-screen">
      <div class="test-5 flex justify-center items-center h-full w-full">
        Section CONTACT
      </div>
    </section>
  </div>
</template>