<template>
  <div class="p-5 m-lg-5 testimonial">
    <div class="caption">
      <div class="heading">TESTIMONIALS</div>
      <div class="d-flex inner-caption">
        <div class="line m-4"></div>
        <div class="small-heading mx-2">TESTIMONIALS</div>
      </div>
    </div>
    <carousel
      :autoplay="false"
      :nav="false"
      :loop="true"
      :dots="false"
      :responsive="{
        0: { items: 1, nav: false },
        900: { items: 2, nav: false },
        1200: { items: 3 },
      }"
    >
      <div class="mx-lg-3 card1 p-lg-5 p-2">
        In the year 2004, Xenex Delivery Services Logistics has established
        itself as a leading service oriented forwarding company. Xenex Delivery
        Services has an impressive list of more than 100 renowned clients
        <div class="mt-3 name">PRINCE JACOB</div>
      </div>
      <template slot="next"><span class="next">&#8594;</span></template>
      <template slot="prev"><span class="prev">&#8592;</span></template>
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
@import url("https://fonts.googleapis.com/css2?family=Poppins&family=Rubik:wght@900&display=swap");
.card1 {
  background: #fbfbff;
  font-family: "Poppins", sans-serif;
}
.name {
  color: #657ed4;
  font-family: "Rubik", sans-serif;
}
.testimonial {
  position: relative;
}
.next,
.prev {
  background: #657ed4;
  text-align: center;
  border-radius: 100%;
  color: #fbfbff;
  position: absolute;
  top: 50%;
  width: 40px;
  height: 40px;
  z-index: 2;
  padding-top: 6px;
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
    width: 80px;
    height: 4px;
    background-color: #0d0106;
  }
  .line {
    display: none;
  }
  .prev, .next{
    left: 5px;
  }
}
</style>