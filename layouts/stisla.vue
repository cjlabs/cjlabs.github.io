<template>
  <div class="main-wrapper main-wrapper-1">
    <div class="container">
      <Navbar></Navbar>
      <br>
      <br>
      <nuxt></nuxt>
    </div>
  </div>
</template>


<script>
import Navbar from '~/components/Stisla/Navbar.vue'
//import Footer from '~/components/Footer.vue'

export default {
  components: {
    Navbar
  }
}
</script>