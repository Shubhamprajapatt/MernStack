import { Navigate, useNavigate } from "react-router-dom";
import "../components/Card.css";
import Card from "../components/Card.jsx";
import { useContext } from "react";
import { bitescontext } from "../context/MyContext.jsx";
function Mycart() {
 const {carditem,setcarditem}=useContext(bitescontext)

  const Navigate =useNavigate()
  function GotoHome() {
    Navigate("/");
  }
  return (
    <div>
      {carditem?.length === 0 ? (
        <div className="empty-cart">
          <p>There is no item in Cart</p>
          <button
            onClick={() => {
              GotoHome();
            }}
          >
            GoToHome
          </button>
        </div>
      ) : (
        <div className="card-container">
          {carditem?.map((item, index) => (
            <div key={index}>
              <Card data={item}setcarditem={setcarditem} carditem={carditem}  />
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default Mycart;
