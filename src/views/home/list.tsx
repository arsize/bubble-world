import { fetchArticles } from '@/net/api'
import { useEffect, useState } from 'react'
import styled from 'styled-components'
import ArticleItem from '@/components/ArticleItem'
import React from 'react'

const ListContent = () => {
  const [aricles, setAricles] = useState<Aricle[]>([])
  useEffect(() => {
    const f = async () => {
      const result = await fetchArticles()
      setAricles(result)
    }
    f()
  }, [])

  return (
    <ListWrapper>
      <div className="full-width">
        <div className="list-area">
          <div className="contents ember-view">
            {aricles.map((k, i) => {
              return <ArticleItem {...k} key={i} />
            })}
          </div>
        </div>
      </div>
    </ListWrapper>
  )
}

const ListWrapper = styled.div`
  margin-bottom: 5px;
  .full-width {
    width: 100%;
  }
`
export default ListContent
