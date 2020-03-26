<template>
  <div class="">
    <div>
    </div>
    <div>
      <div style="height: 80px"></div>
      <b-navbar toggleable="lg" type="light" class="white-bg" fixed="top">

        <b-container>
          <b-navbar-brand class="" href="/#/">
            <div class="HWlogo">

              <img src="../../assets/logo_representation.svg" class="d-inline-block align-top" alt="Kitten"
                   width="30px">
              Habesha Wellbeing
            </div>

          </b-navbar-brand>


          <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

          <b-collapse id="nav-collapse" is-nav>
            <b-navbar-nav>
              <b-nav-item href="#">Link</b-nav-item>
              <b-nav-item href="#" disabled>Disabled</b-nav-item>
            </b-navbar-nav>

            <!-- Right aligned nav items -->
            <b-navbar-nav class="ml-auto">
              <b-button class="p-2 mr-2  text-decoration-none" size="md" variant="link" style="color: black; font-weight: bolder">Resources</b-button>
              <b-button  class="p-2 mr-2  text-decoration-none" size="md" variant="link" style="color: black; font-weight: bolder">Contact Us</b-button>
              <b-nav-form>
                <b-form-input size="sm" class="mr-sm-2 " placeholder="Search"></b-form-input>
                <b-button size="sm" class="my-2 my-sm-0 " type="submit">Search</b-button>
              </b-nav-form>


              <b-nav-item-dropdown text="Lang" right>
                <b-dropdown-item href="#">EN</b-dropdown-item>
                <b-dropdown-item href="#" >AM</b-dropdown-item>
                <b-dropdown-item href="#">OM</b-dropdown-item>
                <b-dropdown-item href="#">TI</b-dropdown-item>
              </b-nav-item-dropdown>

<!--              <b-nav-item-dropdown right>-->
<!--                &lt;!&ndash; Using 'button-content' slot &ndash;&gt;-->
<!--                <template v-slot:button-content>-->
<!--                  <em>User</em>-->
<!--                </template>-->
<!--                <b-dropdown-item href="#">Profile</b-dropdown-item>-->
<!--                <b-dropdown-item href="#">Sign Out</b-dropdown-item>-->
<!--              </b-nav-item-dropdown>-->
            </b-navbar-nav>
          </b-collapse>

        </b-container>


      </b-navbar>

    </div>
  </div>
</template>

<script>
  export default {
    name: 'HelloWorld',
    data() {
      return {
        scrollPosition: null
      }
    },
    methods: {
      updateScroll() {
        this.scrollPosition = window.scrollY
      }
    },
    mounted() {
      window.addEventListener('scroll', this.updateScroll);
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .navbarContainer {
    position: fixed;
  }

  .change_color_white {
    transition: background-color 0.4s ease;
    background-color: white;
  }

  .change_color_transparent {
    transition: background-color 0.4s ease;
    background-color: rgba(0, 0, 0, 0)
  }

  .change_color_text_white {
    transition: color 0.4s ease;
    color: white;
    transition: background-color 0.4s ease;
    background-color: rgba(0, 0, 0, 0);
    border: none;
  }

  .change_color_text_black {
    transition: color 0.4s ease;
    color: black;
    transition: background-color 0.4s ease;
    background-color: rgba(0, 0, 0, 0);
    border: none;
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
