<template>
  <div class="container" id="head">
    <div class="row">
      <div class="col-md-6">
        <h1>Selamat Datang</h1>
        <h4 class="subtitle is-size-5">Belajar vue, symfony, git</h4>
        <br/>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit,
          sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
        </p>
        <br>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit,
          sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
        </p>
        <br>
        <br>
        <div class="links">
          <a href="/register" class="btn btn-primary shadowless">Daftar</a>
          <a href="/login" class="btn btn-info shadowless">Login</a>
        </div>
      </div>
      <div class="col-md-6">
        <figure class="image image is-1by1">
          <img class="img-fluid" src="img/undraw_version_control_9bpv.svg">
        </figure>
      </div>
    </div>
    <br>
    <br>
    <div class="container">
      <div class="row">
        <div class="col-4" v-for="item in howcjlabs" :key="item.title">
          <div class="card">
            <img :src="'img/' + item.image" class="card-img-top img-fluid image-responsive" alt>
            <div class="card-body">
              <h5 class="card-title">{{ item.title }}</h5>
              <p class="card-text">{{ item.body }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>

    <section class="row">
      <blockquote class="blockquote has-text-centered">
        <p
          class="mb-0"
        >Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.</p>
        <footer class="blockquote-footer">
          Someone famous in
          <cite title="Source Title">Source Title</cite>
        </footer>
      </blockquote>
    </section>
  </div>
</template>

<script>
export default {
  layout: 'stisla',
  computed: {
    howcjlabs() {
      return this.$store.state.howcjlabs.list
    }
  }
}
</script>

<style scoped>
.card-image {
  padding: 15px;
}

.card-img-top {
  width: 100%;
  height: 20vw;
  object-fit: cover;
}
</style>
