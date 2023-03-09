import { TrophyOutlined } from '@ant-design/icons'
import styled from 'styled-components'
import React from 'react'
import { Card } from 'antd'
import { AsideEnum } from '../../components/aside'

const Leaderboard = () => {
  return (
    <BorardWrapper>
      <Card
        title={
          <div>
            <TrophyOutlined />
            <span style={{ marginLeft: '5px' }}>{AsideEnum.LEADERBOARD}</span>
          </div>
        }
        size="small"
        loading={false}
      >
        <div className="block">
          <div className="num-line">
            <div className="name">
              <span>arsize</span>
            </div>
            <div className="line">
              <div className="real-num-line"></div>
            </div>
          </div>
          <div className="num-line">
            <div className="name">
              <span>夏天</span>
            </div>
            <div className="line">
              <div className="real-num-line"></div>
            </div>
          </div>
          <div className="num-line">
            <div className="name">
              <span>夏天</span>
            </div>
            <div className="line">
              <div className="real-num-line"></div>
            </div>
          </div>
          <div className="num-line">
            <div className="name">
              <span>sunskey</span>
            </div>
            <div className="line">
              <div className="real-num-line"></div>
            </div>
          </div>
          <div className="num-line">
            <div className="name">
              <span>夏天</span>
            </div>
            <div className="line">
              <div className="real-num-line"></div>
            </div>
          </div>
        </div>
      </Card>
    </BorardWrapper>
  )
}

const BorardWrapper = styled.div`
  .more {
    font-size: 13px;
    color: #777777;
    cursor: pointer;
  }
  .block {
    margin-top: 5px;
    width: 100%;
    .num-line {
      width: 100%;
      height: 25px;
      font-size: 13px;
      display: flex;
      align-items: center;

      .name {
        width: 30%;
        display: flex;
        justify-content: center;
      }
      .line {
        width: 70%;
        .real-num-line {
          width: 80%;
          height: 5px;
          border-radius: 5px;
          background-color: #056de8;
        }
      }
    }
  }
`

export default Leaderboard
