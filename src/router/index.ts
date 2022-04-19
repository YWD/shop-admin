import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'
import AppLayout from '@/layout/AppLayout.vue'
import productRoute from '@/router/modules/product'
import mediaRoute from '@/router/modules/media'
import orderRoute from '@/router/modules/order'
import permissionRoute from '@/router/modules/permission'
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
      },
      productRoute,
      orderRoute,
      mediaRoute,
      permissionRoute
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
