import { HighlightOutlined } from '@ant-design/icons'
import { Button, Card, Tooltip } from 'antd'
import styled from 'styled-components'
import React from 'react'
import { useNavigate } from 'react-router-dom'
import { AsideEnum } from '../../components/aside'

const Create: React.FC = () => {
  const nav = useNavigate()
  return (
    <CreateWrapper>
      <Card
        title={
          <div>
            <HighlightOutlined />
            <span style={{ marginLeft: '5px' }}>{AsideEnum.CREATE}</span>
          </div>
        }
        size="small"
        loading={false}
      >
        <div className="block">
          <Button type="primary" onClick={() => nav('/write')}>
            文章
          </Button>
          <Button type="default" onClick={() => nav('/write')}>
            设定
          </Button>
          <Tooltip placement="top" title={'世界贡献值不够'}>
            <Button
              disabled={true}
              type="default"
              onClick={() => nav('/write')}
            >
              创建世界
            </Button>
          </Tooltip>
        </div>
      </Card>
    </CreateWrapper>
  )
}

const CreateWrapper = styled.div`
  width: 100%;
  .block {
    width: 100%;
    display: flex;
    justify-content: space-between;
    margin-top: 5px;
    color: white;
  }
`

export default Create
