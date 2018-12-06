import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
import router from './router'

let dragonapi = axios.create({
  baseURL: 'https://dragon-duel.herokuapp.com',
  withCredentials: true,

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
          commit('allDragons', data)
        })
    },
    getAllDragons({ commit }) {
      dragonapi.get('All Dragons')
        .then(res => {
          commit('allDragons')
        })
        .catch(err => {
          alert(err)
        })
    }
  }
})
