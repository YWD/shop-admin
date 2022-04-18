import axios from 'axios'

const request = axios.create({
  baseURL: 'https://shop.fed.lagounews.com/api/admin'
})

// 请求拦截器
axios.interceptors.request.use(function (config) {
  // 统一设置用户token等
  return config
}, function (error) {
  // Do something with request error
  return Promise.reject(error)
})

// 响应拦截器
axios.interceptors.response.use(function (response) {
  // Any status code that lie within the range of 2xx cause this function to trigger
  // Do something with response data
  return response
}, function (error) {
  // Any status codes that falls outside the range of 2xx cause this function to trigger
  // Do something with response error
  return Promise.reject(error)
})

export default request