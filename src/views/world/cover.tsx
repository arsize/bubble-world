import React from 'react'
import styled from 'styled-components'

const BookCover = () => {
  return (
    <CoverBox>
      <div className="left"></div>
      <div className="right"></div>
    </CoverBox>
  )
}

const CoverBox = styled.div`
  width: 100%;
  height: 100%;
  cursor: pointer;
`

export default BookCover
