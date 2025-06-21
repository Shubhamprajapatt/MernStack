//Map();Methodm => if you want to perforn operation on araay element that time use map() method

let arr=[3,5,4,8,9]
let result=arr.map((items)=>{
    return items*3;
});
console.log(result);

//filter(); Method =>  if you want to perforn operation with conditon on array element that time use filter() method,
//  it return array of all element
  let aray=[3,5,6,8,2]
    let even=aray.filter((item)=>{
        if (item %2==0){
            return item;
        }
    });
    console.log(even);
    
//find(); Method=>
// it return single element   of array
let rr=[3,5,6,7,9] 
let even1=rr.find((a)=>{
   if (a %2==0){
            return a;
        }
});

//reduce();Method this method give result in bollen form
let ary=[3,5,7,8,9]
let sum=ary.reduce((acc,cur)=>{
    return acc+cur;

})
console.log(sum);

//splice() Method=> this method can insert item , update item ,delete item,in array  by indexing of array.
//this method modifeied the orignal array

let arr = [4, 5, 6, 7, 8, 9];

// let modifyArray = arr.map((item) => {
//     return item * 2;
// })

// console.log(modifyArray);

// console.log(arr);


// let even = arr.filter((item) => {

//     return item % 2 === 0;
// })

// console.log(even);


// let even = arr.find((item) => {
//     return item % 2 === 0;
// });

// console.log(even);


// let even = arr.some((item) => {
//     return item % 2 === 0;
// });

// console.log(even);


// let even = arr.reduce((item) => {
//     return item % 2 === 0;
// });

// console.log(even);



const numbers = [1, 2, 3, 4, 5];
const sum = numbers.reduce((acc, curr) => acc + curr, 0);
console.log(sum);