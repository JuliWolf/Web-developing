import Vue from 'vue'
import App from './App.vue'
import axios from 'axios'
import router from './router'
import store from './store'

axios.defaults.baseURL = 'https://axios-27787.firebaseio.com';
axios.defaults.headers.common['Authorization'] = 'ldkfjg';
axios.defaults.headers.get['Acceprs'] = 'dfh';

const reqInterceptor = axios.interceptors.request.use(config => {
  console.log('Request', config);
  return config
});
const responseInterceptor = axios.interceptors.response.use(res => {
  console.log('Response', res);
  return res
});

axios.interceptors.request.eject(reqInterceptor);//удаление interceptors
axios.interceptors.request.eject(responseInterceptor);

new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
});
