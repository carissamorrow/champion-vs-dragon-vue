import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
import router from './router'

let dragonapi = axios.create({
  baseURL: 'https://dragon-duel.herokuapp.com/api/dragons',

})

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    targets: {
      champions: [],
      dragons: []
    }
  },
  mutations: {

  },
  actions: {

  }
})
