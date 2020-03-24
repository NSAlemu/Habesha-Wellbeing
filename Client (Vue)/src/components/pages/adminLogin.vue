/* eslint-disable */
<template>
<div>
  <navbar />


  <b-container class="mainBody">
    <b-row>
      <b-form @submit="onSubmit" @reset="onReset" v-if="show">
        <b-form-group id="input-group-1" label="Username:" label-for="input-1">
          <b-form-input id="username" v-model="form.username" type="username" required placeholder="Enter username"></b-form-input>
        </b-form-group>

        <b-form-group id="input-group-2" label="Password:" label-for="input-2">
          <b-input type="password" id="text-password" aria-describedby="password-help-block" v-model="form.password" required placeholder="Enter Password"></b-input>
        </b-form-group>


        <b-button type="submit" variant="primary">Login</b-button>
      </b-form>
    </b-row>
    <b-row>
      <h3>output: {{output}}</h3>
    </b-row>

  </b-container>

</div>
</template>

<script>
import navbar from '../parts/navbar'

export default {
  name: 'HelloWorld',
  data() {
    return {
      form: {
        username: '',
        password: '',
        food: null,
        checked: []
      },
      output:'',
      show: true
    }
  },
  components: {
    navbar
  },
  methods: {
    postNow: function() {
      console.log(this.name);

    }

    // login: (e) => {
    //   e.preventDefault()
    //   let email = "user@email.com"
    //   let password = "password"
    //   let login = () => {
    //     let data = {
    //       email: email,
    //       password: password
    //     }
    //     axios.post("/api/login", data)
    //       .then((response) => {
    //         console.log("Logged in")
    //         router.push("/dashboard")
    //       })
    //       .catch((errors) => {
    //         console.log("Cannot login")
    //       })
    //   }
    //   login()
    // }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>


</style>
