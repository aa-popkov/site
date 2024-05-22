import { createRouter, createWebHistory, type RouteRecordRaw } from 'vue-router'
import HomePage from '@/pages/HomePage.vue'
import PricingPage from '@/pages/PricingPage.vue'
import ContactPage from '@/pages/ContactPage.vue'

const routes:  RouteRecordRaw[] = [
  {
    path: '/',
    component: HomePage
  },
  {
    path: '/pricing',
    component: PricingPage,
  },
  {
    path: '/contact',
    component: ContactPage
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes: routes
})

export default router