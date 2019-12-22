<template>
<div id="app">
  <NavBar />
<div class="mainBody">
  <b-container class="Footer-Space">
    <b-row>
      <sideNav />
      <div>
        <ul>
          <li  v-for="post, i in allPosts">
            <b-link v-bind:href="'/posts/' + post._id">{{post.title}}</b-link>
          </li>
        </ul>
      </div>
    </b-row>
  </b-container>
  <Footer />
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
  async created(){
    try{
      this.allPosts = await PostService.getAllPost();
      console.log("log: "+this.allPosts);

    }
    catch(err){
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
