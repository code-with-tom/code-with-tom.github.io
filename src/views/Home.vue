<script setup>
import { test1 } from '@animations/test.js'
</script>

<template>
  <div @click="test1('.test1-anim')">
    Home
  </div>
  <div class="test1-anim">animated</div>
</template>