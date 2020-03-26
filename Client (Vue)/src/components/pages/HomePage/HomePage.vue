/* eslint-disable */
<template>
  <div id="app" class="">
    <navbar/>
    <jumbotron/>
    <div class="mainBody mt-5 footer-space" >
      <b-container class="Footer-Space" >
        <b-row>
          <sideNav/>
          <b-col cols="12" lg="9">
            <Navigation/>
            <Topics/>

          </b-col>

        </b-row>
      </b-container>
      <Footer/>
    </div>

  </div>
</template>

<script>
  import jumbotron from './jumbotron'
  import navbar from '../../parts/navbar'
  import sideNav from '../../parts/sidenav'
  import mainBody from '../../parts/main'
  import Navigation from './Navigation'
  import Topics from './Topics'
  import Footer from '../../parts/footer'

  export default {
    name: 'HelloWorld',
    components: {
      jumbotron,
      sideNav,
      mainBody,
      navbar,
      Footer,
      Navigation,
      Topics
    },
    data() {
      return {
      }
    },
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>


</style>
