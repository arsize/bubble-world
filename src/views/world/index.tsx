// 单个主题世界
import React from 'react'
import ArticleList from './articleList'
import Footer from '@/layout/Footer'
import BookCover from './cover'

import {
  PushpinOutlined,
  TeamOutlined,
  MessageOutlined,
  BookOutlined,
} from '@ant-design/icons'
import styled from 'styled-components'

const WorldPage = () => {
  return (
    <React.Fragment>
      <InfoPannelWrapper>
        <BookCover />
      </InfoPannelWrapper>
      <ArticleListWrapper>
        <div className="left-list">
          <ArticleList />
        </div>
        <div className="right-aside">
          <div className="block">
            <div className="title">
              <PushpinOutlined />
              <div className="rules">创作规则</div>
            </div>
          </div>
          <div className="block">
            <div className="title">
              <TeamOutlined />
              <div className="rules">活跃作者</div>
            </div>
          </div>
          <div className="block">
            <div className="title">
              <BookOutlined />
              <div className="rules">入库作品</div>
            </div>
          </div>
          <div className="block">
            <div className="title">
              <MessageOutlined />
              <div className="rules">讨论区</div>
            </div>
          </div>

          <Footer />
        </div>
      </ArticleListWrapper>
    </React.Fragment>
  )
}

const InfoPannelWrapper = styled.div`
  width: 100%;
  height: 200px;
  background-color: white;
  box-shadow: 0 1px 3px hsl(0deg 0% 7% / 10%);
  border-radius: 5px;
`
const ArticleListWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin-top: 10px;
  padding: 10px 0;
  .left-list {
    width: 70%;
    padding: 10px;
    padding-bottom: 0;
    background-color: white;
    box-shadow: 0 1px 3px hsl(0deg 0% 7% / 10%);
  }
  .right-aside {
    width: 28%;

    .block {
      padding: 10px;
      background-color: white;
      box-shadow: 0 1px 3px hsl(0deg 0% 7% / 10%);
      margin-bottom: 10px;
      .title {
        width: 100%;
        padding: 5px 0;
        align-items: center;
        display: flex;
        font-size: 14px;
        color: #444;
        font-weight: 500;
        .rules {
          margin-left: 5px;
        }
      }
    }
  }
`
export default WorldPage
