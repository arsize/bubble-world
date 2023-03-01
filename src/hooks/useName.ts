import { useEffect, useState } from 'react'

function useName(age: number) {
  const [name] = useState('名称')
  useEffect(() => {
    setTimeout(() => {}, 2000)
  }, [age])

  return name
}

export default useName
