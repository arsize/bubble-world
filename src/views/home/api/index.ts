import axios from 'axios'
import HTTP from '@/net/http'
import { ReqMethodEnum } from '@/net/ReqMethodEnum'
import { ResponseData, DataModel } from '@/interface/index'

export const getNoteList = () =>
  HTTP<ResponseData<DataModel>>('/mock/note_list', ReqMethodEnum.GET, {})
