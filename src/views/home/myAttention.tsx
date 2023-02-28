import styled from 'styled-components'

const MyAttention = () => {
  return (
    <Attention>
      <div className="line">
        <div className="round"></div>
        <div>主题世界</div>
      </div>
    </Attention>
  )
}

const Attention = styled.div`
  padding: 5px 14px;
  box-sizing: border-box;
  .round {
    width: 10px;
    height: 10px;
    background-color: #f6f6f6;
    border-radius: 50%;
    border: 1px solid #ece9e9;
  }
  .line {
    font-weight: 500;
    display: flex;
    align-items: center;
  }
`

export default MyAttention
