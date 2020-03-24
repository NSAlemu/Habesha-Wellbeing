/* eslint-disable */
<template>
  <!-- Side Nav Bar -->

  <b-col cols="12" lg="3">
    <!-- <div style="margin-top:150px"> -->


    <div role="tablist">
      <b-card no-body class="noborder mb-1" v-for="content, i in posts">
        <b-card-header header-tag="header" class="p-1 acc" role="tab">
          <b-button class="acc-header noborder" block href="#" squared v-b-toggle="'accordion-' + i" variant="info">{{
            content.header }}
          </b-button>
        </b-card-header>
        <b-collapse v-bind:id="'accordion-' + i" visible accordion="my-accordion" role="tabpanel">

          <div class="subheader-container" v-for="subHeader, j in content.subheaders">
            <b-button class="acc-subheader noborder" block href="#" squared variant="info">{{ subHeader[0] }}</b-button>
          </div>
        </b-collapse>
        <hr v-if="(i+1)!== posts.length">
      </b-card>
      <div style="margin-top:50px">

      </div>
    </div>
  </b-col><!-- /.sidebar -->
</template>

<script>
  import axios from 'axios';
  import SidenavService from '../../SidenavService'

  export default {
    name: 'HelloWorld',
    data() {
      return {
        // 'title' is for the header. The area that you can see.
        // 'description' is for the content. It will show after you expand an accordion menu
        // 'active' is for the flag, if the content is shown or not.
        posts: [],
        error: '',
        text: ''
      }
    },
    async created() {
      try {
        this.posts = await SidenavService.getPost();
      } catch (err) {
        this.error = err.message;
      }
    },
    methods: {
      expand: function (e, i) {
        e.preventDefault();

        let el = this.$refs['accordion-body-' + i][0];

        if (this.contents[i].active === false) {
          this.contents[i].active = true;

          TweenLite.to(el, 1, {
            height: el.scrollHeight,
            ease: Elastic.easeOut.config(1, 0.3)
          });
        } else {
          this.contents[i].active = false;

          TweenLite.to(el, 0.5, {
            height: 0,
            ease: Bounce.easeOut
          });
        }
      }
    }
  }
</script>

<style scoped>
  hr {
    margin: 0;
    color: #E9F0FF;
  }

  .mb-1 {
    margin-bottom: 0 !important;
    border-radius: 0;
  }

  .card-header {
    padding: 0 !important;
    background-color: rgba(0, 0, 0, 0);
  }

  .acc-header {
    background-color: #535354;
  }

  .acc-subheader {
    background-color: #E9F0FF;
    color: black;
  }

  .subheader-container {
    padding-left: 20px;
    width: 100%;
  }

  .btn {
    padding: .375rem .75rem;
    text-align: left;
  }

  .noborder {
    border: none;
  }

  . .card-header .p-1 {
    border-bottom: 0;
  }
</style>
