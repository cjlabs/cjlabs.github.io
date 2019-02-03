<template>
  <b-navbar toggleable="md" type="light" class="container">
    <b-navbar-toggle target="nav_collapse"></b-navbar-toggle>

    <b-navbar-brand href="/"><strong>Cjlabs</strong></b-navbar-brand>

    <b-navbar-nav>
      <b-nav-item href="#">codeigniter</b-nav-item>
      <b-nav-item href="#">laravel</b-nav-item>
      <b-nav-item href="#">symfony</b-nav-item>
      <b-nav-item href="#">nuxtjs</b-nav-item>
       <b-nav-item href="#">store</b-nav-item>
    </b-navbar-nav>

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
</style>
