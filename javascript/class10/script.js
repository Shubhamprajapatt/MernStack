// Freeze >In this case you  can only read the propertie of object but can't modifed object
// const data={
//     id:101,
//     city:"Indore",
//     age:23,
// };
// Object.freeze(data);// freez an the object
// console.log(data);

// data.city="bhopal"; //if you want to modified freez object in this case you only read thr object
// console.log(" I want to modifeid the freeze object but it can't",data);

// delete.data.id;// i m trying to delet property of freeeze object
// console.log("I am try to delet the property of freeze object",data);



//Seal > In this case you  can update the exsisting properties of object. but not add new properties in that object 
// const obj={
//     name:"jatin",
//     course:"Btech",
// };
// console.log("orignal object",obj);

// Object.seal(obj);//here i seal the object
// obj.course="MBA";//update the exixting properties of object 
// console.log("Modified seal object",obj);

// obj.addres="Indore";//you can't add new properties in object 
// console.log("you cant add new properties in object",obj);


//Rest operator=> rest means Remaing properties of object .and it is indirectly array,
// it should be last parameter
// // //rest paramerter should be inside the function
// function sum (a,b,...c){
//     for (let i=0; i<length;i++){
//   console.log(c[i]);
//     }
//     console.log(c);
//     return a+b; 
// }
// let op=sum(10,5,8,7,9,1,3);
// console.log(op);

//Distructuring=> array value into independent seprate variable
  //array of structuring
  const arr=["mohan","kumar"]
const [fname,lname]=arr;
console.log(fname,lname); //this is no: id name key inside the data object that means given undifined and undefiend

//nested array distructruing
const nestedarr=[1,32,[56,90,[98,686],8],987]
 let [a,b,[c,d,[e,g],h],i]=nestedarr;
 console.log(g);
 




// object of structuring
const obje={
  id:"c2145",
  name:"ghynshym",
};
const {id,name}=obje;
console.log(id,name);

//nested object distructuring
const cofee={
  brand:"abc",
  price:{
  rs:100,
},
};
const {rs}=cofee.price
console.log(rs);

