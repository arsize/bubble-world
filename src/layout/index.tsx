import Header from './Header'
import Footer from './Footer'
import Content from './Content'

import '@/less/layout.less'

const Layout: React.FC = () => {
  return (
    <div>
      <Header />
      <Content />
    </div>
  )
}

export default Layout
