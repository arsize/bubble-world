import { HeartOutlined } from '@ant-design/icons'
import { WorldPanel } from './worldPanel'
import React from 'react'
import WorldRoundIcon from '@/components/WorldRoundIcon'

const Collect = () => {
  return (
    <WorldPanel>
      <div className="block-line">
        <HeartOutlined />
        <div className="title">已订阅</div>
      </div>
      <div className="world-list">
        <WorldRoundIcon width="20%" iconSize={28} name={'黑猫警长'} />
        <WorldRoundIcon width="20%" iconSize={28} name={'九州'} />
      </div>
    </WorldPanel>
  )
}

export default Collect
