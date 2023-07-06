import http from './http'
import type { UserLoginForm } from '@/views/login'

export const fetchArticles = () => http.get<Aricle[]>('/mock/articles')
export const fetchWorlds = () => http.get<ThemeWorld[]>('/mock/worlds')

export const apiLogin = (data: UserLoginForm) =>
  http.post<UserDetailInfo, UserLoginForm>('/api/drip/login', data)
