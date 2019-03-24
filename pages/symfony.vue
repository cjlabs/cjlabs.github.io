<template>
  <section class="container">
    <div class="row">
      <div class="col-md-7">
        <h1>Symfony Framework</h1>
        <h6>Level : Pemula | Jumlah Pertemuan : 12 @2jam | Kelas : Offline</h6>
        <br>
        <p>
          What could be more useful than an application developed by users for their own needs? This is the story of the genesis of Symfony – born from the imagination of the web designers at SensioLabs, a web developer in its own right. Symfony was made available to everyone under an Open Source license. This benefits other developers, who also have the ability to improve it by adding their own modules. All this was done in an environment of Best Practices,
          standardization and interoperability of applications.
        </p>
        <br>

        <a href="/register" class="btn btn-primary">Daftar</a>
      </div>

      <div class="col-md-5">
        <img class="img-fluid" src="~/assets/img/programming.svg">
      </div>
    </div>
    <br>
    <br>
    <br>
    <div class="row">
      <div class="col-7">
        <div class="row">
          <div v-for="item in materi" :key="item.title" class="col-md-6">
            <div class="card">
              <div class="card-body">
                <h5 class="title is-5">{{ item.title }}</h5>

                <p class>{{ item.body }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="col-4">
        <img class="img-fluid mt-6" src="~/assets/img/task.svg">
      </div>
    </div>
  </section>
</template>


<style>
</style>
<script>
export default {
  layout: 'stisla',
  computed: {
    materi() {
      return this.$store.state.materi.list
    }
  }
}
</script>
