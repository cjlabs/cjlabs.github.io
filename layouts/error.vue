<template>
  <div class="container">
    <b-row>
      <b-col cols="6" class="text-center">
        <img class="img-fluid" src="~/assets/img/404.svg">
        <h3 v-if="error.statusCode === 404">Page not found</h3>
        <h1 v-else>An error occurred</h1>
      </b-col>
    </b-row>
  </div>
</template>

<script>
export default {
  props: ['error'],
  layout: 'default' // you can set a custom layout for the error page
}
</script>