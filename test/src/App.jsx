import { useState } from 'react'
import Add from './Add'
import Numbers from './Numbers'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    hello
    <Add  num1={10}num2={20}/>
    <h1>calculator</h1>
    <Numbers />
    </>
  )
}

export default App
