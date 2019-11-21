<template>
<footer class="footer">
  <b-container>
    <b-row>
      <b-col>
        <b-navbar-brand class="ml-auto" href="#">
          <div class="HWlogo" >
            <img src="../../assets/logo_representation.svg" class="d-inline-block align-top" alt="Kitten" width="30px">
            Habesha Wellness
          </div>
        </b-navbar-brand>
      </b-col>
      <b-col v-for="column, i in columns">
        <h5 bd-text-purple-bright mb-1>{{column.header}}</h5>
        <ul class="list-unstyled" >
          <li class="footer-list" v-for="subHeader, j in column.subHeaders"><a class='footer-ref' href="#">{{subHeader}}</a></li>
        </ul>
      </b-col>
    </b-row>
  </b-container>

</footer>
</template>

<script>
export default {
  name: 'HelloWorld',
  data() {
    return {
      columns: [{
          header: 'Contact Us',
          subHeaders: [
            'Facebook',
            'Twitter',
            'Instagram'
          ]
        },
        {
          header: 'Ger Involved',
          subHeaders: [
            'Donate',
            'Volunteer',
            'support'
          ]
        },
        {
          header: 'Ger Involved',
          subHeaders: [
            'Donate',
            'Volunteer',
            'support'
          ]
        }
      ]
    }
  }
}
</script>
<style>
h5{
  color: #E9F0FF;
  margin-bottom: 15px;
}
.footer {
  background-color: #535354;
  padding: 40px;
  margin-top: 20px;
}
.footer-list{
  padding-top: 15px;
}
.footer-ref{
  color: #E9F0FF;
}
.HWlogo {
  color: #58D53B;
  font-weight: bold;

}
</style>
