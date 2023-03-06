import React from 'react'
import styled from 'styled-components'
import ArticleItem from '@/components/ArticleItem'

const ArticleList = () => {
  const item = {
    id: 1,
    title: '太守的反击',
    pre: '我躺在这间书房的横梁上已经一整天了，我在等一个人，一个即将死于非命的可怜人，有人花了一百两黄金买他性命，虽然无冤无仇，但对于钱这种东西，我向来是来者不拒的。',
    hot: 22,
    like: 3,
    ctime: '2023-2-28 11:36',
    world: '十华录',
    author: {
      name: '高川',
      signature: '期望有一天，展翅高飞',
      photo: 'G',
    },
  }
  return (
    <ListContent>
      <div className="search-rules">
        <div className="num">100篇作品</div>
        <div className="tools">最新 / 最热</div>
      </div>
      <div className="list">
        <ArticleItem {...item} />
      </div>
    </ListContent>
  )
}

const ListContent = styled.div`
  .search-rules {
    display: flex;
    font-size: 14px;
    justify-content: space-between;
    padding: 10px;
    padding-bottom: 0;
    box-sizing: border-box;
    color: #8590a6;
    .num,
    .tools {
      cursor: pointer;
    }
  }
`

export default ArticleList
