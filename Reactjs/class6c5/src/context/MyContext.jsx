import { createContext, useState } from "react";
import { Routes,Route } from "react-router-dom";
import { Products } from "../Utils/Products.jsx";
import Home from "../pages/Home.jsx";
import About from "../pages/About.jsx"
import Contact from "../pages/Contact.jsx"
import Pagenotfound from "../pages/Pagenotfound.jsx"
import NavBar from "../components/Navbar.jsx";
import Mycart from "../pages/Mycart.jsx"

export const bitescontext=createContext()
function MyContext ()  {
    const [trackbtn,settrackbtn]=useState(true); 
     let[count,setcount]=useState(1)
   const [carditem, setcarditem]=useState([]);

   function Increment(data){
        console.log("inc");
        setcount(data.quantity++);
        
     }
     function decrement(data){
        console.log("ddd");
        setcount(()=>{
            if(data.quantity===1){
                removeFromCard(data.id);
                return;
            }
            return data.quantity--;
        })
        
     }
      
    function addTocard(data) {
        console.log("btn click hone ", data);
        const kyaMeCardmeHu = carditem?.some((item) => {
            return item?.id === data?.id;
        })
        setcarditem((oldData) => {
            if (kyaMeCardmeHu) {
                alert("Me to pahle se hee cart par hu");
                return oldData;
            }
            return [...oldData, data];
        })
    }

    function removeFromCard(id){
        const filtervalaarray=carditem?.filter((item)=>{
            return item.id!=id;
        })
        setcarditem(filtervalaarray);
    }

   const user={
    Products,
    carditem,
    setcarditem,
    count,
    setcount,
    trackbtn,
    settrackbtn,
    addTocard,
    removeFromCard,
    Increment,
    decrement

   }

  return (
    <div>
        <bitescontext.Provider value={user}>
      <NavBar/>
     <Routes>
      <Route path="/" element={<Home />}/>
      <Route path="/about" element={<About/>}/>
      <Route path="/contact" element={<Contact/>}/>
      <Route path="/mycart" element={<Mycart/>}/>
      <Route path="*" element={<Pagenotfound/>}/>
</Routes>
</bitescontext.Provider>
    </div>
  )
}

export default MyContext
