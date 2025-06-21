import { useState } from "react";
import { Routes,Route } from "react-router-dom";
import {products} from "./Utils/Product.jsx"
import Home from "./pages/Home.jsx";
import About from "./pages/About.jsx";
import Contact from "./pages/Contact.jsx";
import Pagenotfound from "./pages/Pagenotfound.jsx";
import Navbar from "./components/Navbar.jsx";
import Mycart from "./pages/Mycart.jsx";

function App() {
  const [product] =useState(products);
   const [carditem, setcarditem]=useState([]);
  return (
    <div className="App">
      <Navbar carditem={carditem}/>
     <Routes>
      <Route path="/" element={<Home product={product} carditem={carditem} setcarditem={setcarditem}/>}/>
      <Route path="/about" element={<About/>}/>
      <Route path="/contact" element={<Contact/>}/>
      <Route path="/mycart" element={<Mycart carditem={carditem} setcarditem={setcarditem}/>}/>
      <Route path="*" element={<Pagenotfound/>}/>
</Routes>
    </div>
  );
}

export default App;
