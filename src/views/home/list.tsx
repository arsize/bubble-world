import { getData } from '@/net/api'
import { Note } from '@/net/http'
import { useEffect, useState } from 'react'
import styled from 'styled-components'
import Item from './item'

const ListContent = () => {
  const [data, setData] = useState<Note[]>([])
  useEffect(() => {
    let f = async () => {
      const result = await getData()
      console.log(result)
      setData(result.data.list)
    }
    f()
  })

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
`
export default ListContent
