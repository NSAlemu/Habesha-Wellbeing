/* eslint-disable */
<template>
<div id="app" style="margin-top:100px; width:100%">
  <NavBar />
  <b-container class="mainBody">
    <h1>Admin Dash</h1>
    <b-col cols="12" lg="9">

      <b-card-group deck>
        <b-card
          img-src="https://picsum.photos/600/300/?image=25"
          img-alt="Image"
          img-top
          tag="article"
          style="max-width: 20rem;"
          class="mb-2"
        >
          <b-card-text>
            Create a new post and share it to the world.
          </b-card-text>

          <b-button href="/#/admin_create_post" variant="primary">Create Posts</b-button>
        </b-card>

        <b-card
          img-src="https://picsum.photos/600/300/?image=25"
          img-alt="Image"
          img-top
          tag="article"
          style="max-width: 20rem;"
          class="mb-2"
        >
          <b-card-text>
            Edit or Delete a Post.
          </b-card-text>

          <b-button href="/#/" variant="primary">Edit Page</b-button>
        </b-card>
      </b-card-group>
    </b-col>
  </b-container>
</div>
</template>

<script>
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import axios from 'axios';
import mainBody from '../parts/main'
import NavBar from '../parts/navbar'
import PostService from '../../PostService'


export default {
  name: 'app',
  components: {
    NavBar,
    mainBody
  },
  data() {
    return {
      postBody: {
        title: '',
        author: '',
        post: "<p>Write the post content here. </br> </br></p>",
        showAuthor: "not_accepted"
      },
      editor: ClassicEditor,
      newData: '',
      boxOne: '',
      editorConfig: {
        // The configuration of the editor.
      }
    }
  },
  methods: {
    onSubmit(evt) {
      evt.preventDefault()
      this.boxOne = ''
      this.$bvModal.msgBoxConfirm('Are you sure?')
        .then(value => {
          if (value) {
            this.postNow();
          }
        })
        .catch(err => {
          // An error occurred
        })
    },
    showMsgBoxOne() {

    },
    postNow: async function() {

    }

  }
}
</script>
