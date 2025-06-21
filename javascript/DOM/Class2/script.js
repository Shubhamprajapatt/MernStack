// console.log("DOM classs 2");
//What is BOM => Window object,location,history,open(),close(),back(),forword(),go().
//console.log(window.innerHeight);
//console.log(window.innerWidth);

// Selector in js => there certain type of selector in js by  which you can access tag/element form html file

//querySelector => it return first matching element/tag
// const par=document.querySelector("p");
// console.log(par);
// par.addEventListener("click",()=>{
//     console.log("clicking event succesfull");

// })
// par.removeEventListener("click",()=>{
//     console.log("remove event");

// })

//querySelectorALL =>it return ALL matching element/tag if you select by id,class ,tagname
// const parall=document.querySelectorAll("p");
// console.log(parall);

//getElementById => it retrun single matching tag/element which has same mention id
//  const id=document.getElementById("me");
//  console.log(id);

//getElementsByClassName => it return all matching tag/element  wich has same  class  mention
//  const cll=document.getElementsByClassName("xyz");
//  console.log(cll);

//getElementsByTagName => it return
//  const tg=document.getElementsByTagName("span");
//  console.log(tg);

//custom attributr  access

//  const custom=document.querySelector("p");
//  console.log(custom);

//innerhtml => it retrun all part of tag

//Create Elemet ,  appendchild , append //
// const cree=document.querySelector(".one") ;
// console.log(cree);
// const  x=document.createElement("p");
// x.textContent="JAY MAHAKAL"
// console.log(x);
// cree.appendChild(x);

// const ddd=document.getElementsByTagName("div");
// console.log(ddd);

// ddd[0].addEventListener("click", ()=>{
//     console.log("jay ho");
// }

//
const container = document.getElementsByClassName("div1");
const mybtn = document.querySelector("button");
console.log(mybtn);

function addkaro() {
  const newpara = document.createElement("p");
  newpara.textContent = "new paragraph added";
  container[0].appendChild(newpara);
  //crete btn
  const remobtn = document.createElement("button");
  remobtn.textContent = "Remove Content";
  container[0].appendChild(remobtn);
  //event
  remobtn.addEventListener("click", () => {
  const newpara = document.querySelector("p"); 
  container[0].removeChild(newpara)
  container[0].removeChild(remobtn)
    container[0].removeChild(updbtn)
});
 const updbtn = document.createElement("button");
  updbtn.textContent = "Update Content ";
  container[0].appendChild(updbtn);
updbtn.addEventListener("click", () => {
  const newpara = document.querySelector("p"); 
   newpara.textContent="Update changes";
   container[0].appendChild(newpara)
});
}
mybtn.addEventListener("click", () => {
  addkaro();
});










//second way
// const container=document.getElementsByClassName("div1")
// const mybtn=document.querySelector("button")
// console.log(mybtn);
// mybtn.addEventListener("click",()=>{
//     const newpara=document.createElement("p")
//     newpara.textContent="new paragraph added";
//    container[0].appendChild(newpara)
//     })
