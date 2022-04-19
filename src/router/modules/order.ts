import { RouteRecordRaw, RouterView } from 'vue-router'

const route: RouteRecordRaw = {
  path: 'order',
  component: RouterView,
  children: [
    {
      path: 'list',
      name: 'order_list',
      component: () => import('@/views/order/list/Index.vue')
    },
    {
      path: 'offline',
      name: 'order_offline',
      component: () => import('@/views/order/offline/Index.vue')
    }
  ]
}

export default route
