/* eslint-disable */
<template>
  <div id="app">
    <NavBar/>
    <div class="mainBody">
      <b-container class="Footer-Space">
        <b-row>
          <sideNav/>
          <b-col cols="12" lg="9">
            <div  onmouseover="this.style.color='red'" onmouseout="this.style.color='black';" >
              <b-row  v-for="post, i in allPosts">

                <b-button v-bind:href="'/#/posts/' + post._id" class="overflow-hidden w-100 mb-1" style="background-color: #ffffff;color: black; border: none;text-align: left;">
                    <b-card no-body class="overflow-hidden w-100 mb-1" bg-variant="light" text-variant="black">
                      <div  onmouseover="this.style.color='red'" onmouseout="this.style.color='black';" >
                      <b-row no-gutters>

                        <b-col md="2">
                          <b-card-img src="https://picsum.photos/400/400/?image=20" class="rounded-0"></b-card-img>
                        </b-col>
                        <b-col md="10">
                          <b-card-body v-bind:title="post.title">
                            <b-card-text  style="color: #63676B; " class="shortDescription">

                              {{post.description}}
                            </b-card-text>
                          </b-card-body>
                        </b-col>
                      </b-row>
                      </div>
                    </b-card>


                </b-button>
              </b-row>
            </div>
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
        this.allPosts.reverse();

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
  .shortDescription{
    line-height: normal;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 3;
  }
</style>
