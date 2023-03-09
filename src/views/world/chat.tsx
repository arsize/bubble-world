import { AsideEnum } from '@/components/aside'
import { MessageOutlined } from '@ant-design/icons'
import { Card } from 'antd'
import React from 'react'
const Chat = () => {
  return (
    <Card
      title={
        <div>
          <MessageOutlined />
          <span style={{ marginLeft: '5px' }}>{AsideEnum.CHAT}</span>
        </div>
      }
      size="small"
      loading={false}
    ></Card>
  )
}

export default Chat
