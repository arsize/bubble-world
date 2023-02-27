import CustomIcon from '@/components/common/CustomIcon'
import style from '@/less/header.module.less'
import { Icons } from '@/types/enums'

const Header: React.FC = (props) => {
  return (
    <div className={style.header}>
      <div className="d-header">
        <div className="warp">
          <div className="contents clearfix">
            <div className="title">
              <CustomIcon iconPath={Icons.SHUIDI} width={40} />
            </div>
            <div className="panel clearfix">
              <span className="header-buttons">
                <ul className="custom-header-links">
                  <li className="headerLink vdm">
                    <a href=""> 安装</a>
                  </li>
                  <li className="headerLink vdm">
                    <a href=""> 安装</a>
                  </li>
                  <li className="headerLink vdm">
                    <a href=""> 安装</a>
                  </li>
                  <li className="headerLink vdm">
                    <a href=""> 安装</a>
                  </li>
                </ul>
              </span>
              <ul className="icons d-header-icons">
                <li className="header-dropdown-toggle search-dropdown">
                  {/* <CustomIcon iconPath={Icons.SEARCH} width={25} /> */}
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Header
