<template>
<div id="app">
  <homeHeader />
  <div style="margin-top:50px">

  </div>
  <b-container>
    <b-row>
      <sideNav />

      <mainBody />
    </b-row>
  </b-container>
  <Footer />

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
