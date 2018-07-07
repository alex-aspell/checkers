import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import Alex from '@/components/Alex'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/alex',
      name: 'Alex',
      component: Alex
    }
  ]
})
