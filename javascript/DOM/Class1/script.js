// //DOM => Stands for Document Object Model , it is tree based architecture of html

// //querySelector
// const res = document.querySelector("p");
// console.log(" it return the first matching element", res);
// // const qsid=document.querySelector("#para3")
// // console.log(qsid);

// //querySelectorAll
// const result = document.querySelectorAll("p");
// console.log(" it return the ALL matching element", result);
// // const QSBC=document.querySelectorAll(".four");
// // console.log(QSBC);

// //getElementById
// const x = document.getElementById("para3");
// console.log(" it return single element which has matching id name", x);

// //getElementsByClassNam
// const y = document.getElementsByClassName("four");
// console.log("it retrun all tag those have same class name", y);

// //getElementsByTagName
// const r = document.getElementsByTagName("h1");
// console.log("it return the html collection", r);

// Event => It is Action which is perform by user,Event is always applicable on element and tag.
//addEventListener=> It is function by which you can add event on tag/element.
//this function take two perameter first parameter is event and second parameter is normal function or callback function 

// const eventt=document.querySelector("p");
// console.log(eventt);
// eventt.addEventListener("click", ()=>{
//    console.log(" clicking");
   
// })

//Scroll Event on overall window
// const eventt=document.querySelector("p");
// console.log(eventt);
// window.addEventListener("scroll", ()=>{
//    console.log(" scroll");
   
// })

//innerhtml =>It is a way to get/set or change the content oh html element or tag
//acces the html element or tag in js file
// const inner=document.getElementById("demo");
// console.log(inner);
//use innerhtml property to set or change the content of html element or tag 
// const innerh=document.getElementById("demo").innertext="Hello gyus";
// console.log(innerh);

//CreateElement() => This Method is use to create element node in your html file 
// const create=document.createElement("p");
// create.innerHTML="this is Create method";
// //Appendchild method 
// document.getElementById("mydiv").appendChild(create);

//Remove child () Method => this method remove an element's child 
// const list=document.querySelector("#list");
// list.removeChild(list.firstElementChild);
// console.log(list);

