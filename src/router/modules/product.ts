import { RouteRecordRaw, RouterView } from 'vue-router'

const route: RouteRecordRaw = {
  path: 'product',
  component: RouterView,
  meta: {
    title: '商品'
  },
  children: [
    {
      path: 'list',
      name: 'product_list',
      component: () => import('@/views/product/list/Index.vue'),
      meta: {
        title: '商品列表'
      }
    },
    {
      path: 'apply',
      name: 'product_apply',
      component: () => import('@/views/product/apply/Index.vue'),
      meta: {
        title: '商品添加'
      }
    },
    {
      path: 'attr',
      name: 'product_attr',
      component: () => import('@/views/product/attr/Index.vue'),
      meta: {
        title: '商品规格'
      }
    },
    {
      path: 'classify',
      name: 'product_classify',
      component: () => import('@/views/product/classify/Index.vue'),
      meta: {
        title: '商品分类'
      }
    }
  ]
}
export default route
