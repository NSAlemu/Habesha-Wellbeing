/* eslint-disable */
<template>
  <div id="app" class="">
    <homeHeader/>
    <div class="mainBody">
      <b-container class="Footer-Space">
        <b-row>
          <div style="height: 50px;">
          </div>
        </b-row>
        <b-row>
          <sideNav/>

          <b-col cols="12" lg="9">

            <b-card-group deck>
              <b-card
                img-src="https://picsum.photos/600/300/?image=25"
                img-alt="Image"
                img-top
                tag="article"
                style="max-width: 20rem;"
                class="mb-2"
              >
                <b-card-text>
                  View all posts
                </b-card-text>

                <b-button href="/#/posts" variant="primary">View All Posts</b-button>
              </b-card>

              <b-card
                img-src="https://picsum.photos/600/300/?image=25"
                img-alt="Image"
                img-top
                tag="article"
                style="max-width: 20rem;"
                class="mb-2"
              >
                <b-card-text>
                  Open admin console to add a post.
                </b-card-text>

                <b-button href="/#/admin_console" variant="primary">Open Admin Console</b-button>
              </b-card>
            </b-card-group deck>
          </b-col>
        </b-row>
      </b-container>
      <Footer/>
    </div>


  </div>
</template>

<script>
  import homeHeader from '../parts/homeheader'
  import sideNav from '../parts/sidenav'
  import mainBody from '../parts/main'
  import Footer from '../parts/footer'

  export default {
    name: 'HelloWorld',
    components: {
      homeHeader,
      sideNav,
      mainBody,
      Footer
    },
    data() {
      return {}
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>


</style>
