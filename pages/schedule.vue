<template>
  <section class="container">
    <b-row class="text-left">
      <b-col cols="7">
        <h1>Jadwal Kelas</h1>
        <p>
          What could be more useful than an application developed by users for their own needs? This is the story of the genesis of Symfony – born from the imagination of the web designers at SensioLabs, a web developer in its own right. Symfony was made available to everyone under an Open Source license. This benefits other developers, who also have the ability to improve it by adding their own modules. All this was done in an environment of Best Practices,
          standardization and interoperability of applications.
        </p>
        <br>
      </b-col>
      <b-col cols="5">
        <img class="img-fluid" src="~/assets/img/schedule.svg">
      </b-col>
    </b-row>

    <br>
    <b-row class="pt-5">
      <b-col cols="8">
        <h3>Materi yang akan anda pelajari</h3>
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
  font-weight: 400;
  margin-bottom: 20px;
}

.card {
  border: none;
}

.card p {
  font-size: 0.9em;
}
</style>
<script>
export default {
  layout: 'default',
  computed: {
    materi() {
      return this.$store.state.materi.list
    }
  }
}
</script>
