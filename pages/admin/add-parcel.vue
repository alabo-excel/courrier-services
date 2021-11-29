<template>
  <div class="d-flex">
    <div id="mySidepanel" class="sidepanel">
      <a
        href="javascript:void(0)"
        class="closebtn"
        id="closebtn"
        @click="closeNav"
        >&times;</a
      >
      <NuxtLink to="/admin">Parcels</NuxtLink>
      <NuxtLink to="/admin/add-parcel">Add Parcels</NuxtLink>
      <NuxtLink to="/admin/add-location">Add Location</NuxtLink>
      <a href="#" @click="logout">Logout</a>
    </div>
    <div class="w-100 p-4">
      <button class="openbtn" @click="openNav">&#9776;</button>
      <div>
        <div class="heading my-4">Add Parcels</div>
        <div class="d-lg-flex w-100">
          <div class="m-2 w-100">
            <input
              type="text"
              class="p-2 border"
              placeholder="Parcel Name"
              v-model="parcelName"
            />
          </div>
          <div class="m-2 w-100">
            <input
              type="text"
              class="p-2 border"
              placeholder="Location"
              v-model="location"
            />
          </div>
        </div>
        <div class="d-lg-flex w-100">
          <div class="m-2 w-100">
            <input
              type="text"
              class="p-2 border"
              placeholder="Time"
              v-model="time"
            />
          </div>
          <div class="m-2 w-100">
            <input
              type="text"
              class="p-2 border"
              placeholder="Date"
              v-model="date"
            />
          </div>
        </div>
        <div class="d-lg-flex w-100">
          <div class="m-2 w-100">
            <input
              type="text"
              class="p-2 border"
              placeholder="Transport Method"
              v-model="transportMethod"
            />
          </div>
          <div class="m-2 w-100">
            <input
              type="text"
              class="p-2 border"
              placeholder="Delivery Data"
              v-model="deliveryDate"
            />
          </div>
        </div>
        <div class="d-lg-flex w-100">
          <div class="m-2 w-100">
            <input
              type="text"
              class="p-2 border"
              placeholder="Payment Method"
              v-model="paymentMethod"
            />
          </div>
          <div class="m-2 w-100">
            <input
              type="text"
              class="p-2 border"
              placeholder="Insurance"
              v-model="insurance"
            />
          </div>
        </div>
        <div class="d-lg-flex w-100">
          <div class="m-2 w-100">
            <input
              type="text"
              class="p-2 border"
              placeholder="Weight"
              v-model="weight"
            />
          </div>
          <div class="m-2 w-100">
            <input
              type="text"
              class="p-2 border"
              placeholder="Number of Goods"
              v-model="numberOfGoods"
            />
          </div>
        </div>
        <div class="d-lg-flex w-100">
          <div class="m-2 w-100">
            <input
              type="text"
              class="p-2 border"
              placeholder="Senders Name"
              v-model="sendersName"
            />
          </div>
          <div class="m-2 w-100">
            <input
              type="text"
              class="p-2 border"
              placeholder="Senders Email"
              v-model="sendersEmail"
            />
          </div>
        </div>
        <div class="d-lg-flex w-100">
          <div class="m-2 w-100">
            <input
              type="text"
              class="p-2 border"
              placeholder="Senders Address"
              v-model="sendersAddress"
            />
          </div>
          <div class="m-2 w-100">
            <input
              type="text"
              class="p-2 border"
              placeholder="Senders City"
              v-model="sendersCity"
            />
          </div>
        </div>
        <div class="d-lg-flex w-100">
          <div class="m-2 w-100">
            <input
              type="text"
              class="p-2 border"
              placeholder="Senders Country"
              v-model="sendersCountry"
            />
          </div>
          <div class="m-2 w-100">
            <input
              type="text"
              class="p-2 border"
              placeholder="Senders Phone"
              v-model="sendersPhone"
            />
          </div>
        </div>
        <div class="d-lg-flex w-100">
          <div class="m-2 w-100">
            <input
              type="text"
              class="p-2 border"
              placeholder="Senders Post Code"
              v-model="sendersPostCode"
            />
          </div>
          <div class="m-2 w-100">
            <input
              type="text"
              class="p-2 border"
              placeholder="Receivers Name"
              v-model="receiverName"
            />
          </div>
        </div>
        <div class="d-lg-flex w-100">
          <div class="m-2 w-100">
            <input
              type="text"
              class="p-2 border"
              placeholder="Receivers Email"
              v-model="receiverEmail"
            />
          </div>
          <div class="m-2 w-100">
            <input
              type="text"
              class="p-2 border"
              placeholder="Receivers Address"
              v-model="receiverAddress"
            />
          </div>
        </div>
        <div class="d-lg-flex w-100">
          <div class="m-2 w-100">
            <input
              type="text"
              class="p-2 border"
              placeholder="Receivers City"
              v-model="receiverCity"
            />
          </div>
          <div class="m-2 w-100">
            <input
              type="text"
              class="p-2 border"
              placeholder="Receivers County"
              v-model="receiverCountry"
            />
          </div>
        </div>
        <div class="d-lg-flex w-100">
          <div class="m-2 w-100">
            <input
              type="text"
              class="p-2 border"
              placeholder="Receivers Phone"
              v-model="receiverPhone"
            />
          </div>
          <div class="m-2 w-100">
            <input
              type="text"
              class="p-2 border"
              placeholder="Receivers Post Code"
              v-model="recevicerPostCode"
            />
          </div>
        </div>
        <div>
          <input
            @click="submit"
            type="button"
            value="SUBMIT"
            class="p-2 m-2 btn3"
          />
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { mapMutations } from "vuex";
export default {
  middleware: "authenticated",
  data() {
    return {
      parcelName: "",
      location: "",
      time: "",
      date: "",
      transportMethod: "",
      deliveryDate: "",
      paymentMethod: "",
      insurance: "",
      weight: "",
      numberOfGoods: "",
      sendersName: "",
      sendersEmail: "",
      sendersAddress: "",
      sendersCity: "",
      sendersCountry: "",
      sendersPhone: "",
      sendersPostCode: "",
      recevicerName: "",
      recevicerEmail: "",
      recevicerAddress: "",
      recevicerCity: "",
      recevicerCountry: "",
      recevicerPhone: "",
      recevicerPostCode: ""
    };
  },
  methods: {
    ...mapMutations(["userLoggedOut"]),
    submit() {
      fetch("https://quintessential.herokuapp.com/api", {
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
        method: "POST",
        body: JSON.stringify({
          query: `
            
          `,
        }),
      })
        .then((res) => res.json())
        .then((result) => {
          console.log(result);
        });
    },
    logout() {
      this.userLoggedOut();
      this.$router.push("/login");
    },
    openNav() {
      document.getElementById("mySidepanel").style.width = "300px";
      document.getElementById("closebtn").style.display = "block";
    },
    /* Set the width of the sidebar to 0 (hide it) */
    closeNav() {
      document.getElementById("mySidepanel").style.width = "0";
      document.getElementById("closebtn").style.display = "none";
    },
  },
};
</script>
<style>
@import url("https://fonts.googleapis.com/css2?family=Poppins&family=Rubik:wght@900&display=swap");

