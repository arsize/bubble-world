import React from 'react'
import styled from 'styled-components'

const BookCover = () => {
  return (
    <CoverWrapper>
      <div className="left"></div>
      <div className="right"></div>
    </CoverWrapper>
  )
}

const CoverWrapper = styled.div`
  width: 100%;
  height: 100%;
  cursor: pointer;
`

export default BookCover
