import { HeartOutlined } from '@ant-design/icons'
import { Avatar } from 'antd'
import { WorldPanel } from './world'

const Collect = () => {
  return (
    <WorldPanel>
      <div className="block-line">
        <HeartOutlined />
        <div className="title">已订阅</div>
      </div>
      <div className="world-list">
        <div className="block">
          <div className="top-round">
            <Avatar size={28}></Avatar>
          </div>
          <div className="world-name">黑猫警长</div>
        </div>
        <div className="block">
          <div className="top-round">
            <Avatar size={28}></Avatar>
          </div>
          <div className="world-name">九州</div>
        </div>
      </div>
    </WorldPanel>
  )
}

export default Collect
