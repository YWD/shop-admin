import axios from 'axios'
import { ElMessage } from 'element-plus'

const request = axios.create({
  // baseURL: import.meta.env.VITE_API_BASE_URL
})

// 请求拦截器
request.interceptors.request.use(function (config) {
  // 统一设置用户token等
  return config
}, function (error) {
  // Do something with request error
  return Promise.reject(error)
})

// 响应拦截器
request.interceptors.response.use(function (response) {
  // Any status code that lie within the range of 2xx cause this function to trigger
  // Do something with response data
  if (response.data.status && response.data.status !== 200) {
    ElMessage.error(response.data.message || '请求失败，请重试')
    return Promise.reject(response.data.message)
  }
  return response
}, function (error) {
  // Any status codes that falls outside the range of 2xx cause this function to trigger
  // Do something with response error
  return Promise.reject(error)
})

const instance = {
  get<T = any> (url: string, params?: object, config?: object) {
    console.log(params)
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
