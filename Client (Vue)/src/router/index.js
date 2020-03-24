// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
// jshint esversion: 6
import Vue from 'vue'
import Router from 'vue-router'
import Home from '../components/pages/homePage'
import Posts from '../components/pages/posts'
import AllPosts from '../components/pages/allPosts'
import AdminCreatePost from '../components/pages/adminCreatePost'
import AdminLogin from '../components/pages/adminLogin'
import Admin_Console from '../components/pages/adminConsole'

Vue.use(Router);
const vueRouter = new Router({
  routes:[
    {
      path: '/',
      name: 'Home',
      component: Home,
      meta: { title: 'Habesha wellbeing' }
    },
    {
      path: '/posts',
      name: 'All Posts',
      component: AllPosts,
      meta: { title: 'Posts' }
    },
    {
      path: '/posts/:PostID?',
      name: 'Posts',
      component: Posts,
      meta: { title: ':PostID?' }
    },
    {
      path: '/admin_create_post',
      name: 'Admin Create Post',
      component: AdminCreatePost,
      meta: { title: 'Create Post' }
    },
    {
      path: '/admin_login',
      name: 'Admin Login',
      component: AdminLogin,
      meta: { title: 'Admin Login' }
    },
    {
      path: '/admin_console',
      name: 'Admin Console',
      component: Admin_Console,
      meta: { title: 'Admin Console' }
    }
  ]
});
const DEFAULT_TITLE = 'Habesha Wellbeing';
vueRouter.afterEach((to, from) => {
    document.title = to.meta.title || DEFAULT_TITLE;
});

export default vueRouter;
