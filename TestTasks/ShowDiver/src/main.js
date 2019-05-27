import Vue from 'vue'
import BootstrapVue from 'bootstrap-vue'
import JQuery from 'jquery'
import App from './App.vue'

let $ = JQuery;
window.$ = require('jquery');
window.JQuery = require('jquery');

Vue.use(BootstrapVue);

new Vue({
  el: '#app',
  render: h => h(App)
})
