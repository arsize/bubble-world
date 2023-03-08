import CustomIcon from '@/components/common/CustomIcon'
import { Icons } from '@/components/common/CustomIcon'
import { Avatar, Badge, Switch, Dropdown, MenuProps, theme } from 'antd'
import { BulbOutlined, SettingOutlined } from '@ant-design/icons'
import React from 'react'
import { useNavigate } from 'react-router-dom'
import styled from 'styled-components'
import useThemeStore from '@/store'

const { useToken } = theme

const Header: React.FC = () => {
  const nav = useNavigate()
  const { token } = useToken()
  const { change } = useThemeStore()
  const items: MenuProps['items'] = [
    {
      key: 1,
      label: <div onClick={() => nav('/user')}>我的主页</div>,
    },
    {
      key: 2,
      label: <div onClick={() => nav('/')}>退出</div>,
    },
  ]
  const changeTheme = () => {
    change()
  }
  return (
    <HeaderWrapper
      style={{ backgroundColor: token.colorBgLayout, color: token.colorText }}
    >
      <div className="d-header">
        <div className="warp">
          <div className="contents clearfix">
            <div className="title" onClick={() => nav('/')}>
              <CustomIcon iconPath={Icons.SHUIDI} width={40} />
              <div style={{ marginLeft: '10px' }}>
                滴水世界&nbsp;
                <span
                  style={{ fontSize: '10px', color: token.colorTextQuaternary }}
                >
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
                      onClick={changeTheme}
                      className="switch"
                      checkedChildren="夜间"
                      unCheckedChildren="白天"
                    />
                  </li>
                </ul>
              </div>
              <div className="user-avatar">
                <Dropdown menu={{ items }} placement="bottom">
                  <Avatar
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
    </HeaderWrapper>
  )
}

const HeaderWrapper = styled.div`
  width: 100%;
  position: sticky;
  top: 0;
  z-index: 1000;
  .d-header {
    height: 4em;
    display: flex;
    align-items: center;
    width: 100%;
    box-shadow: 0 2px 4px -1px rgb(0 0 0 / 25%);
    backface-visibility: hidden;
    .warp {
      width: calc(100% - 20px);
      height: 100%;
      max-width: 1110px;
      margin-right: auto;
      margin-left: auto;
      padding: 0 10px;
      .contents {
        display: flex;
        align-items: center;
        height: 100%;
        position: relative;
        .title {
          display: flex;
          align-items: center;
          height: 100%;
          min-width: 165px;
          cursor: pointer;
        }
        .panel {
          position: relative;
          display: flex;
          flex: 0 0 auto;
          margin-left: auto;
          align-items: center;
          height: 100%;
          .header-buttons {
            display: flex;
            align-items: center;
            height: 100%;

            .custom-header-links {
              display: flex;
              align-items: center;
              height: 100%;
              & > .actived {
                font-weight: 600;
                font-synthesis: style;
              }

              .headerLink {
                list-style: none;
                cursor: pointer;
                height: 100%;
                display: flex;
                position: relative;
                align-items: center;
                padding: 0 12px;
                box-sizing: border-box;
                .switch {
                  background-color: black;
                }
                .bottom-line {
                  width: 0;
                  position: absolute;
                  bottom: 0;
                  left: 50%;
                  transform: translate(-50%, -50%);
                }
                a {
                  color: var(--header_primary);
                  font-size: var(--font-up-1);
                }
              }
              & > .actived > .bottom-line {
                width: 60%;
                height: 3px;
              }
            }
          }
          .user-avatar {
            margin-left: 20px;
            cursor: pointer;
          }
        }
      }
    }
  }
  .icon_h {
    color: white;
  }
`

export default Header
