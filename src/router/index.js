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
      path: '/map01',
      name: 'map01',
      component: () => import('@/views/map01.vue')
    }
  ]
})
