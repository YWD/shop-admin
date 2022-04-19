import { RouteRecordRaw } from 'vue-router'
const route: RouteRecordRaw = {
  path: 'media',
  name: 'media',
  component: () => import('@/views/media/Index.vue'),
  meta: {
    title: '媒体'
  }
}
export default route
