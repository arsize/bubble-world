import { NFlex } from '@/components/atomic'
import { apiLogin } from '@/net/api'
import { Button, Card, Form, Input } from 'antd'
import React from 'react'
import styled from 'styled-components'

export interface UserLoginForm {
  username: string
  password: string
}

const Login = () => {
  const [form] = Form.useForm<UserLoginForm>()
  // 登录
  const onFinish = async (values: UserLoginForm) => {
    // eslint-disable-next-line prefer-const
    let result = await apiLogin(values)
    console.log('result', result)
  }

  // 注册
  const goRegister = () => {
    console.log('注册')
  }

  return (
    <Wrapper>
      <Card
        hoverable
        style={{
          width: 500,
          height: 350,
        }}
      >
        <NFlex
          style={{ width: '100%', height: '350px' }}
          alian="center"
          direction="column"
        >
          <Form
            form={form}
            initialValues={{ remember: true }}
            onFinish={onFinish}
            autoComplete="off"
            style={{ width: 300 }}
          >
            <Form.Item
              label="账号"
              name="username"
              rules={[{ required: true, message: '请输入账号!' }]}
            >
              <Input />
            </Form.Item>

            <Form.Item
              label="密码"
              name="password"
              rules={[{ required: true, message: '请输入密码!' }]}
            >
              <Input.Password />
            </Form.Item>

            <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
              <Button type="primary" htmlType="submit">
                登录
              </Button>

              <Button
                onClick={goRegister}
                style={{ marginLeft: '20px' }}
                type="default"
              >
                注册
              </Button>
            </Form.Item>
          </Form>
        </NFlex>
      </Card>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`

export default Login
