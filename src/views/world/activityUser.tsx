import { AsideEnum } from '@/components/aside'
import AvatarItem from '@/components/AvatarItem'
import { TeamOutlined } from '@ant-design/icons'
import { Card } from 'antd'
import React from 'react'
const ActivityUser = () => {
  return (
    <Card
      title={
        <div>
          <TeamOutlined />
          <span style={{ marginLeft: '5px' }}>{AsideEnum.ACTIVITYUSER}</span>
        </div>
      }
      size="small"
      loading={false}
    >
      <AvatarItem iconSize={30}></AvatarItem>
    </Card>
  )
}

export default ActivityUser
