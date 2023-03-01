import style from '@/less/listItem.module.less'
import { Avatar } from 'antd'
import { FireOutlined, HeartOutlined } from '@ant-design/icons'

const Item: React.FC = () => {
  const a =
    '这里是预览区,这里是预览区这里是预览区这里是预览区这里是预览区这里是预览区这里是预览区,览区这里是预览区览区这里是预览区览区这里是预览区览区这里是预览区览区这里是预览区'
  return (
    <div className={style.listItem}>
      <div className="avt-box">
        <Avatar size={25} />
        <span className="name">sunskey</span>
        <span className="signature">期望有一天，展翅高飞</span>
      </div>
      <div className="top-box">
        <div className="text-name">请教一个 类型声明的的问题</div>
      </div>
      <div className="content-pre-box">{a}</div>
      <div className="bottom-tools">
        <div className="answer-num">
          <FireOutlined /> <span style={{ marginLeft: '3px' }}>22</span>
        </div>
        <div className="view-num">
          <HeartOutlined />
          <span style={{ marginLeft: '3px' }}>3</span>
        </div>
        <div className="time">2023-2-28 11:36</div>
        <div className="from">
          来自世界·<span className="hover-link">黑猫警长</span>
        </div>
      </div>
    </div>
  )
}

export default Item
