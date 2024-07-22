import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/character',
      name: 'character',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/CharacterList.vue')
    },
    {
      path: '/location',
      name: 'location',
      component: () => import('../views/LocationList.vue')
    },
    {
      path: '/episode',
      name: 'episode',
      component: () => import('../views/EpisodeList.vue')
    }
  ]
})

export default router
