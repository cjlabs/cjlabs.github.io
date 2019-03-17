<template>
  <section>
    <section class="container text-left">
      <div class="col-md-5">
        <h1 class="title">Daftar</h1>

        <b-form>
          <b-form-group id="email" label="Email:" label-for="email" description>
            <b-form-input id="email" type="email" v-model="form.email" required placeholder="email"></b-form-input>
          </b-form-group>

          <b-form-group id="name" label="Nama:" label-for="name" description>
            <b-form-input id="name" type="text" v-model="form.name" required placeholder="name"></b-form-input>
          </b-form-group>

          <b-form-group id="password" label="Password:" label-for="password" description>
            <b-form-input
              id="password"
              type="password"
              v-model="form.name"
              required
              placeholder=" password"
            ></b-form-input>
          </b-form-group>

          <b-form-group id="confirm" label="Ulangi Password:" label-for="confirm" description>
            <b-form-input
              id="password"
              type="password"
              v-model="form.name"
              required
              placeholder=" Ulangi password"
            ></b-form-input>
          </b-form-group>

          <b-button type="submit" variant="primary">Daftar</b-button>
          <b-link href="/login">Login</b-link>
        </b-form>
      </div>
      <div class="col-md-6">
        <img class="img-fluid" src="~/assets/img/profile.svg">
      </div>
    </section>
  </section>
</template>

<script>
export default {
  data() {
    return {
      form: {
        username: '',
        password: ''
      },
      show: true
    }
  },
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
