import Vue from 'vue'
import axios from 'axios'

import jQuery from 'jquery'

import App from './App.vue'
import router from './router'
import store from './store'

const $ = jQuery
window.$ = $

axios.defaults.baseURL = 'http://5e1848adeaa1d2001436e1f0.mockapi.io/users/users'
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
