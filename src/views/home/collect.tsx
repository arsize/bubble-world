import { HeartOutlined } from '@ant-design/icons'
import { WorldPanel } from './worldPanel'
import React from 'react'
import WorldRoundIcon from '@/components/WorldRoundIcon'
import { Button, Card } from 'antd'
import { AsideEnum } from '../../components/aside'
import useUsersStore from '@/store/userInfo'
import { NFlex } from '@/components/atomic'
import { useNavigate } from 'react-router-dom'

const Collect = () => {
  const userInfo = useUsersStore()
  const nav = useNavigate()
  return (
    <WorldPanel>
      <Card
        title={
          <div>
            <HeartOutlined />
            <span style={{ marginLeft: '5px' }}>{AsideEnum.COLLECT}</span>
          </div>
        }
        size="small"
        loading={false}
      >
        {userInfo.token ? (
          <div className="world-list">
            <WorldRoundIcon width="20%" iconSize={28} name={'黑猫警长'} />
            <WorldRoundIcon width="20%" iconSize={28} name={'九州'} />
          </div>
        ) : (
          <NFlex>
            <Button onClick={() => nav('/login')} type="primary">
              请登录
            </Button>
          </NFlex>
        )}
      </Card>
    </WorldPanel>
  )
}

export default Collect
