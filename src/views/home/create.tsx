import { HighlightOutlined } from '@ant-design/icons'
import { Button, Tooltip } from 'antd'
import styled from 'styled-components'
import React from 'react'
import { useNavigate } from 'react-router-dom'

const Create: React.FC = () => {
  const nav = useNavigate()
  return (
    <CreateBox>
      <div className="block-line">
        <HighlightOutlined />
        <div className="title">创作中心</div>
      </div>
      <div className="block">
        <Button type="primary" onClick={() => nav('/write')}>
          文章
        </Button>
        <Button type="default" onClick={() => nav('/write')}>
          设定
        </Button>
        <Tooltip placement="top" title={'世界贡献值不够'}>
          <Button disabled={true} type="default" onClick={() => nav('/write')}>
            创建世界
          </Button>
        </Tooltip>
      </div>
    </CreateBox>
  )
}

const CreateBox = styled.div`
  width: 100%;
  .block {
    width: 100%;
    display: flex;
    justify-content: space-between;
    margin-top: 15px;
    color: white;
  }
`

export default Create
