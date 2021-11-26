<template>
  <div class="fada">
    <div class="services">
      <div class="overlay"></div>
      <div class="overlay-text text-center">
        <div class="caption">
          <div class="d-flex inner-caption">
            <div class="line m-4"></div>
            <div class="small-heading mx-2">ABOUT US</div>
          </div>
        </div>
      </div>
      <img src="../static/img.jpg" />
    </div>
    <div class="mx-lg-5 px-lg-5">
      <div class="p-4 mx-lg-5">
        <div class="title py-3">Welcome to Express Trust Courier Services</div>
        <div>
          Express Trust Courier is one of the World's leading premium express
          delivery companies. We've been delivering for Britain, The US,
          Afghanistan and all of The middle East for over years, and we
          successfully deliver many parcels a year worldwide. Whilst we are a
          nationwide company, we take great pride in being able to offer a
          specialist, local service, across the UK and Ireland. Our vast range
          of flexible and competitive services are delivered through a reliable
          network built upon high levels of security and integrity. And with
          industry experts in senior positions throughout our business we have
          the knowledge and experience to deliver all of your distribution
          requirements. Our end-to-end secure network is the best in the
          business with CCTV, VanCams, trailer tracker, parcel tracker and our
          caged network. We take care of your parcels by placing them in our
          caged network during transit. By reducing the number of times we
          physically handle them, we minimise damages. Corporate Responsibility
          AtExpress Trust Courier Courier we take our responsibility to do
          what’s right for Customers and Colleagues very seriously.
          Procurement:Express Trust Courier Courier ensures that best value is
          derived from all purchases whilstdelivery-service-signature minimising
          risk and ensuring the highest United s from all selected suppliers.
          Written policies and procedures are consistently in place. AtExpress
          Trust Courier , we really are committed to our customers. Teamwork is
          key both internally within our own business and externally by working
          in true partnership with our customers. We operate at the premium end
          of the parcels market, and do everything we can to satisfy the needs
          of our customers. That means being reliable, being available, and in
          the event that things go wrong, being willing to go the extra mile to
          resolve the issue. With great management our progress over the years
          has been a successive rise, We've kept the records straight as our
          clientele base spanned across the globe. We've maintain a concrete
          security system, to ensure the safety of parcels Our mission is to
          provide trouble free courier service on a consistent basis. We show
          care and respect for each other and we show care and respect for each
          package we handle. We are dedicated to our customer’s success..
        </div>
      </div>
    </div>
    <div class="d-lg-flex">
      <div class="p-lg-5 p-4 card1">
        <div class="title py-3">Our Mission</div>
        We meet our customer's demands for a personal & profesional service by
        offering innovative supply chain solutions.
      </div>
      <div class="p-lg-5 p-4 card1">
        <div class="title py-3">Our Vision</div>
        We proactively and constantly look for new possibilities. Therefore, an
        important part of our vision is to attract & retain.
      </div>
      <div class="p-lg-5 p-4 card1">
        <div class="title py-3">Core Values</div>
        Procedures, values and attitudes are crucial to our reputation – not to
        mention the success we enjoy.
      </div>
    </div>
    <Clients />
  </div>
</template>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Poppins&family=Rubik:wght@900&display=swap");
img {
  width: 100%;
  height: 60vh;
}
.services {
  position: relative;
}
.fada {
  font-family: "Poppins", sans-serif;
}
.overlay {
  background: #0d0106;
  opacity: 20%;
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
.card1 {
  background-color: #fbfbff;
  font-family: "Poppins", sans-serif;
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
.line {
  width: 80px;
  height: 8px;
  background-color: #0d0106;
}
.caption {
  position: relative;
}
.title {
  font-family: "Rubik", sans-serif;
  font-size: 30px;
  color: #0d0106;
}
.inner-caption {
  position: absolute;
  top: 20%;
}
@media screen and (max-width: 600px) {
  .overlay-text {
    font-size: 20px;
    width: 50%;
    top: 45%;
  }
  .overlay {
    height: 55vh;
  }
  img {
    height: 55vh;
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
  .title {
    font-size: 20px;
  }
  .line {
    display: none;
  }
}
</style>