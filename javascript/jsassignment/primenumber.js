let a = prompt("enter your number")
a = Number(a);
let b;
let c = 0;

for (b = 1; b <= a; b++) {
    if (a % b === 0) {
        c++;
    }
}
if (c === 2) {
    console.log(a,"number is prime number");
} else {
    console.log(a,"number is not prime number");

}