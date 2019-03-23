<template>
  <nav class="navbar" role="navigation" aria-label="main navigation">
    <div class="container">
      <div class="navbar-brand">
        <a class="navbar-item" href="/">
          <fa :icon="['fas', 'code']"/>&nbsp;
          <strong>CJLABS</strong>
        </a>

        <a
          role="button"
          class="navbar-burger burger"
          aria-label="menu"
          aria-expanded="false"
          data-target="navbarBasicExample"
        >
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </a>
      </div>

      <div id="navbarBasicExample" class="navbar-menu">
        <div class="navbar-start">
          <NuxtLink class="navbar-item" to="/symfony">Symfony</NuxtLink>
          <NuxtLink class="navbar-item" to>Vue</NuxtLink>
          <NuxtLink class="navbar-item" to="/series">Seri</NuxtLink>

          <NuxtLink class="navbar-item" to="/dashboard/">Dashboard</NuxtLink>
          <div class="navbar-item has-dropdown is-hoverable">
            <a class="navbar-link">More</a>

            <div class="navbar-dropdown">
              <a class="navbar-item">About</a>
              <a class="navbar-item">Jobs</a>
              <a class="navbar-item">Contact</a>
              <hr class="navbar-divider">
              <a class="navbar-item">Report an issue</a>
            </div>
          </div>
        </div>

        <div class="navbar-end">
          <div class="navbar-item">
            <div class="buttons">
              <a target="_blank" class="button" href="https://github.com/cjlabs">
                <span class="icon">
                  <fa :icon="['fab', 'github']"/>
                </span>
                <span>GitHub</span>
              </a>

              <a class="button is-primary">
                <strong>Daftar</strong>
              </a>
              <a href="/login" class="button is-info">Log in</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </nav>
</template>

<style>
.navbar {
  padding: 25px auto;
  margin: 0px;
  margin-bottom: 10px;
  
}
</style>
