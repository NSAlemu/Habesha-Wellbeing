<template>
<div id="app">
  <NavBar />
<div class="mainBody">
  <b-container class="Footer-Space">
    <b-row>
      <!-- <sideNav /> -->
      <mainBody v-bind:postBody="postBody" />
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
import PostService from '../../postService'

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
      postBody: '',
      error:''
    }
  },
  async created(){
    try{
      this.postBody = await PostService.getPost(this.$route.params.PostID);
    }
    catch(err){
      this.error = err.message;
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>


</style>
