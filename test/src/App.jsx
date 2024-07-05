import { useState } from 'react'
import Add from './Add'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    hello
    <Add  num1={10}num2={20}/>
    </>
  )
}

export default App
