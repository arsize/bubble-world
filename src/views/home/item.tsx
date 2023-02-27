import style from '@/less/listItem.module.less'
import { Avatar } from 'antd'

const Item: React.FC = () => {
  return (
    <div className={style.listItem}>
      <div className="text-name">请教一个 类型声明的的问题</div>
      <div className="right-info-box">
        <div className="user-join">
          <Avatar />
        </div>
        <div className="answer-num">22</div>
        <div className="view-num">100</div>
        <div className="time">2月27日</div>
      </div>
    </div>
  )
}

export default Item
