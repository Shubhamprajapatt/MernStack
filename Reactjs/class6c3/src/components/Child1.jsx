import React, { useContext } from 'react'
import { mycontext } from '../App'

function Child1 (){
 const{uname,age}=useContext(mycontext)
  return (
    <div>
      <h1>Child 1</h1>
      <p>Name:- {uname}</p>
      <p>Age:- {age}</p>
    </div>
  )
}

export default Child1
