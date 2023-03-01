import CustomIcon from '@/components/common/CustomIcon'
import style from '@/less/header.module.less'
import { Icons } from '@/components/common/CustomIcon'
import { Avatar, Badge, Switch } from 'antd'
import { BulbOutlined, SettingOutlined } from '@ant-design/icons'

const Header: React.FC = () => {
  return (
    <div className={style.header}>
      <div className="d-header">
        <div className="warp">
          <div className="contents clearfix">
            <div className="title">
              <CustomIcon iconPath={Icons.SHUIDI} width={40} />
              <div style={{ marginLeft: '10px' }}>
                滴水书屋
                <span style={{ fontSize: '10px', color: '#333333' }}>
                  Beta1.0
                </span>
              </div>
            </div>
            <div className="panel clearfix">
              <div className="header-buttons">
                <ul className="custom-header-links">
                  <li className="headerLink vdm actived">
                    <a href="">首页</a>
                  </li>
                  <li className="headerLink vdm">
                    <a href="">世界</a>
                  </li>
                  <li className="headerLink vdm">
                    <a href="">书库</a>
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
                <Avatar
                  style={{ backgroundColor: '#fde3cf', color: '#f56a00' }}
                >
                  A
                </Avatar>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Header
