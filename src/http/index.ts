import axios, { AxiosInstance } from 'axios'

const HTTP: AxiosInstance = axios.create({
  baseURL: 'https://some-domain.com/api/',
  timeout: 1000,
  headers: { 'X-Custom-Header': 'foobar' },
})

export default HTTP
