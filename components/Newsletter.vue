<template>
  <div class="newsletter">
    <div class="py-5 text-center form">
      <div class="overlay-text py-3">Join Our Newsletter</div>
      <div class="d-lg-flex">
        <input
          type="text"
          class="p-3 input-field"
          placeholder="Enter Your Email"
        />
        <input type="button" class="p-3 px-4 btn3" value="Join Now" />
      </div>
    </div>
    <div class="overlay"></div>
  </div>
</template>
<style>
@import url("https://fonts.googleapis.com/css2?family=Poppins&family=Rubik:wght@900&display=swap");

.newsletter {
  background-image: url("../static/newsletter.jpg");
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-size: cover;
  position: relative;
  height: 50vh;
}
.form {
  margin-top: 30px;
  position: absolute;
  top: 5%;
  z-index: 2;
  left: 25%;
}
.btn3 {
  background-color: #0d0106;
  color: #fbfbff;
}
input {
  border: none;
}
.input-field {
  width: 500px;
}
.overlay {
  background: #657ed4;
  width: 100%;
  height: 50vh;
  position: absolute;
  top: 0;
  opacity: 75%;
}
.overlay-text {
  color: #fbfbff;
  font-size: 30px;
  font-family: "Rubik", sans-serif;
}
@media screen and (max-width: 600px) {
  .overlay-text {
    font-size: 20px;
  }
  input {
    width: 100% !important;
    border-radius: 0px;
  }
  .form {
    left: 3%;
  }
}
</style>