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
      class="pt-5"
      :responsive="{
        0: { items: 1, nav: false },
        900: { items: 2, nav: false },
        1200: { items: 3 },
      }"
    >
      <div class="mx-lg-3 card1 p-lg-5 p-2">
        Thanks so much! My delivery was great and delivery was super fast too!
        <div class="mt-3 name">-Abigail King</div>
      </div>
      <div class="mx-lg-3 card1 p-lg-5 p-2">
        Thanks Quintessential delievery company your delivery are amazing and
        your service is wonderful.
        <div class="mt-3 name">-Grace Young</div>
      </div>
      <div class="mx-lg-3 card1 p-lg-5 p-2">
        Thanks Quintessential delievery company your delivery are amazing and
        your service is wonderful.
        <div class="mt-3 name">-Emma Williams</div>
      </div>
      <div class="mx-lg-3 card1 p-lg-5 p-2">
        my delivery has just arrived. It is soooo beautiful. Thank you for
        sending it so quickly. Looking forward now to the other stuff I ordered!
        <div class="mt-3 name">-Eliana Moore</div>
      </div>
      <div class="mx-lg-3 card1 p-lg-5 p-2">
        The delivery arrived in a timely manner in perfect condition. I
        appreciated your personal note too.
        <div class="mt-3 name">-Sofia Torres</div>
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
  background: #657ed4;
  font-family: "Poppins", sans-serif;
  color: #fbfbff;
}
.name {
  color: #657ed4;
  font-family: "Rubik", sans-serif;
}
.testimonial {
  position: relative;
  background: #657ed4;
}
.next,
.prev {
  background: #0d0106;
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
  color: #0d0106;
}
.small-heading {
  color: #0d0106;
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
  .prev,
  .next {
    left: 5px;
  }
}
</style>