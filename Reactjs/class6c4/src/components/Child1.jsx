import { useContext } from 'react'
import { mycontext } from '../context/MyContext'
function Child1() {
    const {uname,age}=useContext (mycontext)
  return (
    <div>
      <h1>Child1</h1>
      <p>Name:- {uname} </p>
      <p>Age:- {age} </p>
    </div>
  )
}

export default Child1
