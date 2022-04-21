import request from '@/utils/request'
import { ILoginInfo, ILoginRsp } from '@/api/types/common'

export const getLoginInfo = () => request.get<ILoginInfo>('admin/login/info')

export const getCaptcha = () => request.get<Blob>('admin/captcha_pro', {
  date: Date.now()
}, {
  responseType: 'blob'
})

export const login = (data: {
  account: string,
  pwd: string,
  imgcode: string
}) => request.post<ILoginRsp>('admin/login', data)

export const logoutI = () => request.get('admin/setting/admin/logout')
