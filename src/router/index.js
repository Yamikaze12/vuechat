import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import Room from '../views/Room.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView,
  },
  {
    path: '/room',
    name: 'Room',
    component: Room,
  },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
