import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Bobo from '@/components/Bobo'
import tag from '@/components/tag'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/bobo',
      component: Bobo
    },
    {
      path: '/tag',
      component: tag

    }
  ]
})
