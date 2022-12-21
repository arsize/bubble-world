import axios, { AxiosPromise } from 'axios'
import { ReqMethodEnum } from './ReqMethodEnum'

const instance = axios.create({
  baseURL: '/',
  timeout: 1000,
  headers: { 'X-Custom-Header': 'foobar' },
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

export default HTTP
