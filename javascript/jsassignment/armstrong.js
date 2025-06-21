let z=prompt("enter a Number ")
console.log(z);
let sum=0;
let digit;
let orignal=z;

while(z!=0){
    digit=z%10;
    sum=sum+digit*digit*digit;
    z=Math.floor(z/10);

}
console.log(orignal);
console.log(sum);


if(orignal==sum){
    console.log("Number is armstrong Number");
    
}
else{
    console.log("Number is not armstrong number");
    

}