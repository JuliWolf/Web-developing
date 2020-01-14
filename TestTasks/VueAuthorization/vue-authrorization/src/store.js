import Vue from 'vue'
import Vuex from 'vuex'

import main from './store/main.js'
import logIn from './store/logIn.js'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    main,
    logIn
  }
})
