import { createContext, useState } from "react"
import Child1 from "../components/Child1";
import Child2 from "../components/Child2";
import Child3 from "../components/Child3";
 
 export const mycontext=createContext();
function MyContext(){
    const [age,setage]=useState("25")
    const uname="Ramkishan"
    function printtable(){
        for(let i=1;i<=10;i++){
            console.log(`2*$[i]=`,2*i);
            
        }
    }
    const user={
        age,
        uname,
        setage,
        printtable
    }
    return(
        <div>
    <mycontext.Provider value={user} >
    <Child1/>
    <Child2/>
    <Child3/>
    </mycontext.Provider>
        </div>
    )
}
export default MyContext