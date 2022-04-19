import { RouteRecordRaw, RouterView } from 'vue-router'
const route: RouteRecordRaw = {
  path: 'permission',
  component: RouterView,
  meta: {
    title: '权限'
  },
  children: [
    {
      path: 'admin',
      name: 'permission-admin',
      component: () => import('@/views/permission/admin/Index.vue'),
      meta: {
        title: '权限管理'
      }
    },
    {
      path: 'role',
      name: 'permission-role',
      component: () => import('@/views/permission/role/Index.vue'),
      meta: {
        title: '角色权限'
      }
    },
    {
      path: 'rule',
      name: 'permission-rule',
      component: () => import('@/views/permission/rule/Index.vue'),
      meta: {
        title: '权限角色'
      }
    }
  ]
}

export default route
