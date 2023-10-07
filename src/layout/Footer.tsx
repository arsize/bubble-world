import styled from 'styled-components'
import React from 'react'
import { Global } from '@/utils/config'

function Footer() {
  return (
    <Foot>
      <p>关于世界·创作指南·隐私保护指引</p>
      <br />
      <p>举报邮箱：jubao@gmail.com</p>
      <br />
      <p>联系我们 © 2023 {Global.websiteName}</p>
      <br />
      <p>一起吹个泡泡吧</p>
      <br />
      <p>吹起阳光下五彩斑斓的梦</p>
    </Foot>
  )
}

const Foot = styled.div`
  font-size: 13px;
  color: #8590a6;
  text-decoration: none;
  margin-top: 15px;
`

export default Footer
