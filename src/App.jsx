import { useState } from 'react'
import { RouterProvider } from 'react-router-dom'
import { routes } from './router'
import { ConfigProvider, theme } from 'antd'

function App() {
  const [count, setCount] = useState(0)

  return (
    <ConfigProvider
      theme={{
        algorithm: theme.darkAlgorithm,
      }}
    >
      <RouterProvider router={routes} />
    </ConfigProvider>
  )
}

export default App
