import { createRouter, createWebHistory, type RouteRecordRaw } from 'vue-router'
import HomePage from '@/pages/HomePage.vue'

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    component: HomePage,
    meta: {
      title: '🧔‍♂️ Home - Alexey Popkov',
      description: 'Welcome to information stand about me',
      keywords: 'portfolio, vue, developer, software, software engineer'
    }
  },
  {
    path: '/pricing',
    component: () => import('@/pages/PricingPage.vue')
  },
  {
    path: '/contact',
    component: () => import('@/pages/ContactPage.vue'),
    meta: {
      title: '👋 Contact Me - Alexey Popkov',
      description: 'Contact if you wanna',
      keywords: 'contact, vue, developer, software, software engineer'
    }
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes: routes
})

export default router
