<template>
  <section>
    <section class="container">
      <div class="col-md-5">
        <h1 class="title">Login</h1>
        <p class="subtitle">Leverage your skill to next level</p>

        <b-form @submit="onSubmit" @reset="onReset" v-if="show">
          <b-form-group
            id="exampleInputGroup1"
            label="Enter Username:"
            label-for="exampleInput1"
            description="We'll never share your email with anyone else."
          >
            <b-form-input
              id="exampleInput1"
              type="password"
              v-model="form.email"
              required
              placeholder="Enter username"
            ></b-form-input>
          </b-form-group>

          <b-form-group
            id="exampleInputGroup1"
            label="Enter Password:"
            label-for="exampleInput1"
            description="We'll never share your email with anyone else."
          >
            <b-form-input
              id="exampleInput1"
              type="password"
              v-model="form.email"
              required
              placeholder="Enter password"
            ></b-form-input>
          </b-form-group>

          <b-button type="submit" variant="primary">Login</b-button>
          <b-button type="reset" variant="danger">Reset</b-button>
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
        email: '',
        name: '',
        food: null,
        checked: []
      },
      foods: [
        { text: 'Select One', value: null },
        'Carrots',
        'Beans',
        'Tomatoes',
        'Corn'
      ],
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
