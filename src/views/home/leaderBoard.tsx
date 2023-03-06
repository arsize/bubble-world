import { TrophyOutlined } from '@ant-design/icons'
import styled from 'styled-components'
import React from 'react'

const Leaderboard = () => {
  return (
    <BorardBox>
      <div className="block-line">
        <TrophyOutlined />
        <div className="title">字数排行</div>
        <div className="more">
          <span style={{ color: '#056de8' }}>日</span> / <span>周</span>
        </div>
      </div>
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
    </BorardBox>
  )
}

const BorardBox = styled.div`
  .block-line {
    position: relative;
    .more {
      position: absolute;
      right: 0;
      font-size: 13px;
      color: #777777;
      cursor: pointer;
    }
  }
  .block {
    margin-top: 10px;
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
