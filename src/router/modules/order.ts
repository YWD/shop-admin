import { RouteRecordRaw, RouterView } from 'vue-router'

const route: RouteRecordRaw = {
  path: 'order',
  component: RouterView,
  meta: {
    title: '订单'
  },
  children: [
    {
      path: 'list',
      name: 'order_list',
      component: () => import('@/views/order/list/Index.vue'),
      meta: {
        title: '订单列表'
      }
    },
    {
      path: 'offline',
      name: 'order_offline',
      component: () => import('@/views/order/offline/Index.vue'),
      meta: {
        title: '订单离线'
      }
    }
  ]
}

export default route
