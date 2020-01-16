import axios from 'axios'
const axiosUrl = 'http://5e1848adeaa1d2001436e1f0.mockapi.io/users/writers';
import router from '../../router/index'

const state = {
    authStatus: false,
    authUserInfo: {},
    logInErrorMessage: ''
};

const mutations = {
    AUTH_USER (state, user) {
        state.authStatus = true;
        state.authUserInfo = user;
        localStorage.setItem('authUser', true);
    },
    UPDATE_ERROR_MESSAGE (state, message) {
        state.logInErrorMessage = message;
    },
    LOG_OUT (state) {
        state.authStatus = false;
        state.authUserInfo = {};
        localStorage.removeItem('authUser');
    }
};

const actions = {
    logIn ( { commit, dispatch }, data) {
        dispatch('checkUserExists', data).then((res) => {
            if(res !== undefined) {
                commit('AUTH_USER', res);
                commit('UPDATE_ERROR_MESSAGE', '');
                router.replace('/')
            } else {
                commit('UPDATE_ERROR_MESSAGE', 'Wrong name or password')
            }
        });
    },
    checkUserExists ({ commit }, data) {
        return new Promise((resolve, reject) => {
            let user = '';
            axios.get(axiosUrl).then((res) => {
                user = res.data.find(user => user.username === data.username);
                if (user !== undefined) {
                    if (user.password === data.password) {
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
                axios.post(axiosUrl, data).then((res) => {
                    commit('AUTH_USER', res.data);
                    commit('UPDATE_ERROR_MESSAGE', '');
                    router.replace('/')
                })
            } else {
                commit('UPDATE_ERROR_MESSAGE', 'User exists')
            }
        })
    }
};

const getters = {
    authStatus: state => {
        return state.authStatus
    },
    logInErrorMessage: state => {
        return state.logInErrorMessage
    },
    authUserInfo: state => {
        return state.authUserInfo
    }
};

export default {
    state,
    actions,
    mutations,
    getters
}
