import request from '@/utils/request'
export const getLoginInfo = request({
  method: 'GET',
  url: 'login/info'
})
