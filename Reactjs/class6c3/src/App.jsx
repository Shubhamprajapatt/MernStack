import { createContext, useContext, useState } from 'react'
import Child1 from './components/Child1';
import Child2 from './components/Child2';
import Child3 from './components/Child3';

export const mycontext=createContext();
function App() {
const [age,setage]=useState("23")

const uname="hariom";

function printtable(){
  for(let i=1;i<=10;i++){
    console.log(`2*$[i]`,2*i);
    
  }
}
const user={
  uname,
  setage,
  age,
  printtable
}

  return (
    <>
   <mycontext.Provider value={user}>
    <Child1/>
    <Child2/>
    <Child3/>
   </mycontext.Provider>
    </>
  )
}

export default App
