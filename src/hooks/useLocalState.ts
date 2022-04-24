import { useState, useEffect } from 'react'

const useLocalState = (
  key: string
): [string, React.Dispatch<React.SetStateAction<string>>] => {
  const localStorageData = localStorage.getItem(key) ?? ''
  const [data, setData] = useState<string>(localStorageData)

  useEffect(() => {
    localStorage.removeItem(key)
    localStorage.setItem(key, data)
  }, [data, key])

  return [data, setData]
}

export default useLocalState
