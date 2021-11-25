<template>
  <div>
    <b-navbar toggleable="lg" type="dark" class="px-lg-5 p-3 nav">
      <b-navbar-brand href="#">QuintEssential</b-navbar-brand>

      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

      <b-collapse id="nav-collapse" is-nav>
        <!-- Right aligned nav items -->
        <b-navbar-nav class="ml-auto links">
          <div class="p-2">Home</div>
          <div class="p-2">Sevices</div>
          <div class="p-2">About Us</div>
          <div class="p-2">Contact Us</div>
          <div class="p-2 px-4 btn1">Track</div>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
  </div>
</template>
<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Poppins&family=Rubik:wght@900&display=swap");
.links div {
  font-size: 15px;
  margin-right: 5px;
}
.nav {
  background: #657ed4;
  color: #fbfbff;
  position: fixed;
  width: 100%;
  z-index: 10;
  font-family: "Poppins", sans-serif;
}
.btn1 {
  background-color: #0d0106;
  color: #fbfbff;
}
</style>