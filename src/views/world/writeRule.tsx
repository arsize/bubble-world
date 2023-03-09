import { AsideEnum } from '@/components/aside'
import { PushpinOutlined } from '@ant-design/icons'
import { Card, Collapse, Tooltip } from 'antd'
import React from 'react'

const { Panel } = Collapse
const WriteRule = () => {
  const onChange = (key: string | string[]) => {
    console.log(key)
  }
  const text = `
  黑猫警长的故事基本上是发生在一片森林里。森林公安局的黑猫警长带着它的部属白猫班长、白鸽侦探及众多警员侦破案件，维护森林的和平。黑猫警长、白猫班长、白鸽侦探、一只耳（老鼠）等是本动画的主要角色。
`
  const tip = <span>请仔细阅读创作规则</span>

  return (
    <Card
      title={
        <div style={{ cursor: 'pointer' }}>
          <Tooltip placement="top" title={tip}>
            <PushpinOutlined />
            <span style={{ marginLeft: '5px' }}>{AsideEnum.WRITERULE}</span>
          </Tooltip>
        </div>
      }
      size="small"
      loading={false}
    >
      <Collapse defaultActiveKey={['1']} accordion onChange={onChange}>
        <Panel header="围绕黑猫警长创作" key="1">
          <p>{text}</p>
        </Panel>
        <Panel header="背景" key="2">
          <p>{text}</p>
        </Panel>
      </Collapse>
    </Card>
  )
}

export default WriteRule
