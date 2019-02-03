<template>
  <section>
    <section class="container">
      <div class="col-md-6">
        <img class="img-fluid" src="~/assets/code.jpg">
      </div>

      <div class="col-md-6">
        <h1 class="title">CJLABS Learning Center</h1>
        <p class="subtitle">Leverage your skill to next level</p>
    <p>
      Lorem ipsum dolor sit amet, consectetur adipisicing elit, 
      sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
      Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
      </p>
        <div class="links">
          <a href="/register" class="btn btn-lg btn-primary">Daftar</a>
          <a href="/login" class="btn btn-lg btn-secondary">Login</a>
        </div>
      </div>
    </section>
  </section>
</template>

<script>
export default {
  layout: 'default'
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
