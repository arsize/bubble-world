import { useState } from 'react'

function useAge(fn: Function) {
  const [age, setAge] = useState(10)

  fn(setAge)

  return age
}

export default useAge
