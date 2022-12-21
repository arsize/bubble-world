import styled from 'styled-components'
import Aside from './parts/Aside'
import MainList from './parts/MainList'

function Home() {
  return (
    <Container>
      <MainList></MainList>
      <Aside></Aside>
    </Container>
  )
}

const Container = styled.div`
  width: 960px;
  height: 100vh;
  margin: 0 auto;
  margin-top: 86px;
`

export default Home
