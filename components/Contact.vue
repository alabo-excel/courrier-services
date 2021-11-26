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
    <div class="d-lg-flex my-5 justify-content-center">
      <a href="tel:5554280940">
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
          +234 901 601 6563
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