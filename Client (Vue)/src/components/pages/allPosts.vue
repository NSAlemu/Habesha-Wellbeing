/* eslint-disable */
<template>
  <div id="app">
    <NavBar/>
    <div class="mainBody">
      <b-container class="Footer-Space">
        <b-row>
          <sideNav/>
          <b-col cols="12" lg="9">

              <b-row  v-for="post, i in allPosts">
                <b-card class="w-100 .p-3" bg-variant="light" text-variant="black" v-bind:title="post.title">
                  <b-card-text>

                    {{post.description}}
                  </b-card-text>
                  <b-button v-bind:href="'/#/posts/' + post._id" variant="primary">Open</b-button>
                </b-card>

              </b-row>

          </b-col>
        </b-row>
      </b-container>
      <Footer/>
    </div>


  </div>
</template>

<script>
  import axios from 'axios';
  import NavBar from '../parts/navbar'
  import sideNav from '../parts/sidenav'
  import mainBody from '../parts/main'
  import Footer from '../parts/footer'
  import PostService from '../../PostService'

  export default {
    name: 'HelloWorld',
    components: {
      NavBar,
      sideNav,
      mainBody,
      Footer
    },
    data() {
      return {
        allPosts: ''
      }
    },
    async created() {
      try {
        this.allPosts = await PostService.getAllPost();
        console.log("log: " + this.allPosts);

      } catch (err) {
        this.error = err.message;
      }
    }
    // ,
    // mounted() {
    //   axios
    //     .get('http://localhost:3000/api/posts/')
    //     .then(response => (this.allPosts = response.data));
    // }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
