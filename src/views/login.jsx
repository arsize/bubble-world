import { Button } from 'antd'
import Input from 'antd/es/input/Input'
import styled from 'styled-components'

const Login = () => {
  return (
    <Wrapper>
      <div className="panel">
        <Input placeholder="请输入邀请码" />
        <div className="btn">
          <Button style={{ marginLeft: '10px' }}>注册</Button>
          <Button style={{ marginLeft: '10px' }}>登录</Button>
        </div>
      </div>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  .panel {
    width: 300px;
    display: flex;
    flex-direction: column;
    .btn {
      margin-top: 10px;
      display: flex;
    }
  }
`

export default Login
