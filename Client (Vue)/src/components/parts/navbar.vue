/* eslint-disable */
<template>
<div class="">
  <div style="margin-top:75px">
  </div>
  <b-navbar id="nav" toggleable="lg" class="white-bg" fixed="top">
    <b-container class="nobg">
      <b-row align-h="between">
        <b-col cols="2">
          <b-navbar-brand class="ml-auto" href="/#/">
            <div class="HWlogo" style=" margin: 0 auto;" href>

                <img src="../../assets/logo_representation.svg" class="d-inline-block align-top" alt="Kitten" width="30px">
                Habesha Wellness


            </div>

          </b-navbar-brand>
        </b-col>
        <b-col cols="2">

          <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

          <b-collapse id="nav-collapse" is-nav>
            <b-navbar-nav>
              <b-nav-item href="#" color="light">Link</b-nav-item>
              <b-nav-item href="#" disabled>Disabled</b-nav-item>
            </b-navbar-nav>

            <!-- Right aligned nav items -->
            <b-navbar-nav class="ml-auto">


              <b-nav-item-dropdown text="Lang" right>
                <b-dropdown-item href="#">EN</b-dropdown-item>
                <b-dropdown-item href="#">ES</b-dropdown-item>
                <b-dropdown-item href="#">RU</b-dropdown-item>
                <b-dropdown-item href="#">FA</b-dropdown-item>
              </b-nav-item-dropdown>


            </b-navbar-nav>
          </b-collapse>
        </b-col>

      </b-row>
    </b-container>
  </b-navbar>
</div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data() {
    return {}
  },
  mounted() {
    // this.$nextTick(function() {
    //   window.addEventListener("scroll", function() {
    //     var navbar = document.getElementById("nav");
    //     var nav_classes = navbar.classList;
    //     if (document.documentElement.scrollTop <= 300) {
    //       if (nav_classes.contains("nobg") === true) {
    //         nav_classes.toggle("nobg");
    //       }
    //       if (nav_classes.contains("bg") === false) {
    //         nav_classes.toggle("bg");
    //       }
    //     } else {
    //       if (nav_classes.contains("nobg") === false) {
    //         nav_classes.toggle("nobg");
    //       }
    //       if (nav_classes.contains("bg") === true) {
    //         nav_classes.toggle("bg");
    //       }
    //     }
    //   })
    // })
  }
}
</script>
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.navbarContainer {
  position: fixed;
}

.HWlogo {
  color: #58D53B;
  font-weight: bold;
}

.navbar-light .navbar-nav .nav-link {
  color: rgba(255, 250, 250, 0.8);
}

.justify-content-between {
  width: 100%;
}

.nobg {
  background-color: rgba(0, 0, 0, 0);
}

.white-bg {
  background-color: white;
}

.bg {
  background: rgb(10, 51, 0);
}

.btn-link {
  padding: 1rem 0;
  color: white;
}
</style>
