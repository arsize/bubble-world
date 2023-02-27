import { DataModel, ResponseData } from './http'
import HTTP from './http'
import { ReqMethodEnum } from './ReqMethodEnum'

export const getData = () => {
  return HTTP<ResponseData<DataModel>>('/mock/note_list', ReqMethodEnum.GET, {})
}
