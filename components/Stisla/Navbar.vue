<template>
  <div>
    <nav class="navbar navbar-expand-lg navbar-light bg-transparent">
      <nuxt-link to="/" class="navbar-brand">
        CJLABS
        <sup>beta</sup>
      </nuxt-link>

      <button
        class="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <i class="fas fa-bars"></i>
      </button>

      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav mr-auto ml-lg-3 align-items-lg-center">
          <li class="nav-item">
            <nuxt-link to="/symfony" class="nav-link">Symfony</nuxt-link>
          </li>

          <li class="nav-item">
            <nuxt-link to="/dashboard" class="nav-link">Dashboard</nuxt-link>
          </li>
          <li class="nav-item">
            <nuxt-link to="/series" class="nav-link">Nuxtjs Series</nuxt-link>
          </li>
          <li class="nav-item d-lg-none d-md-block">
            <a
              href="https://getstisla.com/download"
              class="nav-link smooth"
              target="_blank"
            >Download</a>
          </li>
        </ul>
        <ul class="navbar-nav ml-auto align-items-lg-center d-none d-lg-block">
          <li class="ml-lg-3 nav-item">
            <nuxt-link to="/login" class="btn btn-md btn-info shadowless">Login</nuxt-link>
          </li>
        </ul>
      </div>
    </nav>
  </div>
</template>

<style scoped>
.navbar {
  left: 0;
  position: relative;
  margin-bottom: 20px;
}

.navbar-bg {
  content: ' ';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  z-index: -1;
  height: 70px;
  margin-bottom: 28px;
}

.navbar .navbar-brand {
  color: #646d75;
}


.navbar-light .navbar-nav .nav-link {
    color: rgba(0,0,0,.5);
    color: #6C757D;
    font-weight: 600;
}


.navbar-brand sup {
  font-size: 0.5em;
  top: -1.4em;
}
</style>