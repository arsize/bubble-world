import style from '@/less/home.module.less'
import ListContent from '@/views/home/list'

function Home() {
  return (
    <div className={style.home}>
      <ListContent />
    </div>
  )
}

export default Home
