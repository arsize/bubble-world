import { fetchInfo } from '@/net/api'
import { useEffect, useState } from 'react'
import styled from 'styled-components'
import Item from './item'

const ListContent = () => {
  const [data, setData] = useState<LoginInfo[]>([])
  useEffect(() => {
    const f = async () => {
      const result = await fetchInfo()
      console.log(result)
      setData(result)
    }
    f()
  }, [])

  return (
    <ListContainer>
      <div className="full-width">
        <div className="list-area">
          <div className="contents ember-view">
            {data.map((k, i) => {
              return <Item key={i} />
            })}
          </div>
        </div>
      </div>
    </ListContainer>
  )
}

const ListContainer = styled.div`
  padding-bottom: 50px;
  .full-width {
    width: 100%;
  }
`
export default ListContent
