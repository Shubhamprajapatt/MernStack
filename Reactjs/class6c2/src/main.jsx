
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createContext, useState } from 'react'
//create the contex
 export const mycontext=createContext();
//wite your all code variable, function ,object apko jo use krna ho
const uname="Sourabh"
function printtable(){
    for(let i=1;i<=10;i++){
        console.log(`2*${i}=`,2*i);
    }
}
createRoot(document.getElementById('root')).render(
    //Mount your componet and  make sure data can pass by value attribute
<mycontext.Provider value={{uname,printtable}}>
    <App/>
</mycontext.Provider>
)
