import request from '@/utils/request'
import { IBaseRsp } from '@/api/types/common'
import { IAdmin, IQueryAdminParams } from '@/api/types/admin'
import { IFormData } from '@/api/types/form'

export const postAdmin = (admin: IAdmin) => request.post<IBaseRsp>('admin/setting/admin', admin)
export const putAdmin = (admin: IAdmin) => request.put<IBaseRsp>('admin/setting/admin/' + admin.id, admin)
export const putAdminStatus = (admin: IAdmin) => request.put<IBaseRsp>(`admin/setting/set_status/${admin.id}/${admin.status}`)
export const getAdmins = (params: IQueryAdminParams) => request.get<{
  list: IAdmin[],
  count: number
}>('admin/setting/admin', params)
export const getAdminRules = () => request.get<IFormData>('admin/setting/admin/create').then(data => {
  const roles = data.rules.find(item => item.field === 'roles')

  if (roles && roles.options) {
    return roles.options
  }
  return []
})
export const getAdmin = (id: number) => request.get<IFormData>(`admin/setting/admin/${id}/edit`).then(data => {
  const obj: Record<string, any> = {}
  data.rules.forEach(item => {
    obj[item.field] = item.value
  })
  return obj as {
    id: number | null
    account: string
    pwd: string
    conf_pwd: string
    real_name: string
    roles: string[]
    status: 0 | 1
  }
})
// export const getAdmin = (id: number) => {
//   return request<IFormData>({
//     method: 'GET',
//     url: `/setting/admin/${id}/edit`
//   }).then(data => {
//     const obj: Record<string, any> = {}
//     data.rules.forEach(item => {
//       obj[item.field] = item.value
//     })
//     return obj as {
//       account: string
//       pwd: string
//       conf_pwd: string
//       real_name: string
//       roles: string[]
//       status: 0 | 1
//     }
//   })
// }
