/* eslint-disable */
<template>
  <div id="app" >
    <NavBar/>
    <b-container class="mainBody">
      <b-row>
        <b-col cols="8">
          <b-row>

            <b-form-group class="mb-5" label="Toggle between Edit mode and Preview mode">
              <b-form-radio-group
                id="btn-radios-2"
                v-model="editOptionsSelected"
                :options="editOptions"
                buttons
                button-variant="outline-primary"
                size="lg"
                name="radio-btn-outline"
              ></b-form-radio-group>
            </b-form-group>
          </b-row>
        </b-col>
      </b-row>

      <b-col cols="12" lg="8">
        <b-form v-if="editOptionsSelected === 'editMode'" @submit="onSubmit">
          <h2>Edit Post</h2>
          <hr>
          <b-form-group id="input-group-1" label="Title" label-for="input-1">
            <b-form-input id="input-2" v-model="postBody.title" required
                          placeholder="Header of Post to be displayed"></b-form-input>
          </b-form-group>

          <b-form-group id="input-group-2" label="Author" label-for="input-2">
            <b-form-input id="input-2" :disabled="postBody.showAuthor === 'not_accepted'" v-model="postBody.author"
                          required placeholder="Writer of post"></b-form-input>
            <b-form-checkbox id="checkbox-1" v-model="postBody.showAuthor" name="checkbox-1" value="accepted"
                             unchecked-value="not_accepted">
              Show Author and Date Written on post
            </b-form-checkbox>
          </b-form-group>
          <b-form-group id="input-group-3" label="Description" label-for="input-3">
            <b-form-textarea
              id="shortDesc" v-model="postBody.description" required
              placeholder="Let readers know what your post is about"
              rows="2"
              max-rows="4"
            ></b-form-textarea>

          </b-form-group>
          <b-form-group id="input-group-4" label="Content" label-for="input-3">
            <ckeditor :disabled="editOptionsSelected !== 'editMode'" :editor="editor" v-model="tempPost"
                      v-on:input="foo" :config="editorConfig"></ckeditor>
          </b-form-group>


          <b-button type="submit" name="save" variant="primary">Submit</b-button>

        </b-form>
      </b-col>

      <div v-if="editOptionsSelected === 'previewMode'" >
          <h2>Post Preview</h2>
          <hr>

          <mainBody v-bind:postBody="postBody"/>

      </div>




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
      mainBody,

    },
    data() {
      return {
        tempPost: '<p>Write the post content here. </br> </br></p>',
        postBody: {
          title: '',
          author: '',
          description: "",
          post: "<p>Write the post content here. </br> </br></p>",
          showAuthor: "not_accepted"
        },
        editOptionsSelected: 'editMode',
        editOptions: [
          {text: 'Edit Mode', value: 'editMode'},
          {text: 'Preview Mode', value: 'previewMode'}
        ],
        editor: ClassicEditor,
        newData: '',
        boxOne: '',
        editorConfig: {
          // The configuration of the editor.
        }
      }
    },
    beforeMount() {
      ClassicEditor
        .create(document.querySelector('#editor'), {
          toolbar: ['imageUpload'],

          // Configure the endpoint. See the "Configuration" section above.

        })
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
      foo() {
          console.log("**************" + "im innnnnnnn" + this.tempPost);
          let doc = new DOMParser().parseFromString(this.tempPost, 'text/html').body;

          doc.querySelectorAll('oembed[url]').forEach(element => {
            // Create the <a href="..." class="embedly-card"></a> element that Embedly uses
            // to discover the media.
            const anchor = document.createElement('a');
            anchor.setAttribute('href', element.getAttribute('url'));
            anchor.className = 'embedly-card';

            element.appendChild(anchor);
          });

          this.postBody.post = doc.innerHTML;
          console.log("**************" + doc.innerHTML);
      }
      ,
      showMsgBoxOne() {

      },
      postNow: async function () {
        console.log(this.editorData);
        if (this.postBody.author === '') {
          this.postBody.showAuthor = "not_accepted"
        }
        var newPost = {
          title: this.postBody.title,
          author: this.postBody.author,
          description: this.postBody.description,
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
