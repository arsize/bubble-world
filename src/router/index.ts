import { createRouter, createWebHistory } from 'vue-router'
import Home from '@/views/home'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
    },
    {
      path: '/login',
      name: 'login',
      component: () => import('@/views/login'),
    },
  ],
})

export default router
