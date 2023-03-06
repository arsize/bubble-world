import React from 'react'
import styled, { keyframes } from 'styled-components'
import { flipInY } from 'react-animations'

const FlipInYAnimation = keyframes`${flipInY}`
const FlipInYDiv = styled.div`
  animation: 0.8s ${FlipInYAnimation};
`

const ArticleItem: React.FC<ThemeWorld> = ({ worldName }) => {
  return (
    <FlipInYDiv>
      <ItemBox>{worldName}</ItemBox>
    </FlipInYDiv>
  )
}

const ItemBox = styled.div`
  width: 150px;
  height: 200px;
  background-color: white;
  cursor: pointer;
  margin-bottom: 20px;
  border: 1px solid #f1f1f1;
  border-radius: 3px;
  display: flex;
  align-items: center;
  justify-content: center;
  &:hover {
    opacity: 0.8;
  }
`

export default ArticleItem
