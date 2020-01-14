import axios from 'axios'

const state = {
  dataArray: [],
  dataPerPage: [],
  currentUser: {},
  itemsPerPage: 10,
  pageNumber: 0,
  pageCount: 1,
  userToChange: {},
  changeModalFlag: false
}

const mutations = {
  UPDATE_ARRAY (state, data) {
    state.dataArray = data
  },
  UPDATE_DATA_PER_PAGE (state, data) {
    state.dataPerPage = state.dataArray.slice(data.start, data.end)
  },
  GET_NEXT_PAGE (state) {
    state.pageNumber++
  },
  GET_PREV_PAGE (state) {
    state.pageNumber--
  },
  COUNT_PAGES (state, data) {
    state.pageCount = Math.ceil(data.l / data.s)
  },
  CHOOSE_USER (state, res) {
    state.userToChange = res.data
    state.changeModalFlag = true
  },
  CHANGE_MODAL_FLAG (state) {
    state.changeModalFlag = false
  }
}

const actions = {
  getData ({ commit, dispatch }) {
    axios.get()
      .then(res => {
        commit('UPDATE_ARRAY', res.data)
      })
      .catch(error => console.log(error))
      .then(() => {
        dispatch('pageCount')
      })
      .then(() => {
        dispatch('getDataForPage')
      })
  },
  pageCount ({ commit }) {
    return new Promise((resolve, reject) => {
      let l = state.dataArray.length
      let s = state.itemsPerPage
      commit('COUNT_PAGES', { l: l, s: s })
      resolve()
    })
  },
  getDataForPage ({ commit }) {
    return new Promise((resolve, reject) => {
      const start = state.pageNumber * state.itemsPerPage
      const end = start + state.itemsPerPage
      commit('UPDATE_DATA_PER_PAGE', { start: start, end: end })
    })
  },
  deleteUser ({ dispatch, commit }, data) {
    axios.delete('http://5e1848adeaa1d2001436e1f0.mockapi.io/users/users/' + data).then(() => {
      dispatch('getData')
    })
  },
  chooseUser ({ commit }, data) {
    axios.get('http://5e1848adeaa1d2001436e1f0.mockapi.io/users/users/' + data).then((res) => {
      commit('CHOOSE_USER', res)
    }).then(() => {
      window.jQuery('.changeUserDialog').modal('show')
    })
  },
  getNextPageData ({ commit, dispatch }) {
    dispatch('getNextPage').then(() => {
      dispatch('getDataForPage')
    })
  },
  getNextPage ({ commit }) {
    return new Promise((resolve, reject) => {
      commit('GET_NEXT_PAGE')
      resolve()
    })
  },
  getPrevPageData ({ commit, dispatch }) {
    dispatch('getPrevPage').then(() => {
      dispatch('getDataForPage')
    })
  },
  getPrevPage ({ commit }) {
    return new Promise((resolve, reject) => {
      commit('GET_PREV_PAGE')
      resolve()
    })
  },
  changeModalFlag ({ commit }) {
    commit('CHANGE_MODAL_FLAG')
  },
  updateUserInfo ({ commit, dispatch }, data) {
    axios.put('http://5e1848adeaa1d2001436e1f0.mockapi.io/users/users/' + data.id, data.data).then(() => {
      dispatch('getData')
    })
  }
}

const getters = {
  dataPerPage: state => {
    return state.dataPerPage
  },
  pageNumber: state => {
    return state.pageNumber
  },
  pageCount: state => {
    return state.pageCount
  },
  userToChange: state => {
    return state.userToChange
  },
  getChangeModalFlag: state => {
    return state.changeModalFlag
  }
}

export default {
  state,
  actions,
  mutations,
  getters
}
