<template>
  <div>
    <div class="navbar-bg"></div>
    <nav class="navbar navbar-expand-lg navbar-light bg-transparent">
      <div class="container">
        <a class="navbar-brand smooth" href="/">CJLABS</a>
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
              <a href="/symfony" class="nav-link">Symfony</a>
            </li>
            <li class="nav-item">
              <a href="https://getstisla.com/support" class="nav-link">Support</a>
            </li>
            <li class="nav-item">
              <a href="https://getstisla.com/page/contact" class="nav-link">Contact</a>
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
              <a href="/login" class="btn smooth btn-icon icon-left btn-primary">Login</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  </div>
</template>

<style scoped>
.navbar {
  left: 0;
}

.navbar .navbar-brand {
  color: black;
}
</style>