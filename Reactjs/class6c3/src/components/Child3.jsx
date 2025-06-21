import { useContext } from "react"
import { mycontext } from "../App"

function Child3 (){
    const {uname,age}=useContext(mycontext)
  
  return (
    <div>
      <h1>Child 3</h1>
      <p>Name:- {uname}</p>
      <p>Age:- {age}</p>
    </div>
  )
}

export default Child3
