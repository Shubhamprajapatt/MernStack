
// console.log(this);// this keyword give by defalut window object

//second case=>
// const obj={
//     uname:"mohit",
//     cast:"mewada",
//     printname: function(){
//         console.log(this.uname);
//         console.log(this);
//          }
//     };
// obj.printname();


//  third case=>if you use thiskeyword inside the arrow function that time you cant not the acceses the value  it give undefind
// const obj={
//     uname:"mohit",
//     cast:"mewada",
//     printname: ()=>{
//         console.log(this.uname);
//         console.log(this);
//          }
//     };
// obj.printname();


// fourth case=> 
//     function bolonamonamo(){
//         {
//             console.log(this)
//         }
//     }
//    bolonamonamo();

//    //if i want to point my object so that time use new the calling time function
//    function bolonamonamo(){
//         {
//             console.log(this)
//         }
//     }
//     new bolonamonamo();


//another case
// const user={
//     id:"c123",
//     name:"demo",
//     printdata:function(){
//             console.log(this);

//         function sayhello()
//         {
//             console.log(this);

//         }
//         sayhello();
//     }
    
// };
// user.printdata();
//Async Await 
//Async keyword use to make function asynchronus
//Await keyword is optional
//Await keyword always use inside the asyn function 
// by default async return promises

// const url="https://jsonplaceholder.typicode.com/users";
// const ans= fetch(url);
// let arr=[]
//  const data = ans.then((op)=>{
//     op.json().then((opt)=>{
// console.log(opt);})
// }).catch((e)=>{console.log(e)
// })
// console.log(arr);

// async function callapi(url){
//     const response= await fetch("https://jsonplaceholder.typicode.com/users");
//     // console.log(response);
//      const result = await response.json();
//     console.log(result);
// }
// callapi();


// const user11 = {
//    userName: "syam",
//    age: 20,
//    address: {
//     city: "katni",
//      state: "mp",
//    },
//  };

// const user1 = {
//   userName: "syam",
//   age: 20,
//   address: {
//     city: "katni",
//     state: "mp",
//   },
// };
// const user2 = user1;
// user2.userName = "Dr. K. Anji Reddy";
// user2.address.city = "indore";
// console.log("user1", user1); //uerername chnage hoga
// console.log("user2", user2);


// const user11 = {
//    userName: "syam",
//    age: 20,
//    address: {
//     city: "katni",
//      state: "mp",
//    },
//  };


//  const user12 = { ...user11};
//  user12.userName = "Raghav";
//  user12.address.city = "Jab"; 
//  console.log("user11", user11);  //only city chnage jab
//  console.log("user12", user12); //name and city both change

//2nd category
// const user12 = { ...user11,...user11.address };
// user12.userName = "Raghav";
// user12.address.city = "Jabalpur"; 
// console.log("user11", user11); 
// console.log("user12 has newly assign city which in user11", user12); 

// 3rd category
// const user12 = JSON.parse(JSON.stringify(user11));
// user12.userName = "Raghav";
// user12.address.city = "Jabalpur"; 
// console.log("no changes bcs we do deep copy", user11); 
// console.log("name and city in user12 object has changed", user12); 


//Q2
// const myNumbers = [2, 4, 5, 6, 7];
// const modifyArray = myNumbers.map((num) => {
//   return (num = num / 2);

// });
// const modifyArray1 = myNumbers.map((num) =>{
//     console.log(num/2);3 
//     num = num / 2
//     });
// console.log("Given Array ", myNumbers);         // 2,4,5,6,7
// console.log("Modified array ", modifyArray);    // 1,2,2.1,3,3.1
// console.log("without return ", modifyArray1);   // 1,2,2.1,3,3.1

//Q3
// const Numbers = [0, 2, 4, 5, 6, 7];
// const filterArray = Numbers.filter((num) => {
//   return num >= 4;
// });
// console.log("Orginal array ", Numbers); // 0,2,4,5,6,7
// console.log("Filter array", filterArray);//4,5,6,7


// function values(a,...args,c){//error ayegi kyunki rest parameter should be last parameter
//   console.log(a,args,c);
// }

// function values(a, c, ...args) {
//   console.log(a, c, args);  // 1,10 [2,4,5,6,8]
// }
// values(1, 10, 2, 4, 5, 6, 8);

//Q5
// async function PrintValue() { //by default asyn function return promis "hello world"
//   return "Hello world";
// }
//  let ans = PrintValue();

// console.log(ans)


//Q6  
// let result = PrintValue();//error ayegi kyuki PrintValue not define
// console.log(result);

//Q7
// function outer() {
//   function inner() {
//     console.log(x);
//   }
//   const x = 10;
//   return inner;
// }
// const result = outer();
// result();// 10 becoz its a part of closer and lexical scope

// debugger
// for(var i=0;i<=3;i++){
//    setTimeout(()=>{
//        console.log(i)
//    },1000);
//  }

//Q8
//  for(var i=0;i<=3;i++){
//   function ab(i){
//       setTimeout(()=>{
//       console.log(i)
//   },3000);}
//   ab(i);
// }//0 1 2 3

// //Q9
// for (let i = 0; i <= 3; i++) {
//   setTimeout(() => {
//     console.log(i);
//   }, 1000 + i * 1000);
// }
// 0 1 2 3 ayega per har k i per settime out function lagaya hai

//Q10
// const foo=()=>{
//   console.log(this.name);//in arrow funtion this keyword not applicable
//  }

//Q11
// function foo1() {
//   console.log(this.name);  //mahi
  
//   const bar = () => {
//     console.log(this.name);//mahi
//   };
//   bar();
// }
// foo1.call({ name: "Mahi" });

//Q12
//  const user = {
//   id: 123,
//   name: "abc",
//   address: {
//     city: "katni",
//     state: "MP",
//   },
// };
// Object.freeze(user);
//  console.log(user.id)  //in frezee case you can only read data 
//  user.name="kamlesh"//in this case you can not be modified dta
//  console.log(user)


//Q13
// async function greet() {
//   return new Promise(() => {});
// }
// const ans = greet();
// console.log("Pending the promise",ans);//it retrun promis which is in pending state

// Q14
//  console.log(typeof(NaN));// this is number
// console.log(Nan===NaN);// Refrence error NAN is not defind


//Q15 Destructure the property from the object
// const user = { 
//     userNamename: "ramesha", 
//     age: 24 };

//     const {userNamename ,age}=user;
//     console.log(userNamename);//it print username
//     console.log(age);// it print age
    
    
// const  x= null;
// console.log( typeof x);



