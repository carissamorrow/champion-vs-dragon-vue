import Vue from 'vue'
import Router from 'vue-router'
// @ts-ignore
import Game from './views/Game.vue'
// @ts-ignore
import Home from './views/Home.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/Game',
      name: 'Game',
      component: Game
    }
  ]
})
