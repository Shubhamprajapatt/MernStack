let num=parseInt(prompt("Enter a number you find factorial"))
console.log(num);
let fact=1;

for(let i=1; i<=num;i++){
    fact=fact*i;
}
console.log("Factorial of givem number",num,"is =",fact);
