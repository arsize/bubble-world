import ListContent from '@/views/home/list'
import styled from 'styled-components'
import { Card, Space, Tabs } from 'antd'
import type { TabsProps } from 'antd'
import Block, { AsideEnum } from './aside'
import Footer from '@/layout/Footer'
import React from 'react'
import { device } from '@/utils/device'

const onChange = (key: string) => {
  console.log(key)
}

const items: TabsProps['items'] = [
  {
    key: '1',
    label: `最新`,
  },
]

function Home() {
  return (
    <HomeWrapper>
      <Card bodyStyle={{ padding: 0 }} size="small" loading={false}>
        <Tabs
          tabBarStyle={{
            padding: '0 20px',
            marginBottom: 0,
          }}
          defaultActiveKey="1"
          items={items}
          onChange={onChange}
        />
        <div className="info-box">
          <ListContent />
        </div>
      </Card>

      <Aside>
        <Block type={AsideEnum.WORLD} />
        <Block type={AsideEnum.COLLECT} />

        <Block type={AsideEnum.CREATE} />
        <Block type={AsideEnum.RECOMMEND} />
        <Block type={AsideEnum.LEADERBOARD} />

        <Footer />
      </Aside>
    </HomeWrapper>
  )
}

const HomeWrapper = styled.div`
  display: flex;
  justify-content: space-between;
`

const Aside = styled.div`
  margin-left: 20px;
  @media ${device.mobileL} {
    display: none;
  }
`
export default Home
