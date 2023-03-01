import { note } from './modules/note'
import Mock from 'mockjs'
import { Info } from './modules/info'

Mock.mock('/mock/note_list', 'get', note)
Mock.mock('/mock/info', 'get', Info)
