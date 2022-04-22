export interface IBaseRsp {
  code: number,
  msg: string
}
export interface IQueryPageParams {
  page: number,
  limit: number
}
export interface ILoginInfo {
  logo_square: string,
  logo_rectangle: string,
  login_logo: string,
  slide: string[]
}

export interface IUserInfo {
  account: string,
  head_pic: string,
  id: number
}

export interface ILoginRsp {
  token: string,
  expires_time: number,
  menus: object[],
  path: string,
  title: string,
  icon: string,
  header: string,
  is_header: number,
  children: object[],
  auth: string[],
  unique_auth: string[],
  user_info: IUserInfo,
  id: number,
  account: string,
  head_pic: string,
  logo: string,
  logo_square: string,
  version: string,
  newOrderAudioLink: string,
}
