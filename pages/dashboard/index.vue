<template>
  <section class id="head">
    <section class="columns">
      <div class="column is-6">
        <h1 class="title is-1">Dashboard</h1>
        <h2 class="subtitle is-size-3">Belajar vue, symfony, laravel</h2>
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
      </div>
      <div class="column is-6">
        <figure class="image image is-1by1">
          <img class="img-fluid" :src="'../img/undraw_dashboard_nklg.svg'">
        </figure>
      </div>
    </section>
  </section>
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

<style>
</style>
