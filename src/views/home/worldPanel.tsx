import styled from 'styled-components'
import { TeamOutlined, RightOutlined } from '@ant-design/icons'
import { AsideEnum } from './aside'
import React from 'react'
import WorldRoundIcon from '@/components/WorldRoundIcon'
import { useNavigate } from 'react-router-dom'

const World: React.FC = () => {
  const nav = useNavigate()
  return (
    <WorldPanel>
      <div className="block-line">
        <TeamOutlined />
        <div className="title">{AsideEnum.WORLD}</div>
        <div className="more" onClick={() => nav('/all')}>
          更多 <RightOutlined />
        </div>
      </div>
      <div className="world-list">
        <WorldRoundIcon width="20%" iconSize={28} name={'黑猫警长'} />
        <WorldRoundIcon width="20%" iconSize={28} name={'九州'} />
        <WorldRoundIcon width="20%" iconSize={28} name={'十华录'} />
        <WorldRoundIcon width="20%" iconSize={28} name={'龙族'} />
        <WorldRoundIcon width="20%" iconSize={28} name={'七海'} />
      </div>
    </WorldPanel>
  )
}

export default World

export const WorldPanel = styled.div`
  width: 100%;
  .world-list {
    width: 100%;
    display: flex;
    margin-top: 15px;
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
