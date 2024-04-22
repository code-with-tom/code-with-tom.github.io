<script setup>
import { ref, onMounted } from 'vue'
import { test1 } from '../animations/test';

const sections = ref([]);
const current = ref("home")

onMounted(() => {
  sections.value = document.querySelectorAll('section')

  window.addEventListener('wheel', handleScroll, { passive: false })
  scrollToSection(sections.value[0]);
});

const handleScroll = (event) => {
  event.preventDefault()

  if (sections.value.length === 0) return

  const currentSection = document.querySelector('.active');
  const currentIndex = Array.from(sections.value).indexOf(currentSection);
  const nextIndex = currentIndex + (event.deltaY > 0 ? 1 : -1);

  if (nextIndex >= 0 && nextIndex < sections.value.length) {
    scrollToSection(sections.value[nextIndex]);
    
  }
}

const scrollToSection = (section) => {
  current.value = section.getAttribute("name")

  if(section.getAttribute("name") === 'home') {
    test1('.test-0')
  }
  else if(section.getAttribute("name") === 'services') {
    test1('.test-1')
  }
  else if(section.getAttribute("name") === 'portfolio') {
    test1('.test-2')
  }
  else if(section.getAttribute("name") === 'blog') {
    test1('.test-3')
  }
  else if(section.getAttribute("name") === 'about') {
    test1('.test-4')
  }
  else if(section.getAttribute("name") === 'contact') {
    test1('.test-5')
  }

  const targetScrollPosition = section.offsetTop;
  const startScrollPosition = window.pageYOffset;
  const distance = targetScrollPosition - startScrollPosition;
  const duration = 400; // Adjust duration as needed

  let startTime;

  const scrollAnimation = (currentTime) => {
   
    if (!startTime) startTime = currentTime;
    const timeElapsed = currentTime - startTime;
    const scrollProgress = Math.min(timeElapsed / duration, 1);
    const scrollPosition = startScrollPosition + distance * scrollProgress;
    window.scrollTo(0, scrollPosition);

    if (timeElapsed < duration) {
      requestAnimationFrame(scrollAnimation);
    } else {
      sections.value.forEach((sec) => {
        sec.classList.remove('active');
      });
      section.classList.add('active');
    }
  }

  requestAnimationFrame(scrollAnimation);
}
</script>

<template>
  <!-- NAVBAR DESKTOP -->
  <nav class="hidden md:block sticky text-white h-[80px]  w-full  top-0 z-50">
    <div class="mx-auto max-w-screen-lg h-full px-4 lg:px-0">
      <div class="flex justify-between items-center h-full">
        <div class="select-none">
          LOGO
        </div>
        <div>
          <ul>
            <li class="space-x-8">
              <a class="cursor-pointer select-none" :class="current === 'home' ? 'text-emerald-300' : 'text-white'" @click="scrollToSection(sections[0])">Home</a>
              <a class="cursor-pointer select-none" :class="current === 'services' ? 'text-emerald-300' : 'text-white'" @click="scrollToSection(sections[1])">Services</a>
              <a class="cursor-pointer select-none" :class="current === 'portfolio' ? 'text-emerald-300' : 'text-white'" @click="scrollToSection(sections[2])">Portfolio</a>
              <a class="cursor-pointer select-none" :class="current === 'blog' ? 'text-emerald-300' : 'text-white'" @click="scrollToSection(sections[3])">Blog</a>
              <a class="cursor-pointer select-none" :class="current === 'about' ? 'text-emerald-300' : 'text-white'" @click="scrollToSection(sections[4])">About</a>
              <a class="cursor-pointer select-none" :class="current === 'contact' ? 'text-emerald-300' : 'text-white'" @click="scrollToSection(sections[5])">Contact</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </nav>

  <!-- SECTIONS -->
  <div class="text-white text-4xl">
    <section name="home" class="py-20 bg-black h-screen border-b border-emerald-300 md:-mt-[80px]">
      <div class="test-0 flex justify-center items-center h-full w-full">
        Section HERO
      </div>
    </section>
    <section name="services" class="py-20 bg-black h-screen border-b border-emerald-300">
      <div class="test-1 flex justify-center items-center h-full w-full">
        Section SERVICES
      </div>
    </section>
    <section name="portfolio" class="py-20 bg-black h-screen border-b border-emerald-300">
      <div class="test-2 flex justify-center items-center h-full w-full">
        Section PORTFOLIO
      </div>
    </section>
    <section name="blog" class="py-20 bg-black h-screen border-b border-emerald-300">
      <div class="test-3 flex justify-center items-center h-full w-full">
        Section BLOG
      </div>
    </section>
    <section name="about" class="py-20 bg-black h-screen border-b border-emerald-300">
      <div class="test-4 flex justify-center items-center h-full w-full">
        Section ABOUT
      </div>
    </section>
    <section name="contact" class="py-20 bg-black h-screen border-b border-emerald-300">
      <div class="test-5 flex justify-center items-center h-full w-full">
        Section CONTACT
      </div>
    </section>
  </div>
</template>