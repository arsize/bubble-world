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
import { device } from '@/utils/device'
import Block, { AsideEnum } from '@/components/aside'

const WorldPage = () => {
  return (
    <React.Fragment>
      <BookCover />
      <ArticleListWrapper>
        <ArticleList />
        <Aside>
          <Block type={AsideEnum.WRITERULE} />
          <Block type={AsideEnum.ACTIVITYUSER} />

          <Block type={AsideEnum.BOOKCOLLECT} />
          <Block type={AsideEnum.CHAT} />

          <Footer />
        </Aside>
      </ArticleListWrapper>
    </React.Fragment>
  )
}

const Aside = styled.div`
  margin-left: 20px;
  @media ${device.mobileL} {
    display: none;
  }
`

const ArticleListWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin-top: 10px;
  padding: 10px 0;
  .left-list {
    width: 70%;
    @media ${device.mobileL} {
      width: 100%;
    }
  }
  .right-aside {
    width: 28%;
    @media ${device.mobileL} {
      display: none;
    }

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
