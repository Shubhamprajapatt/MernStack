
import { useState } from "react";
import  "../components/Card.css"

function Card({ data ,carditem,setcarditem }) {
    const [trackbtn,settrackbtn]=useState(true); 
     let[count,setcount]=useState(data?.quantity)
     const already=carditem?.find((item)=>{
        return item?.id===data?.id;
     })
     function Increment(){
        console.log("inc");
        setcount(data.quantity++);
        
     }
     function decrement(){
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
                                    decrement();
                                }}>-</p>
                                <p>{already?.quantity}</p>
                                <p onClick={() => {
                                    Increment();
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
