<template>
  <b-col cols="12" lg="9" style="min-height: 85%">

    <div class="blog-post">
      <h1 class="blog-post-title">{{postBody.title}}</h1>
      <p v-if="postBody.showAuthor !== 'not_accepted'" class="blog-post-meta"><span v-if="postBody.author !== ''"> Updated {{postBody.createdAt | moment("MMM D, YYYY") }} by {{postBody.author}}</span>
      </p>

      <div v-html="postBody.post">

      </div>
    </div>


  </b-col><!-- /.blog-main -->
</template>

<script>
  import PostService from "../../PostService";

  export default {
    name: 'HelloWorld',
    props: {
      postBody: Object
    },

    data() {
      return {}
    },
    mounted() {

    },

  }

</script>
