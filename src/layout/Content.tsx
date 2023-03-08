import { Outlet } from 'react-router-dom'
import React from 'react'
import styled from 'styled-components'

const Content = () => {
  return (
    <MainWrapper>
      <Outlet />
    </MainWrapper>
  )
}

const MainWrapper = styled.div`
  padding-top: 2.5em;
  width: 1000px;
  margin-right: auto;
  margin-left: auto;
`

export default Content
