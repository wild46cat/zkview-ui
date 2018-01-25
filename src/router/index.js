import Vue from 'vue'
import Router from 'vue-router'
import Tree from '@/components/Tree'
import Welcome from '@/components/Welcome'

Vue.use(Router)

export default new Router({
  routes: [
    {path: '/', redirect: '/welcome'},
    {
      path: '/welcome',
      name: 'welcome',
      component: Welcome
    }, {
      path: '/tree',
      name: 'tree',
      component: Tree
    }
  ]
})
