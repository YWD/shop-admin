import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { createPinia } from 'pinia'
import './styles/index.scss'
import elementPlus from '@/plugins/element-plus'
// import '@element-plus/icons-vue'

createApp(App)
  .use(router)
  .use(createPinia())
  .use(elementPlus)
  .mount('#app')
