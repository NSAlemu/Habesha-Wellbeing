<template>
<div id="app" style="margin-top:100px; width:100%">
  <NavBar />
  <div style="margin-top:50px">
  </div>
  <b-container>
    <b-row>
      <b-col cols="8">
        <h2>Post</h2>
      </b-col>
    </b-row>
    <hr>
    <b-col cols="12" lg="8">
      <b-form v-if="show">

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


        <b-button type="submit"  v-on:click="showMsgBoxOne" name="save" variant="primary">Submit</b-button>

      </b-form>
    </b-col>

    <b-row>
      <b-col>
        <hr>
        <h3>Preview</h3>
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


export default {
  name: 'app',
  components: {
    NavBar,
    mainBody
  },
  data() {
    return {
      form: {
        email: '',
        name: '',
        food: null,
        checked: []
      },
      foods: [{
        text: 'Select One',
        value: null
      }, 'Carrots', 'Beans', 'Tomatoes', 'Corn'],
      show: true,
      email: '',
      name: '',
      food: null,
      checked: [],
      postBody:{
        title: '',
        author: '',
        post: "<p>Write the post content here. </br> </br></p>",
        showAuthor: "not_accepted"
      },
      editor: ClassicEditor,
      newData: '',
      boxOne:'',
      editorConfig: {
        // The configuration of the editor.
      }
    }
  },
  methods: {
    showMsgBoxOne() {
       this.boxOne = ''
       this.$bvModal.msgBoxConfirm('Are you sure?')
         .then(value => {
           if(value){
             this.postNow();
           }
         })
         .catch(err => {
           // An error occurred
         })
     },
    postNow: function() {
      console.log(this.editorData);
      window.open("https://www.google.com", "_blank");
      // axios.post('http://localhost:3000/api/posts', {
      //   title: this.postBody.title,
      //   author: this.postBody.author,
      //   post: this.postBody.post
      // });
    }
  }
}
</script>
