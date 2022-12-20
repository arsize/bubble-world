import styled from 'styled-components'

const Header: React.FC = (props) => {
  return (
    <Container>
      <LimitWidth>
        <Logo src="/src/assets/nav-logo.png"></Logo>
        <Navbar>
          <Tab>首页</Tab>
          <Tab>下载APP</Tab>
          <Tab>会员</Tab>
          <Tab>IT技术</Tab>
        </Navbar>
        <RightTools>
          <Btn>Aa</Btn>
          <Btn>登录</Btn>
          <Btn>注册</Btn>
          <Btn>写文章</Btn>
        </RightTools>
      </LimitWidth>
    </Container>
  )
}

const Container = styled.div`
  width: 100%;
  height: 56px;
  border-bottom: 1px solid #f0f0f0;
  display: flex;
  background: ${(props: { bg?: string }) => props.bg || 'white'};
`
const LimitWidth = styled.div`
  min-width: 768px;
  max-width: 1440px;
  margin: 0 auto;
  display: flex;
  box-sizing: border-box;
`
const Logo = styled.img`
  line-height: 56px;
  height: 56px;
  float: left;
`
const Navbar = styled.div`
  display: flex;
  height: 100%;
  align-items: center;
  width: 70%;
  justify-content: space-around;
`
const Tab = styled.div``
const RightTools = styled.div`
  float: right;
  display: flex;
  height: 100%;
  align-items: center;
`
const Btn = styled.div`
  min-width: 80px;
  padding: 6px 12px;
`

export default Header
