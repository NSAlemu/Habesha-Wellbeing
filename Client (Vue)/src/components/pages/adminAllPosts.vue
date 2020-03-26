/* eslint-disable */
<template>
  <div id="app">
    <NavBar/>
    <div class="mainBody">
      <b-container class="Footer-Space">

        <b-row>
          <sideNav/>
          <b-col cols="12" lg="9">
            <b-row align-h="end" class="m-4">
              <b-button class=""  href="/#/admin_create_post"  variant="primary">+ Create a new Post</b-button>
            </b-row>
            <b-row v-for="post, i in allPosts">
              <b-card no-body class="overflow-hidden w-100 mb-3" bg-variant="light" text-variant="black">
                <div  onmouseover="this.style.color='red'" onmouseout="this.style.color='black';" >
                  <b-row no-gutters>

                    <b-col md="2">
                      <b-card-img src="https://picsum.photos/400/400/?image=20" class="rounded-0"></b-card-img>
                    </b-col>
                    <b-col md="10">
                      <b-card-body v-bind:title="post.title">
                        <b-card-text  style="color: #63676B; ">
                        <p class="shortDescription">{{post.description}}</p>

                        </b-card-text>
                      </b-card-body>

                    </b-col>
                    <hr  class="w-100 m-0">
                    <b-row align-h="end" class="w-100">

                      <b-button class="m-1"v-bind:href="'/#/admin_edit/' + post._id" v-bind:originalPost="''+post._id" variant="warning">Edit</b-button>
                      <b-button class="m-1"v-bind:id="''+post._id" v-on:click="removePost"  variant="danger">Delete</b-button>
                    </b-row>

                  </b-row>
                </div>
              </b-card>
            </b-row>
          </b-col>
        </b-row>
      </b-container>
      <Footer/>
    </div>


  </div>
</template>

<script>
  import axios from 'axios';
  import NavBar from '../parts/navbar'
  import sideNav from '../parts/sidenav'
  import mainBody from '../parts/main'
  import Footer from '../parts/footer'
  import PostService from '../../PostService'

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
        allPosts: '',
        originalPost:'',
        deleteID:'',
      }
    },
    methods: {
      removePost: function(event) {
        this.deleteID = event.currentTarget.id;
        this.$bvModal.msgBoxConfirm('Are you sure you want to delete this post?', {okVariant: 'danger', okTitle: 'DELETE',})
          .then(value => {
            if (value) {
              this.deleteNow();
            }
          })
          .catch(err => {
            console.log('Adminallposts err' + err);
          })
         // returns 'foo'
      },
      deleteNow: async function () {
        try {
          console.log('Adminallposts data' + this.deleteID);

          let saved = await PostService.deletePost(this.deleteID);
          if (saved === 'true') {
            this.$bvModal.msgBoxOk('Post deleted')
          } else {
            this.$bvModal.msgBoxOk('There was an error deleting post', {
              okVariant: 'primary',
            })
          }
        } catch (err) {
          console.log(err);
          this.$bvModal.msgBoxOk('There was an error deleting post', {
            okVariant: 'secondary',
          })
        }
      }
    },
    async created() {
      try {
        this.allPosts = await PostService.getAllPost();
        console.log("log: " + this.allPosts);

      } catch (err) {
        this.error = err.message;
      }
    },

  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

  .shortDescription{
    line-height: normal;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 3;
  }
</style>
