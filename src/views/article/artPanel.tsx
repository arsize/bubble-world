import React from 'react'
import txt01 from '@/mocks/modules/txt01'
import { Card } from 'antd'
import styled from 'styled-components'

const ArtPanel = () => {
  return (
    <Card>
      <ArtWrapper dangerouslySetInnerHTML={{ __html: txt01 }}></ArtWrapper>
    </Card>
  )
}

const ArtWrapper = styled.div`
  font-size: 16px;
`

export default ArtPanel
