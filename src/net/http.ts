import axios, { AxiosPromise, AxiosHeaders } from 'axios'
import { ReqMethodEnum } from './ReqMethodEnum'

const instance = axios.create({
  baseURL: '/',
  timeout: 1000,
  headers: { 'X-Custom-Header': 'arsize' },
})

function HTTP<T>(
  url: string,
  method: ReqMethodEnum,
  data: {} = {}
): Promise<T> {
  return new Promise((resolve, reject) => {
    instance
      .request({
        url,
        method,
        data,
      })
      .then((res: any) => {
        resolve(res)
      })
      .catch((err) => {
        reject(err)
      })
  })
}
export interface ResponseData<T> {
  config?: any
  data: T
  headers?: AxiosHeaders
  request?: XMLHttpRequest
  status?: number
  statusText?: string
}

export interface DataModel {
  list: Array<Note>
}

export interface Note {
  id: string
  title: string
  content: string
  author: string
}

export default HTTP
