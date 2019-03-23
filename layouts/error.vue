<template>
  <section class="container">
    <div class="columns ">
      <div class="column is-6 has-text-centered	">
        <img class="img-fluid" src="~/assets/img/404.svg">
        <h3 class="title" v-if="error.statusCode === 404">Page not found</h3>
        <h1 v-else>An error occurred</h1>
      </div>

      <div class="column is-2">
        <aside class="menu">
          <p class="menu-label">Go Back</p>
          <ul class="menu-list">
            <li>
              <a href="/">Home</a>
            </li>
            <li>
              <a>Blog</a>
            </li>
          </ul>
        </aside>
      </div>
    </div>
  </section>
</template>

<style scope="local">
</style>


<script>
export default {
  props: ['error'],
  layout: 'blank' // you can set a custom layout for the error page
}
</script>