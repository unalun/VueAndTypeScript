import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    count: 0
  },
  mutations: {
    incrementCounter (state, payload){
      state.count += payload
    },
    decreaseCounter (state, payload){
      state.count -= payload
    }
  },
  actions: {
    incrementAction ({commit},payload){
      commit('incrementCounter',payload)
    },
    decreaseAction ({commit},payload){
      commit('decreaseCounter',payload)
    }
  },
  getters: {
    counter (state) {
      return state.count
    }
  },
  modules: {
  }
})
