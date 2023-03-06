import { UsergroupAddOutlined } from '@ant-design/icons'
import styled from 'styled-components'
import React from 'react'
import { Carousel } from 'antd'
import AvatarItem from '@/components/AvatarItem'
import { PlusOutlined } from '@ant-design/icons'

const Recommend = () => {
  const onChange = (currentSlide: number) => {
    console.log(currentSlide)
  }
  return (
    <RecommendBox>
      <div className="block-line">
        <UsergroupAddOutlined />
        <div className="title">推荐关注</div>
      </div>
      <Carousel afterChange={onChange}>
        <div>
          <UserCarouselItem />
          <UserCarouselItem />
        </div>
        <div>
          <h3>1</h3>
        </div>
      </Carousel>
    </RecommendBox>
  )
}

const UserCarouselItem = () => {
  return (
    <UserCarouseBox>
      <div className="user-left">
        <AvatarItem shape="square" iconSize={28} />
        <span className="author-name">{'高川'}</span>
      </div>
      <div className="right-btn">
        <PlusOutlined />
        <span className="focus">关注</span>
      </div>
    </UserCarouseBox>
  )
}

const RecommendBox = styled.div`
  .block-line {
    margin-bottom: 23px;
  }
`

const UserCarouseBox = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 12px;
  width: 95%;
  .user-left {
    font-size: 13px;
    font-weight: normal;
    line-height: 1.1;
    .author-name {
      display: inline-block;
      margin-left: 7px;
    }
  }
  .right-btn {
    font-size: 13px;
    color: #056de8;
    .focus {
      margin-left: 5px;
    }
  }
`

export default Recommend
