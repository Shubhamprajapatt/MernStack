
import { useContext, useState } from "react";
import  "../components/Card.css"
import { bitescontext } from "../context/MyContext";

function Card({ data}) {
    const{
        trackbtn,
        settrackbtn,
        carditem,
       addTocard,
       Increment,
        decrement,

    }=useContext(bitescontext)
     const already=carditem?.find((item)=>{
        return item?.id===data?.id;
     })
     
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
            {data.description.substr(0,50)}
            <div><button onClick={()=>{
                settrackbtn(!trackbtn)
            }}>Read More</button></div>
        </div>):(
             <div>
            {data.description}
            <div><button onClick={()=>{
                settrackbtn(!trackbtn)
            }}>Read Less</button></div>
        </div>)}  
        {
           already !== undefined ? (
                        <div className='cartBtn'>
                            <div className="add-to-cart1">
                                <p onClick={() => {
                                    decrement(data);
                                }}>-</p>
                                <p>{already?.quantity}</p>
                                <p onClick={() => {
                                    Increment(data);
                                }}>+</p>
                            </div>
                        </div>
                    ):
        

       <div className="add-to-cart-container">
    <button className="add-to-cart-btn"  onClick={()=>{
        addTocard(data)
    }}>Add To Cart</button>
</div>
}
 </div>
  );
}

export default Card
