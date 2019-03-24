<template>
  <div class="main-wrapper main-wrapper-1">
    <div class="container">
      <Navbar></Navbar>

      <nuxt></nuxt>
    </div>
  </div>
</template>


<script>
import Navbar from '~/components/Stisla/Navbar.vue'
//import Footer from '~/components/Footer.vue'

export default {
  head: {
    script: [
      {
        src: '/stisla/modules/jquery.min.js'
      }
    ],
    link: [
      {
        rel: 'stylesheet',
        href: '/stisla/modules/bootstrap/css/bootstrap.min.css'
      },
      {
        rel: 'stylesheet',
        href: '/stisla/css/style.css'
      },
      {
        rel: 'stylesheet',
        href: '/stisla/css/components.css'
      }
    ]
  },
  components: {
    Navbar
  }
}
</script>