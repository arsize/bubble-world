import useName from '@/hooks/useName'
import useBearStore from '@/store'

const Aside: React.FC = () => {
  const bear = useBearStore((state) => state.bears)
  return <div>aside{bear}</div>
}

export default Aside
