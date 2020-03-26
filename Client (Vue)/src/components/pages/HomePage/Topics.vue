<template>
  <div style="margin-top:35px;">
    <h3 style="color: #63676B; ">Topics</h3>
    <div v-for="(post, i) in allPosts">
      <b-button class="w-100 text-decoration-none" v-if="i <3"
                variant="link" v-bind:href="'/#/posts/' + post._id"
                style=" background-color: rgba(0, 0, 0, 0); border: none; text-align: left; color: black;  vertical-align: top;">
        <div  onmouseover="this.style.color='red'" onmouseout="this.style.color='black';" >
          <!-- Stack the columns on mobile by making one full-width and the other half-width -->
          <b-row>
            <b-col md="2" style="padding-left: 0;">
              <b-card-img style="padding: 0" src="https://picsum.photos/400/400/?image=20"
                          class="rounded-2"></b-card-img>
            </b-col>
            <b-col md="10" style="padding: 0">
              <b-card-body none class="w-75" style="padding: 0; " v-bind:title="post.title">
                <b-card-text class="weakColor"><p class="shortDescription"> {{post.description}}</p>
                </b-card-text>
              </b-card-body>
            </b-col>

          </b-row>
        </div>
        <hr class="" style="margin: 5px 100px 5px 0;">
      </b-button>

    </div>

  </div>
</template>

<script>
  import PostService from "../../../PostService";

  export default {
    name: 'HelloWorld',
    data() {
      return {
        allPosts: ''
      }
    },
    async created() {

      try {
        this.allPosts = await PostService.getAllPost();
       this.allPosts.reverse();
      } catch (err) {
        this.error = err.message;
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .hover {
    background-color: grey;
  }
  .shortDescription{
    line-height: normal;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 3;
  }

</style>
