// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
// jshint esversion: 6
import Vue from 'vue'
import Router from 'vue-router'
import Home from '../components/pages/homePage'
import Posts from '../components/pages/posts'
import AllPosts from '../components/pages/allPosts'
import Admin from '../components/pages/admin'
import AdminLogin from '../components/pages/adminLogin'

Vue.use(Router)

export default new Router({
  routes:[
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/posts',
      name: 'Posts',
      component: AllPosts
    },
    {
      path: '/posts/:PostID?',
      name: 'Posts',
      component: Posts
    },
    {
      path: '/admin',
      name: 'Admin Edit',
      component: Admin
    },
    {
      path: '/admin_login',
      name: 'Admin Login',
      component: AdminLogin
    }
  ]
})
