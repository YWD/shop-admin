import { RouteRecordRaw } from 'vue-router'
const route: RouteRecordRaw = {
  path: 'media',
  name: 'media',
  component: () => import('@/views/media/Index.vue')
}
export default route
