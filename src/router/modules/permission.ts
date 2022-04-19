import { RouteRecordRaw, RouterView } from 'vue-router'
const route: RouteRecordRaw = {
  path: 'permission',
  component: RouterView,
  children: [
    {
      path: 'admin',
      name: 'permission-admin',
      component: () => import('@/views/permission/admin/Index.vue')
    },
    {
      path: 'role',
      name: 'permission-role',
      component: () => import('@/views/permission/role/Index.vue')
    },
    {
      path: 'rule',
      name: 'permission-rule',
      component: () => import('@/views/permission/rule/Index.vue')
    }
  ]
}

export default route
