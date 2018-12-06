import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
import router from './router'

let dragonapi = axios.create({
  baseURL: 'https://dragon-duel.herokuapp.com/api/dragons',
  withCredentials: true,
  timeout: 6000
})

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    allChampions: [],
    allDragons: [],
    champion: {},
    dragon: {}

  },
  mutations: {
    setActiveDragon(state, dragon) {
      state.dragon = dragon
    }
  },
  actions: {
    search({ commit, dispatch }, query) {
      dragonapi.get(query)
        .then(res => {
          let data = res.data.results
          commit('dragon', data)
        })
    },
    setActiveDragon({ commit, dispatch }, dragon) {
      commit('setActiveDragon', dragon)
    },

  }
})
