import Vue from 'vue'
import Router from 'vue-router'

import Home from './Home.vue'
import User from './User.vue'
import Article from './Article.vue'
import Stack from './Stack.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [{
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/article/:uid',
      name: 'Article',
      component: Article
    },
    {
      path: '/user/:id',
      name: 'User',
      component: User
    },
    {
      path: '/goods',
      name: 'Goods',
      component: Home
    },
    {
      path: '/stack/:id',
      name: 'Stack',
      component: Stack
    }
  ]
})
