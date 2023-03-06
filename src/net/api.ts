import http from './http'

export function fetchInfo() {
  return http.get<LoginInfo[]>('/mock/info')
}

export function fetchArticles() {
  return http.get<Aricle[]>('/mock/articles')
}
