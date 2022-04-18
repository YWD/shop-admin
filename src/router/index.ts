import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'
import AppLayout from '@/layout/AppLayout.vue'
const routes: RouteRecordRaw[] = [
  {
    path: '/',
    name: 'layout',
    component: AppLayout,
    children: [
      {
        path: '',
        name: 'home',
        component: () => import('../views/home/Index.vue')
      }
    ]
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('@/views/login/Index.vue')
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})
export default router
