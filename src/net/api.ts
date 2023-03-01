import http from './http'

export function fetchInfo() {
  return http.get<LoginInfo[]>('/mock/info')
}
