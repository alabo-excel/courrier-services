<template>
  <div>
    <div class="services">
      <div class="overlay"></div>
      <div class="overlay-text text-center">
        <div class="caption">
          <div class="d-flex inner-caption">
            <div class="line m-4"></div>
            <div class="small-heading mx-2">OUR SERVICES</div>
          </div>
        </div>
      </div>
      <img class="img" src="../static/002.jpg" />
    </div>
    <div class="mx-lg-5 p-5">
      <div class="d-lg-flex m-lg-4">
        <div class="w-100">
          <img class="card-img" src="../static/003.jpg" alt="" />
        </div>
        <div class="w-100 p-lg-5 p-2 card2">
          <div class="mt-lg-5">
            <div class="small-heading2 py-3">TRANSPORTATION SERVICES</div>
            <div>
              <ul>
                <li>Excellent storage conditions</li>
                <li>Minimal risk of spoilage or damage of goods.</li>
                <li>Ensures safety while cargo is stored in warehouse</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div class="d-lg-flex m-lg-4">
        <div class="w-100">
          <img class="card-img" src="../static/003.jpg" alt="" />
        </div>
        <div class="w-100 p-lg-5 p-2 card2">
          <div class="mt-lg-3">
            <div class="small-heading2 py-3">CUSTOM CLEARENCE SERVICES</div>
            <div>
              <ul>
                <li>Adequate knowledge of Customs formalities.</li>
                <li>Goods handled with utmost care</li>
                <li>Simple and flexible documentation procedures</li>
                <li>Goods in safe hands from start to finish</li>
                <li>Minimum amount charged</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div class="d-lg-flex m-lg-4">
        <div class="w-100">
          <img class="card-img" src="../static/003.jpg" alt="" />
        </div>
        <div class="w-100 p-lg-5 p-2 card2">
          <div class="mt-lg-5">
            <div class="small-heading2 py-3">WAREHOUSING SERVICES</div>
            <div>
              <ul>
                <li>Excellent storage conditions</li>
                <li>Minimal risk of spoilage or damage of goods.</li>
                <li>Ensures safety while cargo is stored in warehouse</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
    <Testimonial />
  </div>
</template>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Poppins&family=Rubik:wght@900&display=swap");
.img {
  width: 100%;
  height: 60vh;
}
.services {
  position: relative;
}
.overlay {
  background: #0d0106;
  opacity: 40%;
  position: absolute;
  top: 0px;
  width: 100%;
  height: 60vh;
  z-index: 2;
}
.overlay-text {
  position: absolute;
  top: 40%;
  width: 50%;
  left: 30%;
  z-index: 2;
  color: #fbfbff;
  font-size: 35px;
  font-family: "Rubik", sans-serif;
}
.heading {
  font-family: "Rubik", sans-serif;
  font-size: 70px;
  opacity: 30%;
  color: #657ed4;
}
.small-heading {
  color: #fbfbff;
  font-size: 40px;
  font-family: "Rubik", sans-serif;
}
.small-heading2 {
  color: #0d0106;
  font-size: 20px;
  font-family: "Rubik", sans-serif;
}
.card2 {
  background: #fbfbff;
  font-family: "Poppins", sans-serif;
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
.card-img {
  width: 100%;
  height: 100%;
}
@media screen and (max-width: 600px) {
  .overlay-text {
    font-size: 20px;
    width: 50%;
    top: 50%;
  }
  .overlay {
    height: 50vh;
  }
  .img {
    height: 50vh;
  }
  .heading {
    font-size: 40px;
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
}
</style>