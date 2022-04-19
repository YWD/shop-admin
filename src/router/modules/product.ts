import { RouteRecordRaw, RouterView } from 'vue-router'

const route: RouteRecordRaw = {
  path: 'product',
  component: RouterView,
  children: [
    {
      path: 'list',
      name: 'product_list',
      component: () => import('@/views/product/list/Index.vue')
    },
    {
      path: 'apply',
      name: 'product_apply',
      component: () => import('@/views/product/apply/Index.vue')
    },
    {
      path: 'attr',
      name: 'product_attr',
      component: () => import('@/views/product/attr/Index.vue')
    },
    {
      path: 'classify',
      name: 'product_classify',
      component: () => import('@/views/product/classify/Index.vue')
    }
  ]
}
export default route
