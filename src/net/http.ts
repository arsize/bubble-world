import axios, { AxiosError, AxiosRequestConfig, AxiosResponse } from 'axios'

const instance = axios.create({
  baseURL: '/',
  timeout: 1000,
})

instance.interceptors.request.use(
  (config: AxiosRequestConfig) => {
    if (config.headers && !config.headers['Authorization']) {
      config.headers['Authorization'] = 'Bearer ' + '123'
    }
    return config
  },
  (err: AxiosError) => {
    return Promise.reject(err)
  }
)

instance.interceptors.response.use(
  (response: AxiosResponse) => {
    const { code, message, data } = response.data
    if (code == 0) {
      return data
    } else {
      // 业务错误
      return Promise.reject(new Error(message))
    }
  },
  (err: AxiosError) => {
    const status = err.response?.status
    switch (status) {
      case 401:
        break

      default:
        break
    }
    return Promise.reject(err)
  }
)

export const http = {
  get<T>(url: string, config?: AxiosRequestConfig): Promise<T> {
    return instance.get(url, config)
  },
  post<T, U>(url: string, data: U): Promise<T> {
    return instance.post(url, data)
  },
}

export default http
