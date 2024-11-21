import { createWebHistory, createRouter } from 'vue-router'

import HomeView from './pages/Home.vue'
import UserView from './pages/User.vue'

const routes = [
  { path: '/', name: 'home', component: HomeView },
  {
    path: '/user/:id',
    name: 'user',
    component: UserView,
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
