<template>
  <section>

  <Navbar></Navbar>
<section class="container">

    <div class="col-md-6">
      <img class="img-fluid" src="~/assets/code.jpg">
    </div>

    <div class="col-md-6" >
      <h1 class="title">
       CJLABS Learning Center
      </h1>
      <p class="subtitle">
        Leverage your skill to next level
      </p>

      <div class="links">
        <a
          href="daftar"
          class="btn btn-primary"
        >
          Daftar
        </a>
        <a
          href="/login"
          class="btn btn-secondary"
        >
          Login
        </a>
      </div>
    </div>
</section>
  </section>
</template>

<script>
import Navbar from '~/components/Navbar.vue'

export default {
  components: {
    Navbar
  }
}
</script>

<style>
.container {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.title {
  font-family: 'Quicksand', 'Source Sans Pro', -apple-system, BlinkMacSystemFont,
    'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
  display: block;
  font-weight: 800;
  font-size: 2.5rem;
  color: #35495e;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  font-size: 35px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
}
</style>
