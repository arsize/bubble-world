import axios from 'axios'
import HTTP from '@/net/http'
import { ReqMethodEnum } from '@/net/ReqMethodEnum'
import { ResponseData } from '@/interface/index'

export const getNoteList = () =>
  HTTP<ResponseData>('/mock/note_list', ReqMethodEnum.GET, {})
