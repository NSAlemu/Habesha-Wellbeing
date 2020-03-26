// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
// jshint esversion: 6
import Vue from 'vue'
import Router from 'vue-router'
import Home from '../components/pages/HomePage/HomePage'
import Posts from '../components/pages/posts'
import AllPosts from '../components/pages/allPosts'
import AdminCreatePost from '../components/pages/adminCreatePost'
import AdminLogin from '../components/pages/adminLogin'
import Admin_Console from '../components/pages/adminConsole'
import Admin_All_Posts from '../components/pages/adminAllPosts'
import Admin_Edit from '../components/pages/adminEditPost'

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
      meta: { title: 'Admin Login'}
    },
    {
      path: '/admin_console',
      name: 'Admin Console',
      component: Admin_Console,
      meta: { title: 'Admin Console' }
    },
    {
      path: '/admin_edit/:PostID?',
      name: 'Edit Post',
      component: Admin_Edit,
      meta: { title: 'Edit Post'  }
    },
    {
      path: '/admin_all_posts/',
      name: 'Edit Post',
      component: Admin_All_Posts,
      meta: { title: 'All Posts' }
    }
  ]
});
const DEFAULT_TITLE = 'Habesha Wellbeing';
const DEFAULT_ICON = "../assets/logo";
vueRouter.afterEach((to, from) => {
    document.title = to.meta.title || DEFAULT_TITLE;
  let link = document.querySelector("link[rel*='icon']") || document.createElement('link');
  link.type = 'image/x-icon';
  link.rel = 'shortcut icon';
  link.href = '../assets/logo';
  document.getElementsByTagName('head')[0].appendChild(link);
});

export default vueRouter;
