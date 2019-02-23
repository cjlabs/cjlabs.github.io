<template>
  <section>
    <section class="container text-left">
      <div class="col-md-5">
        <h1 class="title">Reset Password</h1>

        <b-form >
          <b-form-group
            id="exampleInputGroup1"
            label="Email:"
            label-for="exampleInput1"
            description=""
          >
            <b-form-input
              id="exampleInput1"
              type="text"
              v-model="form.username"
              required
              placeholder="Masukkan Email"
            ></b-form-input>
          </b-form-group>

          <b-button type="reset" variant="danger">Kirim</b-button>
        </b-form>

      </div>
      <div class="col-md-7">
        <img class="img-fluid" src="~/assets/code.jpg">
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
