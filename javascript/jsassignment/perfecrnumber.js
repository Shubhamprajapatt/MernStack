// sum of devisior of a number equal to actual no.//

let sum=0;
const n=prompt("enter a number you want find its perfect or not ")
console.log(n);
for(let i=1; i<n;i++){
    if(n%i==0){
        sum=sum+i;
    }
}
if(sum==n){
    console.log(sum,"Number is prefect Number");  
}
else{
    console.log("Number is not perfect number");
}
