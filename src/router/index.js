import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/astres',
    name: 'astres',
    component: () => import(/* webpackChunkName: "about" */ '../views/AstresView.vue')
  },
  {
    path: '/:name',
    name: 'astre',
    component: () => import(/* webpackChunkName: "about" */ '../views/AstreView.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
