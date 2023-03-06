import style from '@/less/listItem.module.less'
import { FireOutlined, HeartOutlined } from '@ant-design/icons'
import React from 'react'
import { useNavigate } from 'react-router-dom'

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
  return (
    <div className={style.listItem}>
      <div className="avt-box">
        <span style={{ fontSize: '13px', color: '#8590a6' }}>
          {author.name}
        </span>
        <span className="dividing"></span>
        <span style={{ fontSize: '13px', color: '#8590a6' }}>
          {author.signature}
        </span>
      </div>
      <div className="top-box" onClick={() => nav('/article')}>
        <div className="text-name">{title}</div>
      </div>

      <div className="content-pre-box" onClick={() => nav('/article')}>
        {pre}
      </div>
      <div className="bottom-tools">
        <div className="answer-num">
          <FireOutlined /> <span style={{ marginLeft: '3px' }}>{hot}</span>
        </div>
        <div className="view-num">
          <HeartOutlined />
          <span style={{ marginLeft: '5px' }}>{like}</span>
        </div>
        <div className="time">{ctime}</div>
        <div className="from">
          来自世界·
          <span className="hover-link" onClick={() => nav('/world')}>
            {world}
          </span>
        </div>
      </div>
    </div>
  )
}

export default ArticleItem
