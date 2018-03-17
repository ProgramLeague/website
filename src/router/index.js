import Vue from 'vue'
import Router from 'vue-router'

import Home from './Home.vue'
import Article from './Article.vue'

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
      path: '/goods',
      name: "Goods",
      component: Home
    }
  ]
})
