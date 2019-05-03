import axios from 'axios';

const state = {
    dataArray:[],
    next:'',
    prev:'',
    pageNextFlag: false,
    pagePrevFlag: false,
    exactItemFlag:false,
    currentItem: {}
};

const mutations = {
    UPDATE_ARRAY(state, payload){
        axios.get(payload, {
            header: 'Access-Control-Allow-Origin: *'
        })
            .then(res =>{
                state.dataArray = res.data.results;
                state.next = res.data.next;
                state.prev = res.data.previous;
            })
            .catch(error => console.log(error))
    },
    CHECK_FLAG(state){
        if(state.next != null){
            state.pageNextFlag = true;
        }else{
            state.pageNextFlag = false;
        }
        if(state.prev != null){
            state.pagePrevFlag = true;
        }else{
            state.pagePrevFlag = false;
        }
    },
    SHOW_EXACT_ITEM(state, payload){
        axios.get(payload)
            .then(res =>{
                state.currentItem = res.data;
                state.exactItemFlag = true;
            })
            .catch(error => console.log(error))
    },
    RETURN_TO_PAGES(state){
        state.exactItemFlag = false;
    }
};

const actions = {
    getDataArray({commit}, data){
        new Promise((resolve, reject) => {
            commit('UPDATE_ARRAY', data);
        })

    },
    checkflagAndDate({dispatch, commit}, data){
        return dispatch('getDataArray', data).then(() => {
            setTimeout(() => {
                commit('CHECK_FLAG');
            }, 1000);

        })
    },
    showExactItem({commit}, url){
        commit('SHOW_EXACT_ITEM', url);
    },
    returnToPages({commit}){
        commit('RETURN_TO_PAGES');
    }
};

const getters = {
    dataArray: state => {
        // console.log(state.dataArray);
        return state.dataArray;
    },
    nextPage: state => {
        return state.next;
    },
    prevPage: state => {
        return state.prev;
    },
    pageNextFlag: state => {
        return state.pageNextFlag;
    },
    pagePrevFlag: state => {
        return state.pagePrevFlag;
    },
    exactItemFlag: state => {
        return state.exactItemFlag;
    },
    currentItem: state => {
        return state.currentItem;
    }
};

export default {
    state,
    actions,
    mutations,
    getters
};
