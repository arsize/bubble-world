import styled from 'styled-components'

interface RowProps {
  alian: 'center' | 'left' | 'right'
  direction: 'row' | 'column'
}

const NFlex = styled.div.attrs((props: RowProps) => props)`
  display: flex;
  flex-direction: ${(props) => props.direction};
  justify-content: ${(props) => props.alian};
  align-items: center;
`
NFlex.defaultProps = {
  alian: 'center',
  direction: 'row',
}

export default NFlex
