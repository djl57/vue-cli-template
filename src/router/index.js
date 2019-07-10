import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: '',
      component: () => import('@/views/home.vue')
    },
    {
      path: '/svg',
      name: 'svg',
      component: () => import('@/views/svg.vue')
    },
    {
      path: '/flexible',
      name: 'flexible',
      component: () => import('@/views/flexible.vue')
    },
    {
      path: '/flexRem',
      name: 'flexRem',
      component: () => import('@/views/flexRem.vue')
    }
  ]
})
