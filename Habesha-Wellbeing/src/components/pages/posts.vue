<template>
<div id="app">
  <NavBar />
  <div style="margin-top:75px">

  </div>
  <b-container>
    <b-row>
      <!-- <sideNav /> -->

      <mainBody v-bind:postBody="postBody" />
    </b-row>
  </b-container>
  <Footer />

</div>
</template>

<script>
import axios from 'axios';
import NavBar from '../parts/navbar'
import sideNav from '../parts/sidenav'
import mainBody from '../parts/main'
import Footer from '../parts/footer'
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
      postBody: ''
    }
  },
  mounted() {
    axios
      .get('http://localhost:3000/api/posts/' + this.$route.params.PostID)
      .then(response => (this.postBody = response.data));
    console.log("post" + this.postBody)
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>


</style>
