import request from '@/utils/request'
import { ILoginInfo } from '@/api/types/common'

// export const getLoginInfo = request<ILoginInfo>({
//   method: 'GET',
//   url: 'login/info'
// })

export const getLoginInfo = request.get<ILoginInfo>('login/info')
