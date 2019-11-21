<template>
<b-col cols="12" lg="9">

  <div class="blog-post">
    <h1 class="blog-post-title">{{postBody.title}}</h1>
    <p v-if="postBody.showAuthor !== 'not_accepted'" class="blog-post-meta">{{postBody.createdAt}} by {{postBody.author}}</p>

    <div v-html="postBody.post">

    </div>
  </div>


</b-col><!-- /.blog-main -->
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    postBody: Object
  },
  data() {
    return {}
  }
}
</script>
