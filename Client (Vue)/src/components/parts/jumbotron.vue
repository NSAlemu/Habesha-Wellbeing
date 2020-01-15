<template>
<div class="homejumbotron fd-bg">
  <b-container>
    <b-row>
      <b-jumbotron class="jum" text-variant="light">
        <template v-slot:header>We are here to help</template>

        <template v-slot:lead>
          This is a simple hero unit, a simple jumbotron-style component for calling extra attention to
          featured content or information.
        </template>

        <hr class="my-4">

        <p>
          It uses utility classes for typography and spacing to space content out within the larger
          container.
        </p>
      </b-jumbotron>
    </b-row>

  </b-container>
</div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data() {
    return {}
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

.homejumbotron {
  background-image: url("../../assets/jumbotron_bg.gif");


}
.jum{
margin-top: 75px;
background-color: rgba(0,0,0,0);


}

.fd-bg {
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
</style>
