/* eslint-disable */
<template>
<div id="app">
  <NavBar />
  <b-container class="mainBody">
    <b-row class="w-100 mb-4" align-h="center"><h1>Admin Console</h1></b-row>

    <b-col cols="12" lg="9">

      <b-card-group deck>
        <b-card
          img-src="https://images.unsplash.com/photo-1434030216411-0b793f4b4173?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"
          img-alt="Image"
          img-top
          tag="article"
          style="max-width: 20rem;"
          class="mb-2"
        >
          <b-card-text>
            Create a new post or edit, modify or delete an existing post.
          </b-card-text>

          <b-button href="/#/admin_all_posts" variant="primary">Open Posts Console</b-button>
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

    }
  }
}
</script>
