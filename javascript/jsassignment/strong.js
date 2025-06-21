let m=prompt("enter a Number ")
console.log(m);
let sum=0;
let digit;
let actualno=m;


while(m!=0){
let fact=1;
    digit=m%10;

    for(let i=1; i<=digit; i++){
        fact=fact*i;
    }
       sum=sum+fact;
       m=Math.floor(m/10);
}
console.log("sum of digit factorial",sum);
if(actualno==sum){
    console.log("Number is strong Number");
    
}
else{
    console.log("Number is not a strong number");
    

}

