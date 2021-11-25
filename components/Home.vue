<template>
  <div>
    <div class="slider">
      <div class="overlay"></div>
      <div class="overlay-text">
        We offer rapid and flexible delivery to your doorstep
        <div class="btn2 p-3 mt-3">KNOW MORE</div>
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
  top: 30%;
  width: 45%;
  left: 10%;
  z-index: 2;
  color: #fbfbff;
  font-size: 45px;
  font-family: "Rubik", sans-serif;
}
.btn2 {
  width: 150px;
  font-size: 16px !important;
  background: #657ed4;
  text-align: center;
  font-family: "Poppins", sans-serif;
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
}
</style>