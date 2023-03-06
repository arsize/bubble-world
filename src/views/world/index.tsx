import React from 'react'
import style from '@/less/world.module.less'
import ArticleList from './articleList'
import Footer from '@/layout/Footer'
import BookCover from './cover'

import {
  PushpinOutlined,
  TeamOutlined,
  MessageOutlined,
  BookOutlined,
} from '@ant-design/icons'

const WorldPage = () => {
  return (
    <React.Fragment>
      <div className={style.infoPannel}>
        <BookCover />
      </div>
      <div className={style.articleList}>
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
      </div>
    </React.Fragment>
  )
}

export default WorldPage
