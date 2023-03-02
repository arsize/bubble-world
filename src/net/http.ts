import axios, {
  AxiosError,
  AxiosInstance,
  AxiosRequestConfig,
  AxiosResponse,
} from 'axios'

const instance: AxiosInstance = axios.create({
  baseURL: '/',
  timeout: 1000,
  headers: { 'X-Custom-Header': 'arsize' },
})

instance.interceptors.request.use(
  (config: any) => {
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
}

export default http
