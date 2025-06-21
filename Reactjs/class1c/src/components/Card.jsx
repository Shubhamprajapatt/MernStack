import "../App.css";

function Card({myname , myage , mycity,changeage ,myquli}){
    return (<div className="card">
       <p>My Name is {myname}</p>
       <button> change name</button>
       <p>My city is {mycity}</p>
       <button>change city </button>
        <p> My age is {myage}</p>
       <button onClick={()=>{
        changeage(55)
       }}>change age</button>
       <p>My Qualification is {myquli} </p>
       <button>change quali</button>
      <p>My state</p>
       <button>change state</button>

    </div>)
}
export default Card;