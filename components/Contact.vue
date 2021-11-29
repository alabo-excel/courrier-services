<template>
  <div>
    <div class="services">
      <div class="overlay"></div>
      <div class="overlay-text text-center">
        <div class="caption">
          <div class="d-flex inner-caption">
            <div class="line m-4"></div>
            <div class="small-heading mx-2">CONTACT US</div>
          </div>
        </div>
      </div>
      <img src="../static/005.jpg" />
    </div>
    <div class="d-lg-flex m-lg-5 px-lg-5">
      <div class="p-4 m-4 card1">
        <div class="text-center py-4">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="40"
            height="40"
            fill="#657ed4"
            class="bi bi-geo-alt"
            viewBox="0 0 16 16"
          >
            <path
              d="M12.166 8.94c-.524 1.062-1.234 2.12-1.96 3.07A31.493 31.493 0 0 1 8 14.58a31.481 31.481 0 0 1-2.206-2.57c-.726-.95-1.436-2.008-1.96-3.07C3.304 7.867 3 6.862 3 6a5 5 0 0 1 10 0c0 .862-.305 1.867-.834 2.94zM8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10z"
            />
            <path
              d="M8 8a2 2 0 1 1 0-4 2 2 0 0 1 0 4zm0 1a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"
            />
          </svg>
        </div>
        <div>
          Crestwood Vlg #4 OFFICE 15E, Manchester Township, NJ, 08759.USA Unit
          <br />
          <br />
          5, Peacefield Business Park, Louth Rd, Grimsby, DN36 5YN.uk
          <br />
          <br />
          Box No. 185849,Abu Dhabi.Dhabi
          <br />
          <br />
          1357-4, Hyojadong 3(sam)-ga,Wansan-gu Jeonju-si,Jeollabuk-do.Korea
        </div>
      </div>
      <div class="p-4 border m-4 mx-lg-5">
        <div class="title">WORKING HOURS</div>
        <div class="py-3">
          Pleasure and praising pain was born and will give you a complete
          happiness.
        </div>
        <div class="d-flex justify-content-between">
          <div>Monday</div>
          <div>9:00 am – 17.00 pm</div>
        </div>
        <hr />

        <div class="d-flex justify-content-between">
          <div>Tuesday</div>
          <div>9:00 am – 17.00 pm</div>
        </div>
        <hr />

        <div class="d-flex justify-content-between">
          <div>Wednesday</div>
          <div>9:00 am – 17.00 pm</div>
        </div>
        <hr />

        <div class="d-flex justify-content-between">
          <div>Thurs $ Friday</div>
          <div>9:00 am – 17.00 pm</div>
        </div>
        <hr />

        <div class="d-flex justify-content-between">
          <div>Sat & Sunday</div>
          <div>Closed</div>
        </div>
        <hr />
      </div>
    </div>
    <div class="d-lg-flex my-5 justify-content-center">
      <a href="tel:+16823371942">
        <div class="card1 p-5 m-4 text-center">
          <div class="py-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="25"
              height="25"
              fill="currentColor"
              class="bi bi-phone"
              viewBox="0 0 16 16"
            >
              <path
                d="M11 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h6zM5 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H5z"
              />
              <path d="M8 14a1 1 0 1 0 0-2 1 1 0 0 0 0 2z" />
            </svg>
          </div>
          +1682 337 1942
        </div>
      </a>
      <a href="mailto:name1@mail.com">
        <div class="card1 p-5 m-4 text-center">
          <div class="py-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="25"
              height="25"
              fill="currentColor"
              class="bi bi-envelope"
              viewBox="0 0 16 16"
            >
              <path
                d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4Zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1H2Zm13 2.383-4.708 2.825L15 11.105V5.383Zm-.034 6.876-5.64-3.471L8 9.583l-1.326-.795-5.64 3.47A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.741ZM1 11.105l4.708-2.897L1 5.383v5.722Z"
              />
            </svg>
          </div>
          info@QuintEssential.io
        </div>
      </a>
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
.title {
  font-size: 20px;
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
.line {
  width: 80px;
  height: 8px;
  background-color: #0d0106;
}
a {
  color: #000;
}
a:hover {
  color: #000;
  text-decoration: none;
}
.caption {
  position: relative;
}
.inner-caption {
  position: absolute;
  top: 20%;
}
.card1 {
  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
}
.card1:hover {
  background: #657ed4;
  color: #fbfbff;
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
  .line {
    display: none;
  }
}
</style>