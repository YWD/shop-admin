import request from '@/utils/request'
interface IResponseData<T = any> {
  code: number
  msg: string
  data: T
}
export const getLoginInfo = request.get<IResponseData<{
  logo_square: string,
  logo_rectangle: string,
  login_logo: string,
  slide: string[]
}>>('login/info')
