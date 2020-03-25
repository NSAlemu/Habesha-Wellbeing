/* eslint-disable */
<template>
  <div id="app">
    <NavBar/>
    <div class="mainBody">
      <b-container class="Footer-Space">
        <b-row>
          <sideNav/>
          <b-col cols="12" lg="9">

            <b-row v-for="post, i in allPosts">
              <b-card class="w-100 .p-3" bg-variant="light" text-variant="black" v-bind:title="post.title">
                <b-card-text>
                  {{post.description}}
                </b-card-text>
                <b-button v-bind:href="'/#/posts/' + post._id" variant="warning">Edit</b-button>
                <b-button v-bind:id="''+post._id" v-on:click="removePost" variant="danger">Delete</b-button>
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
        deleteID:'',
      }
    },
    methods: {
      removePost: function(event) {
        this.deleteID = event.currentTarget.id;
        this.$bvModal.msgBoxConfirm('Are you sure?')
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


</style>
