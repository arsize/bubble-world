import { UsergroupAddOutlined } from '@ant-design/icons'
import styled from 'styled-components'

const Recommend = () => {
  return (
    <RecommendBox>
      <div className="block-line">
        <UsergroupAddOutlined />
        <div className="title">推荐关注</div>
      </div>
    </RecommendBox>
  )
}

const RecommendBox = styled.div`
  .block {
    .tip {
      font-size: 10px;
      color: #646464;
    }
  }
`

export default Recommend
