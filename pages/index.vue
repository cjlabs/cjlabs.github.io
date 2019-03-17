<template>
  <section class="container" id="head">
    <b-row>
      <b-col cols="6" class="text-left">
        <h1>Selamat Datang </h1>
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
        <div class="links">
          <a href="/register" class="btn btn-md btn-primary">Daftar</a>
          <a href="/login" class="btn btn-md btn-secondary">Login</a>
        </div>
      </b-col>
      <b-col cols="4" offset-md="1">
        <img class="img-fluid" src="~/assets/img/laravel-vue.svg">
      </b-col>
    </b-row>
    <b-row class="pt-5">
      <b-col cols="7">
        <h3>How cjlabs Works ?</h3>
        <b-row>
          <div v-for="item in howcjlabs" :key="item.title" class="col-sm-6">
            <b-card no-body>
              <b-card-body class="pl-0">
                <b-link to="/">
                  <h5>{{ item.title }}</h5>
                </b-link>
                <p class="card-text">{{ item.body }}</p>
              </b-card-body>
            </b-card>

            <br>
          </div>
        </b-row>
      </b-col>

      <b-col cols="5" class="mt-5">
        <img class="img-fluid" src="~/assets/img/bookmarks.svg">
      </b-col>
    </b-row>

    <b-row>
      <b-col cols="12" class="mt-5 mb-5">
        <blockquote class="blockquote text-center">
          <p
            class="mb-0"
          >Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.</p>
          <footer class="blockquote-footer">
            Someone famous in
            <cite title="Source Title">Source Title</cite>
          </footer>
        </blockquote>
      </b-col>
    </b-row>
  </section>
</template>

<script>
export default {
  layout: 'default',
  computed: {
    howcjlabs() {
      return this.$store.state.howcjlabs.list
    }
  }
}
</script>

<style>
.card {
  border: none;
  background: none;
}
.subtitle {
  font-weight: 300;
  font-size: 35px;
  color: #526488;
  word-spacing: 5px;
}

.links {
  padding-top: 15px;
}

#head {
  background: url('~assets/img/bg1.svg') no-repeat bottom left;
}
</style>
