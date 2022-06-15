import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import Room from '../views/Room.vue'
import { projectAuth } from '../config/firebase'

const requireAuth = (to, from, next) => {
  // ...
  let user = projectAuth.currentUser
  if(! user){
    next({name : 'home'})
  }
  else{
    next()
  }
}

const forbidAuth = (to, from, next) =>{
  let user = projectAuth.currentUser
  if (user) {
    next({ name: 'room' })
  } else {
    next()
  }
}

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView,
    beforeEnter: forbidAuth,
  },
  {
    path: '/room',
    name: 'Room',
    component: Room,
    beforeEnter: requireAuth,
  },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
