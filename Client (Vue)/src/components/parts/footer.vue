/* eslint-disable */
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
          header: 'Get Involved',
          subHeaders: [
            'Donate',
            'Volunteer',
            'support'
          ]
        },
        {
          header: 'Need Help?',
          subHeaders: [
            'Hot Line',
            'Prevention',
            'Report Anonymously'
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
  position: absolute;
 bottom: 0;
 width: 100%;
  background-color: #535354;
  color: white;
  text-align: center;
  padding: 30px;
}
.footer-ref{
  color: #E9F0FF;
}
.HWlogo {
  color: #58D53B;
  font-weight: bold;

}
</style>
