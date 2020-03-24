/* eslint-disable */
<template>
  <div id="app">


    <div class="mainBody">
      <b-container class="Footer-Space">
        <b-row>
          <NavBar />
        </b-row>
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
  render: function (createElement) {
    return h("div", ["Text in Parent", h(mainBody)]);
  },
  async created(){
    try{
      this.postBody = await PostService.getPost(this.$route.params.PostID);
    }
    catch(err){
      this.error = err.message;
    }
    let doc = new DOMParser().parseFromString(this.postBody.post, 'text/html').body;

    doc.querySelectorAll( 'oembed[url]' ).forEach( element => {
      // Create the <a href="..." class="embedly-card"></a> element that Embedly uses
      // to discover the media.
      const anchor = document.createElement( 'a' );
      anchor.setAttribute( 'href', element.getAttribute( 'url' ) );
      anchor.className = 'embedly-card';

      element.appendChild( anchor );
    } );
    this.postBody.post = doc.innerHTML;
    console.log("**************"+doc.innerHTML);
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>


</style>
