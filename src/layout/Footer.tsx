import styled from 'styled-components'

function Footer() {
  return (
    <Foot>
      <p>关于世界·创作指南·隐私保护指引</p>
      <br />
      <p>举报邮箱：jubao@gmail.com</p>
      <br />
      <p>联系我们 © 2023 滴水书屋</p>
      <br />
      <p>世界是天空中落下的一滴水</p>
      <br />
      <p>希望它终能变成海洋</p>
      <br />
    </Foot>
  )
}

const Foot = styled.div`
  font-size: 13px;
  color: #8590a6;
  text-decoration: none;
`

export default Footer
