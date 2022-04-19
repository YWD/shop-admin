import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'
import AppLayout from '@/layout/AppLayout.vue'
import productRoute from '@/router/modules/product'
import mediaRoute from '@/router/modules/media'
import orderRoute from '@/router/modules/order'
import permissionRoute from '@/router/modules/permission'
import NProgress from 'nprogress'
import 'nprogress/nprogress.css'

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    name: 'layout',
    component: AppLayout,
    children: [
      {
        path: '',
        name: 'home',
        component: () => import('../views/home/Index.vue'),
        meta: {
          title: '首页'
        }
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

router.beforeEach(() => {
  NProgress.start()
})

router.afterEach(() => {
  NProgress.done()
})

export default router
