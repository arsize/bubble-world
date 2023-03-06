import Header from './Header'
import Content from './Content'
import { FloatButton } from 'antd'
import React from 'react'

import '@/less/layout.less'

const Layout: React.FC = () => {
  return (
    <div>
      <Header />
      <Content />
      <FloatButton.BackTop visibilityHeight={0} />
    </div>
  )
}

export default Layout
