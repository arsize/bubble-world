import Header from './Header'
import Content from './Content'
import { FloatButton, theme } from 'antd'
import React from 'react'

const { useToken } = theme

const Layout: React.FC = () => {
  const { token } = useToken()
  return (
    <div style={{ backgroundColor: token.colorBgLayout }}>
      <Header />
      <Content />
      <FloatButton.BackTop visibilityHeight={0} />
    </div>
  )
}

export default Layout
