import { useState } from 'react'
import Joker from './Joker'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Joker/>
    </>
  )
}

export default App
