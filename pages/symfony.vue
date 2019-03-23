<template>
  <section class="container">
    <section>
      <div class="columns">
        <div class="column is-7">
          <h1 class="title is-1">Symfony Framework</h1>
          <h6 class="subtitle is-5">Level : Pemula | Jumlah Pertemuan : 12 @2jam | Kelas : Offline</h6>
          <p>
            What could be more useful than an application developed by users for their own needs? This is the story of the genesis of Symfony – born from the imagination of the web designers at SensioLabs, a web developer in its own right. Symfony was made available to everyone under an Open Source license. This benefits other developers, who also have the ability to improve it by adding their own modules. All this was done in an environment of Best Practices,
            standardization and interoperability of applications.
          </p>
          <br>

          <a href="/register" class="button is-primary">Daftar</a>
        </div>

        <div class="column is-5">
          <img class="img-fluid" src="~/assets/img/programming.svg">
        </div>
      </div>
    </section>
    <br>
    <br>
    <section>
      <div class="columns">
        <div class="column is-7">
          <div class="column is-12">
            <h3 class="title is-4 text-center">Materi yang akan anda pelajari</h3>
       
          </div>
          <div v-for="item in materi" :key="item.title" class="column is-6 is-inline-block">
            <div class="card has-shadow">
              <div class="card-content">
                <h5 class="title is-5">{{ item.title }}</h5> <hr/>

                <p class>{{ item.body }}</p>

                <br>
              </div>
            </div>
          </div>
        </div>
        <div class="column is-4">
          <img class="img-fluid mt-6" src="~/assets/img/task.svg">
        </div>
      </div>
    </section>
  </section>
</template>


<style>
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
