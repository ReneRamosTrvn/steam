import { createRouter, createWebHistory } from 'vue-router'
import AllGamesView from '../views/AllGamesView.vue'
import GameView from '../views/GameView.vue'
import Popular from '../views/PopularView.vue'
import Home from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/all-games',
      name: 'all-games',
      component: AllGamesView
    },
    {
      path: '/popular',
      name: 'popular',
      component: Popular
    },
    {
      path: '/game/:id',
      name: 'GameView',
      component: GameView
    },
  ]
})

export default router
