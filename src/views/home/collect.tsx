import { HeartOutlined } from '@ant-design/icons'
import { WorldPanel } from './worldPanel'
import React from 'react'
import WorldRoundIcon from '@/components/WorldRoundIcon'
import { Card } from 'antd'
import { AsideEnum } from './aside'

const Collect = () => {
  console.log('collect')
  return (
    <WorldPanel>
      <Card
        title={
          <div>
            <HeartOutlined />
            <span style={{ marginLeft: '5px' }}>{AsideEnum.COLLECT}</span>
          </div>
        }
        size="small"
        loading={false}
      >
        <div className="world-list">
          <WorldRoundIcon width="20%" iconSize={28} name={'黑猫警长'} />
          <WorldRoundIcon width="20%" iconSize={28} name={'九州'} />
        </div>
      </Card>
    </WorldPanel>
  )
}

export default Collect
