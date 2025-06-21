import { NavLink } from "react-router-dom"
import "../components/NavBar.css"

function Navbar(){
    return(
        <div>
   <nav className="navbar">
  <NavLink to="/" className="nav-link">Admin</NavLink>
  <NavLink to="/user" className="nav-link">User</NavLink>
</nav>
</div>
    )
}
export default Navbar