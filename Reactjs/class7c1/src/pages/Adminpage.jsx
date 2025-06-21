import { useSelector } from "react-redux"
import { useDispatch } from "react-redux";
import { adminhandle } from "../slices/Admin.js";
import "../pages/style.css"


function Adminpage(){
    const dispatch=useDispatch();
const fname= useSelector((state)=>state.adminslice.name);
const ages= useSelector((state)=>state.adminslice.age);
const emails= useSelector((state)=>state.adminslice.email);
function datachnage()
{
    dispatch(adminhandle())
}
    return(
        <div className="admin-container">
    <h3 className="admin-title">Admin Details</h3>
    <p className="admin-info">Name :- {fname}</p>
    <p className="admin-info">Age :- {ages}</p>
    <p className="admin-info">Email :- {emails}</p>
    <button className="admin-button" onClick={() => datachnage()}>
        Change Admin data
    </button>
</div>

    )
}
export default Adminpage