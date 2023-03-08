import React from 'react'
import styled from 'styled-components'
import AvatarItem from '@/components/AvatarItem'
import { Button } from 'antd'

const Article = () => {
  return (
    <ArticleWrapper>
      <div className="article-container">文字</div>
      <div className="right-aside">
        <AvatarItem shape="square" iconSize={40}>
          <span style={{ marginLeft: '10px' }}>彩虹酱</span>
        </AvatarItem>
        <Button className="btn" type="primary">
          关注
        </Button>
      </div>
    </ArticleWrapper>
  )
}

const ArticleWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  .article-container {
    width: 73%;
    padding: 10px;
    background-color: white;
    box-shadow: 0 0 3px 1px rgba(var(--tertiary-rgb), 0.35);
  }
  .right-aside {
    width: 25%;
    display: flex;
    flex-direction: column;
    padding: 15px;
    box-sizing: border-box;
    background-color: white;
    box-shadow: 0 0 3px 1px rgba(var(--tertiary-rgb), 0.35);
    .btn {
      margin-top: 10px;
    }
  }
`

export default Article
