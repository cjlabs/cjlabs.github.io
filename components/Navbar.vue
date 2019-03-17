<template>
  <b-navbar toggleable="md" type="light" class="container fixed">
    <b-navbar-toggle target="nav_collapse"></b-navbar-toggle>

    <b-navbar-brand href="/">
      <strong>
       CJLABS
      </strong>
    </b-navbar-brand>



    <b-collapse is-nav id="nav_collapse">
    <b-navbar-nav>
      <b-nav-item href="/sample-course">Symfony</b-nav-item>
      <b-nav-item href="#">Laravel</b-nav-item>
      <b-nav-item href="#">Vue</b-nav-item>
    </b-navbar-nav>
    </b-collapse>

    <b-collapse is-nav id="nav_collapse">
      <!-- Right aligned nav items -->
      <b-navbar-nav class="ml-auto">
        <b-nav-item href="/register">Daftar</b-nav-item>
        <b-nav-item href="/login">Login</b-nav-item>
      </b-navbar-nav>
    </b-collapse>
  </b-navbar>
</template>

<style>
.container {
  padding: 15px 0px !important;
  min-height: 10vh !important;
}

.navbar-brand {
  color: #00c380;
}
</style>
