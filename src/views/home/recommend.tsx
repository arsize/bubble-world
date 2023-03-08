import { UsergroupAddOutlined } from '@ant-design/icons'
import styled from 'styled-components'
import React from 'react'
import { Card, Carousel, theme } from 'antd'
import AvatarItem from '@/components/AvatarItem'
import { PlusOutlined } from '@ant-design/icons'
import { AliasToken } from 'antd/es/theme/internal'
import { AsideEnum } from './aside'

const { useToken } = theme

const Recommend = () => {
  const onChange = (currentSlide: number) => {
    console.log(currentSlide)
  }
  return (
    <RecommendWrapper>
      <Card
        title={
          <div>
            <UsergroupAddOutlined />
            <span style={{ marginLeft: '5px' }}>{AsideEnum.RECOMMEND}</span>
          </div>
        }
        size="small"
        loading={false}
      >
        <Carousel afterChange={onChange}>
          <div>
            <UserCarouselItem />
            <UserCarouselItem />
          </div>
          <div>
            <h3>1</h3>
          </div>
        </Carousel>
      </Card>
    </RecommendWrapper>
  )
}

const UserCarouselItem = () => {
  const { token } = useToken()
  return (
    <UserCarouseBox token={token}>
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

const RecommendWrapper = styled.div`
  .block-line {
    margin-bottom: 23px;
  }
`

const UserCarouseBox = styled.div.attrs(
  (props: { token: Partial<AliasToken> }) => props
)`
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
    .focus {
      margin-left: 5px;
    }
  }
`

export default Recommend
