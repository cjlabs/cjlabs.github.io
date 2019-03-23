<template>
  <section class="container" id="head">
    <section class="columns">
      <div class="column is-6">
        <h1 class="title is-1">Selamat Datang</h1>
        <h2 class="subtitle is-size-5">Belajar vue, symfony, laravel</h2>
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
          <a href="/register" class="button is-primary is-large">Daftar</a>
          <a href="/login" class="button is-info is-large">Login</a>
        </div>
      </div>
      <div class="column is-4">
        <figure class="image image is-1by1">
          <img class="img-fluid" src="~/assets/img/laravel-vue.svg">
        </figure>
      </div>
    </section>
    <br>
    <br>
    <section class="columns">
      <div class="column is-12">
        <div class="column is-12">
          <h1 class="title has-text-centered">How cjlabs Works ?</h1>
        </div>

        <div class="column is-3 is-inline-block" v-for="item in howcjlabs" :key="item.title">
          <div class="card is-shadowless">
            <div class="card-image">
              <figure class="image is-4by3">
                <img class="img-fluid" :src="'img/' + item.image">
              </figure>
            </div>
            <div class="card-content">
              <div class="media">
                <div class="media-content">
                  <p class="title is-5">{{ item.title }}</p>
                </div>
              </div>

              <div class="content">{{ item.body }}</div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="column">
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
  </section>
</template>

<script>
export default {
  computed: {
    howcjlabs() {
      return this.$store.state.howcjlabs.list
    }
  }
}
</script>

<style>
</style>
