import Mock from 'mockjs'
import { Info } from './modules/info'
import { Aricles } from './modules/articles'

Mock.mock('/mock/info', 'get', Info)
Mock.mock('/mock/articles', 'get', Aricles)
