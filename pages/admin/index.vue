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
        <div class="heading my-4">Parcels</div>
        <div class="d-lg-flex flex-wrap">
          <div v-for="parcel in parcels" :key="parcel._id" class="w-100 border m-2 p-2">
           Parcel Name: {{parcel.parcelName}}
           <div>Receiver Name: {{parcel.receiverInfo.name}}</div>
            <div>{{parcel._id}}</div>
          </div>
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
      parcels: null,
    };
  },
  mounted() {
    fetch("https://quintessential.herokuapp.com/api", {
      headers: {
        "Content-type": "application/json; charset=UTF-8",
        Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2MWE0ZGUxYjNlNGY2YjBiMGZkYWVkYTYiLCJlbWFpbCI6ImFkbWluMTIzQGdtYWlsLmNvbSIsImlhdCI6MTYzODE5NDc5NiwiZXhwIjoxNjQwNzg2Nzk2fQ.rbKpdqwGZaXtnFbk5l_QspTyMOh_hjG8mDe2t53wRBY`,
      },
      method: "POST",
      body: JSON.stringify({
        query: `
              query{
                parcels{
                  parcelName
                  _id
                      receiverInfo{
                        name
                      }
                }
              }
          `,
      }),
    })
      .then((res) => res.json())
      .then((result) => {
        console.log(result.data.parcels);
        this.parcels = result.data.parcels
      });
  },
  methods: {
    ...mapMutations(["userLoggedOut"]),
    logout() {
      this.userLoggedOut();
      this.$router.push("/login");
    },
    openNav() {
      document.getElementById("mySidepanel").style.width = "300px";
      document.getElementById("closebtn").style.display = "block";
    },
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

.openbtn:hover {
  background-color: #444;
}
.flex-wrap{
  flex-wrap: wrap;
}
@media (max-width: 600px) {
  .sidepanel {
    width: 0px;
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