<template>
  <div class="footer">
    <div class="container">
      <div class="row justify-content-between">
        <div class="col-12 col-lg-3">
          <div>
            <img src="../static/logo.png" alt="">
          </div>
          <p class="footer-text">
            In the year 2004, Quintessential Delivery Company has established
            itself as a leading service oriented forwarding company. quintessential
            Delivery company has an impressive list of more than 100 renowned
            clients...
          </p>
        </div>
        <div class="col-12 col-lg-8 mobile-row-top">
          <div class="row">
            <div class="col-12 col-sm-12 col-md-12 col-lg-4">
              <h5 class="footer-head">Quick Links</h5>
              <div class="footer-nav">
                <NuxtLink class="footer-nav-item" to="/about">
                  About us
                </NuxtLink>
                <NuxtLink class="footer-nav-item" to="/about"> FAQs </NuxtLink>
                <NuxtLink class="footer-nav-item" to="/contact">
                  Contact
                </NuxtLink>
                <NuxtLink class="footer-nav-item" to="/about">
                  Terms & Privacy
                </NuxtLink>
              </div>
            </div>
            <div class="col-12 col-sm-12 col-md-12 col-lg-5">
              <h5 class="footer-head">Explore</h5>
              <div class="footer-nav">
                <NuxtLink class="footer-nav-item" to="/track">
                  Track Shipment
                </NuxtLink>
                <NuxtLink class="footer-nav-item" to="/track">
                  Find Parcel
                </NuxtLink>
              </div>
            </div>
            <div class="col-12 col-sm-12 col-md-12 col-lg-3 mobile-margin-top">
              <h5 class="footer-head">Contact Us</h5>
              <p class="footer-email">info@quintessential-24.com</p>
              <p class="footer-phone">
                +1682 337 1942
                <br />
              </p>
            </div>
          </div>
        </div>
      </div>
      <hr />
      <div class="all-rights">
        <p class="rights">
          &copy; {{ date.getFullYear() }} Quintessential - All rights reserved.
        </p>
        <div class="">
          <div class="footer-social">
            <a href="https://facebook.com/theworkpedia" target="_blank">
              <i class="fab fa-facebook-f" />
            </a>
            <a href="https://twitter.com/theworkpedia" target="_blank">
              <i class="fab fa-twitter" />
            </a>
            <a href="https://instagram.com/theworkpedia" target="_blank">
              <i class="fab fa-instagram" />
            </a>
            <a href="https://linkedin.com/company/theworkpedia" target="_blank">
              <i class="fab fa-linkedin-in" />
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Footer",
  data() {
    return {
      date: new Date(),
    };
  },
  methods: {
    showRoute() {
      console.log(this.$route.path);
    },
  },
};
</script>

<style scoped>
.footer {
  background-color: #0d0106;
  padding: 69px 0px 20px 0px;
  color: #657ed4;
}
img{
  width: 130px;
}
.footer p {
  color: #fbfbff;
}
.footer-head {
  font-weight: bold;
  color: var(--bg-yellow) !important;
}
.footer-title img {
  width: 63px;
}
.footer-title h1 {
  padding-top: 10px;
  padding-left: 20px;
  font-size: 30px;
}
/* .footer-social{
  padding-top: 20px;
} */
.footer-social a i {
  font-size: 18px;
  color: #fff;
  padding-right: 20px;
}
.footer-social a:hover {
  text-decoration: none;
  color: #fff;
}
.footer-nav a:hover {
  text-decoration: none;
}
.footer-nav-item a:hover {
  text-decoration: none;
}
/* .all-rights{
  padding-top: 20px;
  padding-bottom: 30px;
} */
hr {
  background: #fff;
  margin-top: 50px;
  margin-bottom: 45px;
  opacity: 0.4;
}
.all-rights p {
  font-size: 13px;
}
.mobile-margin-top {
  font-size: 13px;
}
/* Mobile */
.footer-title {
  display: block;
}
.footer-text {
  padding-top: 30px;
  font-size: 13px;
}
.footer-nav-item {
  display: block;
  color: #fff;
  line-height: 2;
  padding: 5px;
  font-size: 13px;
}
.all-rights {
  display: block;
  margin-bottom: 69px;
  text-align: center;
}
.mobile-row-top {
  margin-top: 20px;
}
.footer-head {
  margin-top: 20px;
}
.mobile-margin-top {
  font-size: 13px;
}
@media screen and (min-width: 994px) {
  .footer-title {
    display: flex;
  }
  .footer-text {
    padding-top: 30px;
    font-size: 13px;
  }
  .footer-nav-item {
    font-size: 13px;
  }
  .mobile-row-top {
    margin-top: 0px;
  }
  .all-rights {
    display: flex;
    justify-content: space-between;
    margin-top: 20px;
    margin-bottom: 0px;
  }
  .mobile-margin-top {
    font-size: 13px;
  }
}
</style>