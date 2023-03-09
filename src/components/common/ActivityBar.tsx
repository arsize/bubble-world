import { theme } from 'antd'
import { AliasToken } from 'antd/es/theme/internal'
import React from 'react'
import styled from 'styled-components'

const { useToken } = theme

const ActivityBar = (props: { num: number }) => {
  const { num } = props
  const { token } = useToken()
  return (
    <Wrapper token={token}>
      <div className="low">
        <div
          className="rectangle"
          style={{ backgroundColor: 'GrayText' }}
        ></div>
      </div>
      <div className="middle">
        <div
          className="rectangle"
          style={{ backgroundColor: num > 10 ? 'orange' : '' }}
        ></div>
      </div>
      <div className="hight">
        <div
          className="rectangle"
          style={{ backgroundColor: num > 20 ? 'yellowgreen' : '' }}
        ></div>
      </div>
      <div className="hot">
        <div
          className="rectangle"
          style={{ backgroundColor: num > 30 ? 'red' : '' }}
        ></div>
      </div>
    </Wrapper>
  )
}

const Wrapper = styled.div.attrs(
  (props: { token: Partial<AliasToken> }) => props
)`
  display: flex;
  cursor: pointer;
  .rectangle {
    width: 10px;
    height: 5px;
    margin-right: 3px;
    border: 1px solid ${(props) => props.token.colorSplit};
  }
`

export default ActivityBar
