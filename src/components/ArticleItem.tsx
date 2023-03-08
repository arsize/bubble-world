import { FireOutlined, HeartOutlined } from '@ant-design/icons'
import { theme } from 'antd'
import { AliasToken } from 'antd/es/theme/internal'
import React from 'react'
import { useNavigate } from 'react-router-dom'
import styled from 'styled-components'

const { useToken } = theme

const ArticleItem: React.FC<Aricle> = ({
  author,
  pre,
  world,
  title,
  ctime,
  like,
  hot,
}) => {
  const nav = useNavigate()
  const { token } = useToken()
  console.log('articel')
  return (
    <ListItemWrapper token={token}>
      <div className="avt-box">
        <span style={{ fontSize: '13px', color: token.colorTextTertiary }}>
          {author.name}
        </span>
        <span className="dividing"></span>
        <span style={{ fontSize: '13px', color: token.colorTextTertiary }}>
          {author.signature}
        </span>
      </div>
      <div className="top-box" onClick={() => nav('/article')}>
        <div className="text-name">{title}</div>
      </div>

      <div className="content-pre-box" onClick={() => nav('/article')}>
        {pre}
      </div>
      <div className="bottom-tools" style={{ color: token.colorTextTertiary }}>
        <div className="answer-num">
          <FireOutlined /> <span style={{ marginLeft: '3px' }}>{hot}</span>
        </div>
        <div className="view-num">
          <HeartOutlined />
          <span style={{ marginLeft: '5px' }}>{like}</span>
        </div>
        <div className="time">{ctime}</div>
        <div className="from">
          来自世界&nbsp;·&nbsp;
          <span className="hover-link" onClick={() => nav('/world')}>
            {world}
          </span>
        </div>
      </div>
    </ListItemWrapper>
  )
}

const ListItemWrapper = styled.div.attrs(
  (props: { token: Partial<AliasToken> }) => props
)`
  border-bottom: 1px solid ${(props) => props.token.colorSplit};
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  .avt-box {
    width: 100%;
    margin-bottom: 14px;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    .name {
      margin-left: 10px;
      color: inherit;
      font-size: 15px;
    }
    .dividing {
      width: 1px;
      height: 14px;
      display: inline-block;
      background: #e5e6eb;
      margin: 0 8px;
    }

    .signature {
      margin-left: 10px;
      color: #646464;
      font-size: 14px;
    }
  }
  .top-box {
    width: 100%;
  }
  .text-name {
    font-size: 1.1em;
    cursor: pointer;
    &:hover {
      color: ${(props) => props.token.colorPrimaryActive};
    }
  }
  .content-pre-box {
    width: 100%;
    margin-top: 9px;
    margin-bottom: 9px;
    line-height: 1.67;
    color: ${(props) => props.token.colorTextSecondary};
    font-family: -apple-system, BlinkMacSystemFont, Helvetica Neue, PingFang SC,
      Microsoft YaHei, Source Han Sans SC, Noto Sans CJK SC, WenQuanYi Micro Hei,
      sans-serif;
    font-size: 15px;
    cursor: pointer;
    &:hover {
      color: ${(props) => props.token.colorText};
    }
  }
  .bottom-tools {
    width: 100%;
    margin-top: 9px;
    display: flex;
    font-size: 14px;
    position: relative;
    .answer-num {
      margin-right: 10px;
    }
    .view-num {
      margin-right: 10px;
    }
    .from {
      position: absolute;
      right: 0;
      cursor: pointer;
      &:hover {
        .hover-link {
          text-decoration: underline;
        }
      }
    }
  }
`

export default ArticleItem
