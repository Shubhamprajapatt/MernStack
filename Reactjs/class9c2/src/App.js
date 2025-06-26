import { useState } from 'react';

import Home from "./Components/Home.jsx"
import Navbar from "./Components/Navbar.jsx"
import Data from "./Utils/Data.jsx"
function App() {
  const [data, setData] = useState(Data)
  const [copydata,setCopyData]=useState(data)
  function getValueFromNavbar(item) {
    console.log("item", item)
    let array1 = data.filter((cardItem) => {
      return cardItem === item
    })
    setData(array1)
  }


  return (
    <div className="App" style={{textAlign:'center', fontSize:"18px", backgroundColor:"pink", width:"300px" , height:"auto" ,margin: "0 auto" , marginTop:"5em"}}>
      <Navbar getValueFromNavbar={getValueFromNavbar} setData={setData} data={data} copydata={copydata}/>
      <Home data={data} />

    </div>
  );
}

export default App;