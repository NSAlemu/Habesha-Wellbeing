<template>
<div id="app" style="margin-top:100px; width:100%">
  <NavBar />
  <b-container class="mainBody">
    <b-row>
      <b-col cols="8">
        <h2>Post</h2>
      </b-col>
    </b-row>
    <hr>
    <b-col cols="12" lg="8">
      <b-form @submit="onSubmit">

        <b-form-group id="input-group-1" label="Title" label-for="input-1">
          <b-form-input id="input-2" v-model="postBody.title" required placeholder="Header of Post to be displayed"></b-form-input>
        </b-form-group>

        <b-form-group id="input-group-2" label="Author" label-for="input-2">
          <b-form-input id="input-2" :disabled="postBody.showAuthor === 'not_accepted'" v-model="postBody.author" required placeholder="Writer of post"></b-form-input>
          <b-form-checkbox id="checkbox-1" v-model="postBody.showAuthor" name="checkbox-1" value="accepted" unchecked-value="not_accepted">
            Show Author and Date Written on post
          </b-form-checkbox>
        </b-form-group>
        <b-form-group id="input-group-3" label="Content" label-for="input-3">
          <ckeditor :editor="editor" v-model="postBody.post" :config="editorConfig"></ckeditor>
        </b-form-group>


        <b-button type="submit" name="save" variant="primary">Submit</b-button>

      </b-form>
    </b-col>

    <b-row>
      <b-col>
        <hr>
        <h2>Preview</h2>
        <hr>
      </b-col>
    </b-row>
    <b-row>
      <mainBody v-bind:postBody="postBody" />
    </b-row>
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
      console.log(this.editorData);
      if (this.postBody.author === '') {
        this.postBody.showAuthor = "not_accepted"
      }
      var newPost = {
        title: this.postBody.title,
        author: this.postBody.author,
        showAuthor: this.postBody.showAuthor,
        post: this.postBody.post
      }
      var saved = ""
      try {
        saved = await PostService.savePost(newPost);
        if (saved === 'true') {
          this.$bvModal.msgBoxOk('Post saved')
        } else {
          this.$bvModal.msgBoxOk('There was an error saving post', {
            okVariant: 'danger',
          })
        }
      } catch (err) {
        console.log(err);
        this.$bvModal.msgBoxOk('There was an error saving post', {
          okVariant: 'danger',
        })
      }
    }

  }
}
</script>
