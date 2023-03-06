// 主题世界-圆形展示
import { Avatar } from 'antd'
import React from 'react'
import styled from 'styled-components'
import { useNavigate } from 'react-router-dom'

interface IconBoxProps {
  width: string
  iconSize: number
  name: string
}

const WorldRoundIcon: React.FC<IconBoxProps> = ({ width, iconSize, name }) => {
  const navigate = useNavigate()

  return (
    <WorldIconBox width={width} onClick={() => navigate('/world')}>
      <Avatar size={iconSize}></Avatar>
      <div className="world-name">{name}</div>
    </WorldIconBox>
  )
}

const WorldIconBox = styled.div.attrs((props: { width: string }) => props)`
  width: ${(props) => `${props.width}`};
  cursor: pointer;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  display: flex;
  .world-name {
    font-size: 12px;
    color: #333;
    margin-top: 7px;
  }
`

export default WorldRoundIcon
