<template>
  <section>
    <section class="container text-left pl-0 ml-0">
      <div class="col-md-5">
        <h1 class="title">Login</h1>

        <b-form>
          <b-form-group
            id="exampleInputGroup1"
            label="Username:"
            label-for="exampleInput1"
            description
          >
            <b-form-input
              id="exampleInput1"
              type="text"
              v-model="form.username"
              required
              placeholder="username"
            ></b-form-input>
          </b-form-group>

          <b-form-group
            id="exampleInputGroup1"
            label="Password:"
            label-for="exampleInput1"
            description
          >
            <b-form-input
              id="exampleInput1"
              type="password"
              v-model="form.password"
              required
              placeholder=" password"
            ></b-form-input>
          </b-form-group>

          <b-button type="submit" variant="primary">Login</b-button>
          <b-button type="reset" variant="danger">Reset</b-button>
        </b-form>

        <div>
          <br>
          <b-link href="/reset-password">Lupa Password ?</b-link>|
          <b-link href="/register">Daftar</b-link>
        </div>
      </div>
      <div class="col-md-5">
        <img class="img-fluid" src="~/assets/img/authentication.svg">
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
