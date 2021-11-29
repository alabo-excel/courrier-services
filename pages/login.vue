<template>
  <div class="text-center my-5">
    <div class="heading">Welcome! Login.</div>
    <div class="mx-lg-auto mx-3 w-50">
      <input
        type="text"
        class="p-2 border my-2"
        placeholder="Enter your  Email Address"
      />
      <input
        type="password"
        class="p-2 border my-2"
        placeholder="Enter your Password"
      />
      <NuxtLink to="/admin">
        <input type="button" class="p-2 btn3 my-2" value="LOGIN" />
      </NuxtLink>
    </div>
  </div>
</template>

<style>
@import url("https://fonts.googleapis.com/css2?family=Poppins&family=Rubik:wght@900&display=swap");

.btn3 {
  background-color: #0d0106;
  color: #fbfbff;
}

.heading {
  font-size: 30px;
  font-family: "Rubik", sans-serif;
}
.w-50 {
  width: 50% !important;
}
input {
  width: 100%;
}
@media screen and (max-width: 600px) {
  .w-50,
  input {
    width: 90% !important;
  }
}
</style>