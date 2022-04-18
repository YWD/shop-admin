import axios from 'axios'

const request = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL
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

const instance = {
  get<T = any> (url: string) {
    return request({
      method: 'GET',
      url: url
    }).then(rsp => rsp.data.data as T)
  },

  post<T = any> (url: string, data: any) {
    return request({
      method: 'POST',
      url,
      data
    }).then(rsp => rsp.data.data as T)
  }
}

export default instance
