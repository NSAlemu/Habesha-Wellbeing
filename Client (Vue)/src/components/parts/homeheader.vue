/* eslint-disable */
<template>
<!-- Top Nav Bar -->
<!-- Fixed navbar -->
<div>
  <navbar />
  <jumbotron />
</div>
</template>

<script>
import navbar from './navbar'
import jumbotron from './jumbotron'

export default {

  components: {
    navbar,
    jumbotron
  },
  props: {

  },
  name: 'HelloWorld',
  data() {
    return {
      HW: 'Habesha Wellbeing',
      Jumbotron: 'jumbotron'
    }
  },
  methods: {
    changeTitle: function() {
      this.Jumbotron = 'not wellbeing';
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.navbarContainer {
  position: fixed;
}
.HWlogo{
  color: #58D53B;
  font-weight: bold;
}
.bg-info {
}
.jumbotron{
  background-color: none !important;

}
.homejumbotron{
  background-image: url("../../assets/jumbotron_bg.gif");
  background-color: rgba(0,0,0,0.2);


}
.homejumbotrongradient{
  background-color: #000000;
opacity: 0.5;
height: 100%
}
.fd-bg{
  /* Set a specified height, or the minimum height for the background image */
  min-height: 500px;

  /* Set background image to fixed (don't scroll along with the page) */
  background-attachment: fixed;

  /* Center the background image */
  background-position: center;

  /* Set the background image to no repeat */
  background-repeat: no-repeat;

  /* Scale the background image to be as large as possible */
  background-size: cover;
}
.btn-link{
  color: white;
}
</style>
