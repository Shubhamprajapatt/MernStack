import React from 'react'
import { useContext } from 'react'
import { mycontext } from '../context/MyContext'

function Child2(){
    const {uname,age,printtable}=useContext(mycontext)
    printtable()
  return (
    <div>
        <h1>Child2</h1>
      <p>Name:- {uname}</p>
      <p>Age:- {age}</p>
      
    </div>
  )
}

export default Child2
