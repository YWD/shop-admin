import request from '@/utils/request'
import { IListParams, Role, RolePostData, Menu, EditRole } from '@/api/types/role'

export const getRoles = (params: IListParams) => {
  return request.get<{
    count: number
    list: Role[]
  }>('admin/setting/role', params)
}

export const saveRole = (id: number, data: RolePostData) => {
  return request.post(`admin/setting/role/${id}`, data)
}

export const deleteRole = (id: number) => {
  return request.delete(`admin/setting/role/${id}`)
}

export const updateRoleStatus = (id: number, status: 0 | 1) => {
  return request.put(`admin/setting/role/set_status/${id}/${status}`)
}

export const getRole = (id: number) => {
  return request.get<{
    role: EditRole
    menus: Menu[]
  }>(`admin/setting/role/${id}/edit`)
}

export const getMenus = () => {
  return request.get<{
    menus: Menu[]
  }>('admin/setting/role/create')
}
