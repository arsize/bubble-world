import { Global } from '@/utils/config'
import { Button, Card, theme, Tag } from 'antd'
import { AliasToken } from 'antd/es/theme/internal'
import React from 'react'
import styled from 'styled-components'
import { PlusOutlined } from '@ant-design/icons'
import CountUp from 'react-countup'
import ActivityBar from '@/components/common/ActivityBar'
import { device } from '@/utils/device'

const { useToken } = theme

const BookCover = () => {
  const { token } = useToken()
  return (
    <Card size="small" style={{ width: '100%' }}>
      <CoverWrapper token={token}>
        <div className="left">
          <div className="cover-box">
            <div className="nei-box"></div>
          </div>
        </div>
        <div className="right">
          <div>
            <div className="world-name">
              <div>黑貓警長</div>
              <Button type="default">
                <PlusOutlined /> 订阅
              </Button>
            </div>
            <div className="tag">
              <Tag>奇幻</Tag>
              <Tag>动漫</Tag>
              <Tag>衍生世界观</Tag>
            </div>
            <div className="sub-text">
              黑貓警長是中國大陆的系列漫画，由诸志祥创作，后被上海美术电影制片厂改编为同名动画。之后曾经出版续集漫画，剧情与风格均延续原著，但未改编为动画。
            </div>
          </div>

          <div className="bottom-tools">
            <div className="leftbox">
              <div className="mark" style={{ minWidth: '90px' }}>
                <span>已订阅：</span>
                <CountUp end={100} duration={0.3} separator="," />人
              </div>
              <div className="activity" style={{ minWidth: '100px' }}>
                <span>活跃度：</span>
                <ActivityBar num={210} />
              </div>
              <Button
                size="middle"
                type="primary"
                style={{ marginLeft: '30px' }}
              >
                开始创作
              </Button>
            </div>

            <div className="right">最近更新：3天前</div>
          </div>
        </div>
      </CoverWrapper>
    </Card>
  )
}

const CoverWrapper = styled.div.attrs(
  (props: { token: Partial<AliasToken> }) => props
)`
  height: 200px;
  display: flex;
  align-items: center;

  .left {
    margin-left: 10px;
    margin-right: 20px;
    .cover-box {
      box-shadow: 0 1px 4px 1px rgb(0 0 0 / 5%);
      border-radius: 9px;
      cursor: pointer;
      width: 300px;
      height: 180px;
      background-image: url(${Global.defaultCover});
      background-repeat: no-repeat;
      background-position-x: center;
      background-size: cover;
      @media ${device.tablet} {
        width: 200px;
      }
    }
  }
  .right {
    height: 100%;
    padding: 10px 10px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    .world-name {
      width: 95%;
      display: flex;
      justify-content: space-between;
      font-size: 1.5em;
      color: ${(props) => props.token.colorText};
    }
    .tag {
      margin-top: 10px;
    }
    .sub-text {
      margin-top: 20px;
    }
    .bottom-tools {
      font-size: 13px;
      color: ${(props) => props.token.colorTextSecondary};
      display: flex;
      align-items: center;
      justify-content: space-between;
      .leftbox {
        display: flex;
        align-items: center;
        .mark {
          margin-right: 20px;
        }
        .activity {
          display: flex;
          align-items: center;
        }
      }
      .right {
        color: ${(props) => props.token.colorTextQuaternary};
      }
      @media ${device.mobileL} {
        margin-top: 20px;
        .right {
          display: none;
        }
      }
    }
  }
  @media ${device.mobileL} {
    flex-wrap: wrap;
    height: auto;
    .left {
      width: 100%;
      margin-right: 0;
      margin-left: 0;
      .cover-box {
        width: 100%;
        margin: 10px auto;
        margin-bottom: 15px;
      }
    }
  }
`

export default BookCover
