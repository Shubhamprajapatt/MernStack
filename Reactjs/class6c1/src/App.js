import { useState } from "react";
import Child1 from "./components/Child1";

function App() {
  const [name,setname]=useState();
  function getdata(data){
    setname(data);
  }

  return (
  <div className="App">
    <p >{name}</p>
    <Child1 getdata={getdata}/>
    </div>
  );
}

export default App;
