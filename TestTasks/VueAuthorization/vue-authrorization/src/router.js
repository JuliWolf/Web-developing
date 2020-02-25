import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'adminList',
      component: () => import('./components/clients/AdminsList.vue'),
      meta: {
        guest: true
      }
    },
    {
      path: '/logIn',
      name: 'logIn',
      component: () => import('./components/clients/LogIn.vue'),
      meta: {
        guest: true
      }
    },
    {
      path: '/signUp',
      name: 'signUp',
      component: () => import('./components/clients/SignUp.vue'),
      meta: {
        guest: true
      }
    },
    {
      path: '/home',
      name: 'home',
      redirect: '/'
    }
  ]
})
