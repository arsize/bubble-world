import { note } from './modules/note'
import Mock from 'mockjs'

Mock.mock('/mock/note_list', 'get', note)
