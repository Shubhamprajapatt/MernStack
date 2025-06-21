import { useContext } from "react"
import { mycontext } from "./main"

function App() {
  
  //use your contexapi
  const {uname,printtable}=useContext(mycontext);
  printtable()
   console.log(uname);
  
  return (
    <>
<p>{uname}</p>

    </>
  )
}

export default App
