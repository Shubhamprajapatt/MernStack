const data=document.getElementById("container");
fetch("https://jsonplaceholder.typicode.com/users/1")
.then((response)=>response.json())
.then((user)=>{
    const card=document.createElement("div")
    card.className="card"
    card.innerHTML=`
    <h1>User Details</h1>
    <p>Name"${user.name}</p>
    <p> ID:${user.id}</p>
    <p> Addres:${user.address.street}</p>
    <p> Phone:${user.phone}</p>
`
  data.appendChild(card)
})