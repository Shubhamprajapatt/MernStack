// // Normal function
// function showdata(){
//     console.log("This is grow tech");

// }
// showdata();

// Normal function with return keyword
// function shodetails(companyname){
//     let finaldetails=("Own by Drf")
//     return companyname  + finaldetails;
//}

// let op=shodetails("Grow Tech");
// console.log(op);

// // //Arrow Function => its a another way by which youn can  make the function bcoz it has shortest syntax
// const hey=()=>{
//     console.log("heyy");
// }
// hey();

// // named arrow function
//  const greet= function sayhello(){
//     console.log("Hello gyus ");
//  }
//  greet();

// //  //with retrurn anomyous arrow function
//  const addtonum=(a,b)=>{
//     return a+b;
//  }
//  let store=addtonum(10,20);
//  console.log(store);

//  // with return named arow function
//  const multonum= function getmul(x,y)
//  {
//     return x*y;
//  }
//  let result=multonum(2,6);
//  console.log(result);

// //single line
//  const getdata= ()=> 10+15;
//  let opp=getdata();
//  console.log(opp);

//  //single line
// // console.log(host);
// //  const host=()=>{
// // return ("heyyyyy");
// //  }

// console.log(y1);//undefined
// var  y1=()=> console.log("heyyyyy");

// //table program
// let a=parseInt(prompt("Enter a number you want table"))
//  console.log("table of ",a);
// for(let i=1;i<=10;i++){

//  console.log(i*a);

// }

// //pure function
// function pure() {
//   console.log("hello");
//   return true;
// }
// let output = pure();
// console.log(output);


// //Impure function
// let x = 2;
// function impure() {
//   return x++;
// }
// // let result = impure(x);
// console.log(impure(x));
// console.log(impure(x));
// console.log(impure(x));
// console.log(impure(x));


// //IIFE function
// console.log(
//   (function () {
//     return ("jay ho");
//   })()
// );
 
// //callback function
function parent(innerfun){
    console.log("hey i am paraent ");
     innerfun();
    
}
parent(child)
function child(){
    console.log("hey i am child");
    
}