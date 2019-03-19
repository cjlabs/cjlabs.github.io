<template>
  <section class="container">
    <div class="columns">
      <div class="column">First column</div>
      <div class="column">Second column</div>
      <div class="column">Third column</div>
      <div class="column">Fourth column</div>
    </div>

    <b-row class="text-left">
      <b-col md="7">
        <h1>Symfony Framework</h1>
        <h6 class="mb-3">Level : Pemula | Jumlah Pertemuan : 12 @2jam | Kelas : Offline</h6>
        <p>
          What could be more useful than an application developed by users for their own needs? This is the story of the genesis of Symfony – born from the imagination of the web designers at SensioLabs, a web developer in its own right. Symfony was made available to everyone under an Open Source license. This benefits other developers, who also have the ability to improve it by adding their own modules. All this was done in an environment of Best Practices,
          standardization and interoperability of applications.
        </p>
        <br>
        <b-button href="#" variant="primary">Daftar</b-button>
      </b-col>
      <b-col md="5" class="d-none d-lg-block">
        <img class="img-fluid" src="~/assets/img/programming.svg">
      </b-col>
    </b-row>

    <br>
    <b-row class="pt-5" id="materi">
      <b-col sm="12" md="8">
        <h3 class="mb-3 text-center">Materi yang akan anda pelajari</h3>
        <b-row>
          <div v-for="item in materi" :key="item.title" class="col-sm-6">
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
      <b-col sm="12" md="4" class="pt-5 mt-6">
        <img class="img-fluid mt-6" src="~/assets/img/task.svg">
      </b-col>
    </b-row>
  </section>
</template>


<style>
h3 {
  font-weight: bold;
}

h6 {
  color: #777777;
}
h1 {
  font-size: 3.5em;
  font-weight: bold;
  margin-bottom: 20px;
}

.card {
  border: none;
  background: none;
}

.card p {
  font-size: 0.9em;
}

#materi {
  background: url('~assets/img/bg1.svg') no-repeat bottom left;
}
</style>
<script>
export default {
  computed: {
    materi() {
      return this.$store.state.materi.list
    }
  }
}
</script>
