import styled from 'styled-components'

export const Flex = styled.div.attrs((p: { column?: any; center?: any }) => ({
  direction: p.column || 'row',
}))`
  display: flex;
  flex-direction: direction;
  justify-content: center;
  align-items: center;
`
