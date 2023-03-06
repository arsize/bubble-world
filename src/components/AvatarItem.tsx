// 用户头像
import { Avatar } from 'antd'
import React from 'react'
import styled from 'styled-components'
import { useNavigate } from 'react-router-dom'

interface IconProps {
  iconSize: number
  photo?: string
  children?: React.ReactNode
  shape?: 'circle' | 'square' | undefined
}

const AvatarItem: React.FC<IconProps> = ({
  iconSize,
  children,
  photo,
  shape,
}) => {
  const navigate = useNavigate()

  return (
    <AvatarBox onClick={() => navigate('/user')}>
      <Avatar
        shape={shape}
        style={{
          backgroundColor: '#fde3cf',
          color: '#f56a00',
        }}
        size={iconSize}
      >
        <span style={{ fontSize: '13px' }}>{photo}</span>
      </Avatar>
      {children}
    </AvatarBox>
  )
}

const AvatarBox = styled.div`
  cursor: pointer;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  display: inline-block;
`

export default AvatarItem
