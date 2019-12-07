import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '../views/Login.vue'
import Pedidos from '../views/Pedidos.vue'
import Cocina from '@/views/Cocina.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'login',
    component: Login
  },
  {
    path: '/cocina',
    name: 'cocina',
    component: Cocina
  },
  {
    path: '/pedidos',
    name: 'pedidos',
    component: Pedidos
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
