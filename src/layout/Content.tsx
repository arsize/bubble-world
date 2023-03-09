import { Outlet } from 'react-router-dom'
import React from 'react'
import styled from 'styled-components'
import { device, size } from '@/utils/device'

const Content = () => {
  return (
    <MainWrapper>
      <Outlet />
    </MainWrapper>
  )
}

const MainWrapper = styled.div`
  padding-top: 20px;
  margin-right: auto;
  margin-left: auto;
  width: 1000px;
  min-height: 1000px;
  @media ${device.tablet} {
    width: ${size.tablet};
  }
  @media ${device.mobileL} {
    width: ${size.mobileL};
  }
  @media ${device.mobileM} {
    width: ${size.mobileM};
  }
`

export default Content
