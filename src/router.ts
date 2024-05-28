import { createRouter, createWebHistory, type RouteRecordRaw } from 'vue-router'
import HomePage from '@/pages/HomePage.vue'

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    component: HomePage
  },
  {
    path: '/pricing',
    component: () => import('@/pages/PricingPage.vue')
  },
  {
    path: '/contact',
    component: () => import('@/pages/ContactPage.vue')
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes: routes
})

export default router
