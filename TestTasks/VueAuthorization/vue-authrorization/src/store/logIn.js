import axios from 'axios'
import router from '../router'

const state = {
  authStatus: false,
  authUserInfo: {},
  errorMessage: '',
  foundUserData: ''
}

const mutations = {
  AUTH_USER (state, user) {
    state.authStatus = true
    state.authUserInfo = user
  },
  UPDATE_ERROR_MESSAGE (state, message) {
    state.errorMessage = message
  },
  UPDATE_FOUND_USER_DATA (state, data) {
    state.foundUserData = data
  },
  LOG_OUT (state) {
    state.authStatus = false
    state.authUserInfo = {}
  }
}

const actions = {
  logIn ({ commit, dispatch }, data) {
    dispatch('checkUserExists', data).then((res) => {
      if (res !== undefined) {
        commit('AUTH_USER', res)
        commit('UPDATE_ERROR_MESSAGE', '')
        router.push('home')
      } else {
        commit('UPDATE_ERROR_MESSAGE', 'Wrong name or password')
      }
    })
  },
  checkUserExists ({ commit }, data) {
    return new Promise((resolve, reject) => {
      let user = ''
      axios.get().then((res) => {
        user = res.data.find(user => user.name === data.name)
        console.log(user)
        if (user !== undefined) {
          if (user.Password === data.Password) {
            resolve(user)
          } else {
            resolve(undefined)
          }
        } else {
          resolve(undefined)
        }
      })
    })
  },
  logOut ({ commit }) {
    commit('LOG_OUT')
  },
  createNewUser ({ commit, dispatch }, data) {
    dispatch('checkUserExists', data).then((res) => {
      if (res === undefined) {
        axios.post('http://5e1848adeaa1d2001436e1f0.mockapi.io/users/users/', data).then((res) => {
          commit('AUTH_USER', res.data)
          commit('UPDATE_ERROR_MESSAGE', '')
          router.push('home')
        })
      } else {
        commit('UPDATE_ERROR_MESSAGE', 'User exists')
      }
    })
  }
}

const getters = {
  authStatus: state => {
    return state.authStatus
  },
  errorMessage: state => {
    return state.errorMessage
  },
  authUserInfo: state => {
    return state.authUserInfo
  }
}

export default {
  state,
  actions,
  mutations,
  getters
}
