import Vuex from 'vuex'

const store = new Vuex.Store({
    state: {
        title: 1
    },
    getters: {
        title: state => {
            return state.title
        }
    },
    mutations: {
        increment(state){
            state.title++
        }
    }
})

export default store