import { Outlet } from 'react-router-dom'
import style from '@/less/content.module.less'
import React from 'react'

const Content = () => {
  return (
    <div className={style['main-outlet']}>
      <Outlet />
    </div>
  )
}

export default Content
