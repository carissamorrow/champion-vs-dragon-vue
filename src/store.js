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
    targets: {
      allChampions: [],
      allDragons: []
    }
  },
  mutations: {

  },
  actions: {

  }
})
