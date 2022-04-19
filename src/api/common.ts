import request from '@/utils/request'
import { ILoginInfo } from '@/api/types/common'

// export const getLoginInfo = request<ILoginInfo>({
//   method: 'GET',
//   url: 'login/info'
// })

export const getLoginInfo = () => request.get<ILoginInfo>('admin/login/info')

export const getCaptcha = () => request.get<Blob>('admin/captcha_pro', {
  date: Date.now()
}, {
  responseType: 'blob'
})
