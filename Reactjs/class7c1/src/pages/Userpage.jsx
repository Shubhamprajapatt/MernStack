import { useDispatch,useSelector } from "react-redux"
import { changeuser } from "../slices/User";
import "../pages/style.css"


function Userpage(){
   const dispatch=useDispatch();
    const uname=useSelector((state)=>state.Userslice.name);
    const uage=useSelector((state)=>state.Userslice.age);
    const uemail=useSelector((state)=>state.Userslice.email);

    function userdatahandel(){
        console.log("hweee");
        
        dispatch(changeuser())
    }
    return(
        <div className="user-details">
  <h3>User Details</h3>
  <p>Name :- {uname}</p>
  <p>Age :- {uage}</p>
  <p>Email :- {uemail}</p>
  <button onClick={userdatahandel}>Change data</button>
</div>

    )
}
export default Userpage