/* The sidepanel menu */
.sidepanel {
  height: 100vh; /* Specify a height */
  width: 300px; /* 0 width - change this with JavaScript */
  z-index: 1; /* Stay on top */
  background-color: #0d0106;
  color: #fbfbff;
  overflow-x: hidden; /* Disable horizontal scroll */
  padding-top: 60px; /* Place content 60px from the top */
  transition: 0.5s; /* 0.5 second transition effect to slide in the sidepanel */
}

/* The sidepanel links */
.sidepanel a {
  padding: 8px 8px 8px 32px;
  text-decoration: none;
  font-size: 25px;
  display: block;
  transition: 0.3s;
  color: #fbfbff;
}
.btn3 {
  background-color: #0d0106;
  color: #fbfbff;
}
.heading {
  font-size: 30px;
  font-family: "Rubik", sans-serif;
}

/* When you mouse over the navigation links, change their color */
.sidepanel a:hover {
  color: #f1f1f1;
}

/* Position and style the close button (top right corner) */
.sidepanel .closebtn {
  position: absolute;
  top: 0;
  left: 8%;
  font-size: 36px;
  margin-left: 50px;
}

/* Style the button that is used to open the sidepanel */
.openbtn {
  font-size: 20px;
  cursor: pointer;
  background-color: #0d0106;
  color: #fbfbff;
  padding: 10px 15px;
  border: none;
}
input {
  width: 100%;
}
.openbtn:hover {
  background-color: #444;
}
@media (max-width: 600px) {
  .sidepanel {
    width: 0px;
    /* position: fixed; */
  }
  .sidepanel .closebtn {
    display: none;
  }
  .sidepanel a {
    padding: 8px 8px 8px 32px;
    font-size: 15px;
  }
}
</style>
