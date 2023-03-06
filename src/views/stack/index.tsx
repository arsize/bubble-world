import { fetchWorlds } from '@/net/api'
import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import ArticleItem from './articleItem'

const Stack = () => {
  const [worlds, setWorlds] = useState<ThemeWorld[]>([])

  useEffect(() => {
    const f = async () => {
      const result = await fetchWorlds()
      setWorlds(result)
      console.log('j')
    }
    f()
  }, [])
  return (
    <AllBox>
      <div className="topBar">书库</div>
      <div className="world-box">
        {worlds.map((k, i) => {
          return <ArticleItem key={i} {...k} />
        })}
      </div>
    </AllBox>
  )
}

const AllBox = styled.div`
  .topBar {
    width: 100%;
    height: 100px;
    background-color: white;
  }
  .world-box {
    width: 100%;
    margin-top: 25px;
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
  }
`

export default Stack
