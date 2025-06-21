import { useState } from "react";
import "../components/Card.css"

function Card({ data }) {
    const [trackbtn,settrackbtn]=useState(true)
  return ( 
    <div className="product-card">
       <img src={data?.image} alt="img" className="product-img" />
      <h2 className="product-name">{data?.productName}</h2>
      <p className="product-rating">Rating: {data?.rating} ⭐</p>
      <p className="product-madeBy">Made by: {data?.madeBy}</p>
      <p className="product-price">Price: ₹{data?.actualPrice}</p>
      {
        trackbtn===true?(
       <div>
        <p>
            {data.description.substr(0,50)}
            <div><button onClick={()=>{
                settrackbtn(!trackbtn)
            }}>Read More</button></div>
        </p>
        </div>):(
             <p>
            {data.description}
            <div><button onClick={()=>{
                settrackbtn(!trackbtn)
            }}>Read Less</button></div>
        </p>

        )
        }  
 </div>
  )
}

export default Card;
