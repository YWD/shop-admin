import { IQueryPageParams } from '@/api/types/common'

export interface IAdmin {
  id?: number,
  account: string,
  real_name: string,
  pwd: string,
  conf_pwd?: string,
  roles: string[],
  status: number,
  statusLoading?: boolean
}

export type IQueryAdminParams = IQueryPageParams & {
  name?: string,
  roles?: string[],
  status?: 0 | 1
}
