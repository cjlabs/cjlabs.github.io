<template>
    <section class="container">
      <b-row>
      <b-col cols="6" class="text-left ">
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
      </b-col>
      <b-col cols="6" text-left>
        <img class="img-fluid" src="~/assets/img/programmer.svg">
      </b-col>
      </b-row>
    </section>
</template>

<script>
export default {
  layout: 'default'
}
</script>

<style>

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
