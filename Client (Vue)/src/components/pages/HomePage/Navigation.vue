<template>


    <b-card-group deck>
      <b-card
        img-src="https://image.flaticon.com/icons/svg/2125/2125457.svg"
        img-alt="Image"
        img-top
        img-height="200em"
        tag="article"
        style="max-width: 20rem;"
        class="mb-2"
      >
        <b-card-text>
          View all posts.
        </b-card-text>

        <b-button href="/#/posts" variant="primary">View All Posts</b-button>
      </b-card>

      <b-card
        img-src="https://image.flaticon.com/icons/svg/1685/1685562.svg"
        img-height="165em"
        img-top
        class="mb-2 pt-4"
        style="max-width: 20rem;"
      >
        <b-card-text class="mt-2">
          Edit website content such as posts.
        </b-card-text>

        <b-button href="/#/admin_console" variant="primary">Open Admin Console</b-button>
      </b-card>
    </b-card-group>

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

</style>
