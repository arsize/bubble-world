import CustomIcon from '@/components/common/CustomIcon'
import style from '@/less/header.module.less'
import { Icons } from '@/components/common/CustomIcon'
import { Avatar, Badge, Switch, Dropdown, MenuProps } from 'antd'
import { BulbOutlined, SettingOutlined } from '@ant-design/icons'
import React from 'react'
import { useNavigate } from 'react-router-dom'

const Header: React.FC = () => {
  const nav = useNavigate()
  const items: MenuProps['items'] = [
    {
      key: 1,
      label: (
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://www.antgroup.com"
        >
          我的主页
        </a>
      ),
    },
    {
      key: 2,
      label: (
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://www.antgroup.com"
        >
          退出
        </a>
      ),
    },
  ]
  return (
    <div className={style.header}>
      <div className="d-header">
        <div className="warp">
          <div className="contents clearfix">
            <div className="title" onClick={() => nav('/')}>
              <CustomIcon iconPath={Icons.SHUIDI} width={40} />
              <div style={{ marginLeft: '10px' }}>
                滴水世界&nbsp;
                <span style={{ fontSize: '10px', color: '#333333' }}>
                  Beta1.0
                </span>
              </div>
            </div>
            <div className="panel clearfix">
              <div className="header-buttons">
                <ul className="custom-header-links">
                  <li
                    onClick={() => nav('/')}
                    className="headerLink vdm actived"
                  >
                    <span>首页</span>
                  </li>
                  <li onClick={() => nav('/all')} className="headerLink vdm">
                    <span>世界</span>
                  </li>
                  <li onClick={() => nav('/stack')} className="headerLink vdm">
                    <span>库藏</span>
                  </li>
                  <li className="headerLink vdm">
                    <Badge dot={true}>
                      <BulbOutlined size={30} />
                    </Badge>
                  </li>
                  <li className="headerLink">
                    <SettingOutlined />
                  </li>
                  <li className="headerLink vdm">
                    <Switch
                      className="switch"
                      checkedChildren="夜间"
                      unCheckedChildren="白天"
                      defaultChecked
                    />
                  </li>
                </ul>
              </div>
              <div className="user-avatar">
                <Dropdown menu={{ items }} placement="bottom">
                  <Avatar
                    onClick={() => nav('/user')}
                    style={{ backgroundColor: '#fde3cf', color: '#f56a00' }}
                  >
                    A
                  </Avatar>
                </Dropdown>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Header
