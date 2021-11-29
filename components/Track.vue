<template>
  <div class="fada">
    <div class="services">
      <div class="overlay"></div>
      <div class="overlay-text text-center">
        <div class="caption">
          <div class="d-flex inner-caption">
            <div class="line m-4"></div>
            <div class="small-heading mx-2">Track Parcel</div>
          </div>
        </div>
      </div>
      <img src="../static/img.jpg" />
    </div>
    <div v-if="parcelId === null">
      <input type="text" class="p-2 border" />
      <input type="button" class="p-2 btn3" value="TRACK" />
    </div>
    <div v-else class="m-lg-5 m-4">
      <ul id="progress">
        <li>
          <div class="node green"></div>
          <p>The First Thing!</p>
        </li>
        <li><div class="divider grey"></div></li>
        <li>
          <div class="node grey"></div>
          <p>The Second Thing!</p>
        </li>
        <li><div class="divider grey"></div></li>
        <li>
          <div class="node grey"></div>
          <p>The Third Thing!</p>
        </li>
        <li><div class="divider grey"></div></li>
        <li>
          <div class="node grey"></div>
          <p>The Fourth Thing!</p>
        </li>
        <li><div class="divider grey"></div></li>
        <li>
          <div class="node grey"></div>
          <p>The Last Thing!</p>
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      parcelId: null,
    };
  },
};
</script>
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

*,
*:after,
*:before {
  margin: 0;
  padding: 0;
}

input[type="button"] {
  margin-top: 20px;
}
.node {
  height: 20px;
  width: 20px;
  border-radius: 50%;
  display: inline-block;
  transition: all 1000ms ease;
}

.activated {
  box-shadow: 0px 0px 3px 2px rgba(194, 255, 194, 0.8);
}

.divider {
  height: 50px;
  width: 2px;
  margin-left: 8px;
  transition: all 800ms ease;
}

li p {
  display: inline-block;
  font-family: "Poppins";
  margin-left: 25px;
  font-size: 12px;
}

li {
  list-style: none;
  line-height: 1px;
}

.blue {
  background-color: rgba(82, 165, 255, 1);
}
.green {
  background-color: rgba(92, 184, 92, 1);
}

.grey {
  background-color: rgba(201, 201, 201, 1);
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
.inner-caption {
  position: absolute;
  top: 20%;
}
.btn3 {
  background-color: #0d0106;
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
  .title {
    font-size: 20px;
  }
  .line {
    display: none;
  }
}
</style>