import React from 'react'
import styled from 'styled-components'
import { Avatar, Button, Card, theme } from 'antd'
import ArtPanel from './artPanel'

const { useToken } = theme

const Article = () => {
  const { token } = useToken()
  return (
    <ArticleWrapper>
      <div className="article-container">
        <ArtPanel />
      </div>
      <div className="right-aside">
        <Card size="small" bodyStyle={{ padding: '20px' }}>
          <div className="user-info">
            <Avatar shape="square" size={50}></Avatar>
            <div className="user-right">
              <div style={{ color: token.colorText }}>谢锐彬</div>
              <div style={{ color: token.colorTextSecondary }}>
                人走茶不凉，杯一直在续上
              </div>
            </div>
          </div>

          <Button className="btn" type="primary">
            关注
          </Button>
        </Card>
      </div>
    </ArticleWrapper>
  )
}

const ArticleWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  .article-container {
    width: 68%;
  }
  .right-aside {
    width: 30%;
    .user-info {
      display: flex;

      .user-right {
        padding: 2px 0;
        margin-left: 10px;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
      }
    }
    .btn {
      width: 100%;
      margin-top: 15px;
    }
  }
`

export default Article
