<template>
<div id="app" style="margin-top:100px; width:100%">
  <NavBar />
  <b-container class="mainBody">
    <h1>Admin Dash</h1>

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
