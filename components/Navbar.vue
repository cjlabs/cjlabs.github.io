<template>
  <b-navbar toggleable="md" type="light" class="container">
    <b-navbar-toggle target="nav_collapse"></b-navbar-toggle>

    <b-navbar-brand href="/"><strong>Cjlabs</strong></b-navbar-brand>

    <b-navbar-nav>
      <b-nav-item href="#">Codeigniter Class</b-nav-item>
      <b-nav-item href="#">Laravel Class</b-nav-item>
      <b-nav-item href="#">Symfony Class</b-nav-item>
      <b-nav-item href="#">Vuejs Class</b-nav-item>
      <b-nav-item href="#">React Class</b-nav-item>
    </b-navbar-nav>

    <b-collapse is-nav id="nav_collapse">
      <!-- Right aligned nav items -->
      <b-navbar-nav class="ml-auto">
        <b-nav-item href="#">Daftar</b-nav-item>
        <b-nav-item href="/daftar">Login</b-nav-item>
      </b-navbar-nav>
    </b-collapse>
  </b-navbar>
</template>

<style>
.container {
  padding: 25px 0px !important;
  min-height: 10vh !important;
}
</style>
