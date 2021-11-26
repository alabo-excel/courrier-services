<template>
  <div>
    <div class="slider">
      <div class="overlay"></div>
      <div class="overlay-text">
        We offer rapid and flexible delivery to your doorstep
        <NuxtLink to="/about">
          <div class="btn2 p-3 mt-3">KNOW MORE</div>
        </NuxtLink>
      </div>
      <carousel
        :autoplay="true"
        :nav="false"
        :items="1"
        :loop="true"
        :dots="false"
      >
        <img src="../static/005.jpg" />
        <img src="../static/003.jpg" />
        <img src="../static/002.jpg" />
        <img src="../static/001.jpg" />
        <img src="../static/004.jpg" />
      </carousel>
    </div>
    <div class="d-lg-flex">
      <div class="about w-100">
        <img src="../static/tank.jpg" alt="">
      </div>
      <div class="w-100 p-lg-5 p-4 my-auto">
        <div class="welcome-text">
          WELCOME TO QUINTESSENTIAL DELIVERY COMPANY
        </div>
        <div class="my-3">
          In the year 2004, Xenex Delivery Services Logistics established itself
          as a leading service oriented forwarding company. Xenex Delivery
          Services has an impressive list of more than 100 renowned clients and
          these clients have instilled supreme trust in Xenex Delivery Services
          over the years and we take pride in being associated with them. Our
          specialization...
        </div>
        <NuxtLink to="/contact">
          <div class="btn2 p-3 mt-4">GET IN TOUCH</div>
        </NuxtLink>
      </div>
    </div>
    <Testimonial />
    <Newsletter />
    <Clients />
  </div>
</template>
<script>
import carousel from "vue-owl-carousel";

export default {
  components: { carousel },
};
</script>
<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Poppins&family=Rubik:wght@900&display=swap");
img {
  width: 100%;
  height: 100vh;
}
.slider {
  position: relative;
}
.overlay {
  background: #0d0106;
  opacity: 20%;
  position: absolute;
  top: 0px;
  width: 100%;
  height: 100vh;
  z-index: 2;
}
.overlay-text {
  position: absolute;
  top: 35%;
  width: 45%;
  left: 10%;
  z-index: 2;
  color: #fbfbff;
  font-size: 45px;
  font-family: "Rubik", sans-serif;
}
.welcome-text {
  color: #657ed4;
  font-size: 40px;
  font-family: "Rubik", sans-serif;
}
.btn2 {
  width: 150px;
  font-size: 16px !important;
  background: #657ed4;
  text-align: center;
  font-family: "Poppins", sans-serif;
}

a {
  color: #fbfbff;
}
a:hover {
  text-decoration: none;
  color: #fbfbff;
}
.about {
  height: 100vh;
}
@media screen and (max-width: 600px) {
  .overlay-text {
    font-size: 20px;
    width: 80%;
    top: 45%;
  }
  .overlay {
    height: 55vh;
  }
  img {
    height: 55vh;
  }
  .about {
    height: 40vh;
  }
  .about img{
    height: 40vh;
  }
  .welcome-text {
    font-size: 30px;
  }
}
</style>