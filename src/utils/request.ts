import axios from 'axios'
import { ElMessage, ElMessageBox } from 'element-plus'
import { useMainStore } from '@/store/main'
import router from '@/router'

const request = axios.create({
  // baseURL: import.meta.env.VITE_API_BASE_URL
})

// 请求拦截器
request.interceptors.request.use(function (config) {
  console.log('request.interceptors.request.use')
  // 统一设置用户token等
  const mainStore = useMainStore()
  if (config.headers && mainStore.user) {
    config.headers.Authorization = 'Bearer ' + mainStore.user.token
  }
  return config
}, function (error) {
  // Do something with request error
  return Promise.reject(error)
})

let isRefreshing = false
// 响应拦截器
request.interceptors.response.use(function (response) {
  const status = response.data.status
  if (!status || status === 200) return response
  const rejectRsp = Promise.reject(response)
  // token 失效
  if (status === 410000) {
    if (isRefreshing) return rejectRsp
    isRefreshing = true
    ElMessageBox.confirm('取消继续浏览页面或确认重新登录', '登录失效')
      .then(async () => {
        await router.replace({
          name: 'login',
          query: {
            redirect: router.currentRoute.value.fullPath
          }
        })
        const mainStore = useMainStore()
        mainStore.setUser(null)
      })
      .finally(() => {
        isRefreshing = false
      })
    return rejectRsp
  }
  // 其他错误
  ElMessage.error(response.data.message || '请求失败，请重试')
  return rejectRsp
}, function (error) {
  // Any status codes that falls outside the range of 2xx cause this function to trigger
  // Do something with response error
  return Promise.reject(error)
})

const instance = {
  get<T = any> (url: string, params?: object, config?: object) {
    return request({
      method: 'GET',
      url: url,
      params: params,
      ...config
    }).then(rsp => (rsp.data.data || rsp.data) as T)
  },

  post<T = any> (url: string, data: any, config?: object) {
    return request({
      method: 'POST',
      url,
      data,
      ...config
    }).then(rsp => rsp.data.data as T)
  }
}

export default instance
