import React, { useState } from 'react'
import { Outlet } from 'react-router-dom'
import Login from '@/views/login'

const Layout = () => {
  let [key, setKey] = useState(false)
  return <div>{key ? <Outlet /> : <Login />}</div>
}

export default Layout
