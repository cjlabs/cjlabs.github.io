<template>
  <section>
    <Navbar></Navbar>
    <div class="container">
      <div class="columns">
        <div class="column is-2">
          <SideMenu></SideMenu>
        </div>
        <div class="column is-10">
          <nuxt/>
        </div>
      </div>
      <Footer></Footer>
    </div>
  </section>
</template>


<script>
import Navbar from '~/components/Dashboard/Navbar.vue'
import SideMenu from '~/components/Dashboard/SideMenu.vue'

export default {
  components: {
    Navbar,
    SideMenu
  }
}
</script>