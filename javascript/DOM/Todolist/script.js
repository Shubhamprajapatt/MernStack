const div=document.querySelector(".inputtext");
const content=document.querySelector(".container");
const btn=document.querySelector("button");

function add(){
const inputfield=document.getElementById("input").value;
const para=document.createElement("p");
para.textContent=inputfield;
 content.appendChild(para);

 const updatebtn=document.createElement("button");
 updatebtn.innerText="Update";
 content.appendChild(updatebtn);
 //addevent on update button

 updatebtn.addEventListener("click",()=>{
const savebtn=document.createElement("button");
savebtn.innerText="save";
content.prepend(savebtn);
content.removeChild(updatebtn);
inputfield.value=para.innerText;

savebtn.addEventListener("click", ()=>{
     para.innerText=inputfield.value;
     content.appendChild(para)
     content.prepend(updatebtn)
     content.removeChild(savebtn)
    
})
 })

 const removebtn=document.createElement("button");
 removebtn.innerText="Delete";
 content.appendChild(removebtn);
 inputfield.value=""
 //addevent on remove button
 removebtn.addEventListener("click", ()=>{
     content.removeChild(para);
    content.removeChild(removebtn);
    content.removeChild(updatebtn);
})
}
btn.addEventListener("click",()=>{
 add();

})

