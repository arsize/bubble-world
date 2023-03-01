import { HighlightOutlined } from '@ant-design/icons'
import { Button } from 'antd'
import styled from 'styled-components'

const Create = () => {
  return (
    <CreateBox>
      <div className="block-line">
        <HighlightOutlined />
        <div className="title">创作中心</div>
      </div>
      <div className="block">
        <Button type="primary">写文章</Button>
      </div>
    </CreateBox>
  )
}

const CreateBox = styled.div`
  .block {
    display: flex;
    justify-content: center;
    margin-top: 15px;
    color: white;
  }
`

export default Create
