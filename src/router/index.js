import { createRouter, createWebHashHistory } from 'vue-router';
import Auth from '../views/Auth';
import Dash from '../views/Dash';

const routes = [
  {
    path: '/',
    name: 'Auth',
    component: Auth
  },
  {
    path: '/dash/:id',
    name: 'Dash',
    component: Dash
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
