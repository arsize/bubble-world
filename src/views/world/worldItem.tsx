import React from 'react'
import styled, { keyframes } from 'styled-components'
import { flipInY } from 'react-animations'

const FlipInYAnimation = keyframes`${flipInY}`
const FlipInYDiv = styled.div`
  animation: 0.8s ${FlipInYAnimation};
`

const WorldItem: React.FC<ThemeWorld> = ({ worldName }) => {
  return (
    <FlipInYDiv>
      <ItemBox>{worldName}</ItemBox>
    </FlipInYDiv>
  )
}

const ItemBox = styled.div`
  width: 100px;
  height: 100px;
  background-color: white;
  cursor: pointer;
  margin-bottom: 20px;
  border: 1px solid #f1f1f1;
  border-radius: 3px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  &:hover {
    opacity: 0.8;
  }
`

export default WorldItem
