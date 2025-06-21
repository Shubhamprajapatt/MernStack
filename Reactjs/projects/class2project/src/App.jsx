import { useState } from 'react'
import Childone from "./components/Childone"
import './App.css'

function App() {
  const [money, setmoney] = useState(10000)

  return (
    <>
   <Childone money={money}></Childone>

    </>
  )
}

export default App
