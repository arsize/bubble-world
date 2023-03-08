import { RouterProvider } from 'react-router-dom'
import { routes } from './router'
import { ConfigProvider, theme } from 'antd'

import React from 'react'
import useThemeStore from './store'
import '@/mocks/index'

const App = () => {
  const { light } = useThemeStore()

  return (
    <ConfigProvider
      theme={{
        algorithm: light ? theme.defaultAlgorithm : theme.darkAlgorithm,
        token: {
          colorPrimary: '#056de8',
          colorTextTertiary: '#8590a6',
        },
      }}
    >
      <RouterProvider router={routes} />
    </ConfigProvider>
  )
}

export default App
