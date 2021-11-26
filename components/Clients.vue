<template>
  <div class="p-5 m-lg-5">
    <div class="caption">
      <div class="heading">CLIENTS</div>
      <div class="d-flex inner-caption">
        <div class="line m-4"></div>
        <div class="small-heading mx-2">CLIENTS</div>
      </div>
    </div>
    <carousel
      :autoplay="true"
      :nav="false"
      :loop="true"
      :dots="false"
      :responsive="{
        0: { items: 2, nav: false },
        900: { items: 2, nav: false },
        1200: { items: 6 },
      }"
    >
      <img class="mx-auto" src="../static/05.png" />
      <img class="mx-auto" src="../static/03.png" />
      <img class="mx-auto" src="../static/02.png" />
      <img class="mx-auto" src="../static/01.png" />
      <img class="mx-auto" src="../static/04.png" />
      <img class="mx-auto" src="../static/06.png" />
    </carousel>
  </div>
</template>

<script>
import carousel from "vue-owl-carousel";

export default {
  components: { carousel },
};
</script>
<style scoped>
img {
  width: 120px !important;
}
.heading {
  font-family: "Rubik", sans-serif;
  font-size: 70px;
  opacity: 10%;
  color: #657ed4;
}
.small-heading {
  color: #657ed4;
  font-size: 40px;
  font-family: "Rubik", sans-serif;
}
.line {
  width: 80px;
  height: 8px;
  background-color: #0d0106;
}
.caption {
  position: relative;
}
.inner-caption {
  position: absolute;
  top: 20%;
}

@media screen and (max-width: 600px) {
  .heading {
    font-size: 35px;
  }
  .small-heading {
    font-size: 23px;
  }
  .line {
    display: none;
  }
}
</style>