import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('./views/About.vue')
    },
    {
      path: '/vehicles/:slug',
      name: 'Vehicle Detail',
      component: () => import('./views/VehicleDetails.vue')
    },
    {
      path: '/reservation',
      name: 'Reservation',
      component: () => import('./views/Reservation.vue')
    },
    {
      path: '/confirmation',
      name: 'Confirmation',
      component: () => import(/* webpackChunkName: "confirmation" */ './views/Confirmation.vue')
    }
  ]
})
