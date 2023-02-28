import styled from 'styled-components'
import { TeamOutlined, RightOutlined } from '@ant-design/icons'
import { AsideEnum } from './aside'
import { Avatar } from 'antd'

const World = () => {
  return (
    <WorldPanel>
      <div className="block-line">
        <TeamOutlined />
        <div className="title">{AsideEnum.WORLD}</div>
        <div className="more">
          更多 <RightOutlined />
        </div>
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
        <div className="block">
          <div className="top-round">
            <Avatar size={28}></Avatar>
          </div>
          <div className="world-name">十华录</div>
        </div>
        <div className="block">
          <div className="top-round">
            <Avatar size={28}></Avatar>
          </div>
          <div className="world-name">龙族</div>
        </div>
        <div className="block">
          <div className="top-round">
            <Avatar size={28}></Avatar>
          </div>
          <div className="world-name">七海</div>
        </div>
      </div>
    </WorldPanel>
  )
}

export default World

export const WorldPanel = styled.div`
  .world-list {
    display: flex;
    margin-top: 15px;
    .block {
      display: flex;
      width: 20%;
      cursor: pointer;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      .world-name {
        font-size: 12px;
        color: #333;
        margin-top: 7px;
      }
    }
  }
  .block-line {
    position: relative;
    .more {
      font-size: 12px;
      font-weight: normal;
      color: #777777;
      position: absolute;
      right: 0;
      cursor: pointer;
    }
  }
`
