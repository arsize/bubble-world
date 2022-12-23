import { useEffect, useState } from 'react'

function useName(age: number) {
  const [name, setName] = useState('名称')
  useEffect(() => {
    setTimeout(() => {
      setName(`张悦航${age}`)
    }, 2000)
  }, [age])

  return name
}

export default useName
