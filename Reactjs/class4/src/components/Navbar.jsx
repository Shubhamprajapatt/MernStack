import { NavLink } from "react-router-dom";
import "./Navbar.css";

function NavBar({carditem}){
  return (


    <nav className="navbar">
      <ul className="nav-list">
        <li><NavLink to="/"  className="active-Link">Home</NavLink></li>
        <li><NavLink to="/about" className="active-Link">About</NavLink></li>
        <li><NavLink to="/contact" className="active-Link">Contact</NavLink></li>
        <li><NavLink to="/Mycart" className="active-link">MyCart
        {
          carditem?.length>0?(<p>{carditem.length}</p>) :("")
        }
        </NavLink></li>
        
      </ul>
    </nav>
  )
}

export default NavBar;
