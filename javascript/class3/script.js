// *****
// *   *
// *   *
// *   *
// *****
// let n = 5;
// let hollw = "";
// for (let i = 1; i <= n; i++) {
//   for (let j = 1; j <= n; j++) {
//     if (i == 1 || i == 5 || j == 1 || j == 5) {
//       hollw = hollw + "*";
//     } else {
//       hollw = hollw + " ";
//     }
//   }
//   hollw = hollw + "\n";
// }
// console.log(hollw);

//
// * 
// * * 
// *   * 
// *     * 
// * * * * * 
// let q=5;
// let holow1= "";
// for (let i = 1; i<=q; i++) {
//   for (let j=1; j<=i; j++) {
//     if (j==1 || j==i || i==q) {
//       holow1=holow1+"* ";
//     } else {
//       holow1=holow1+ "  ";
//     }
//   }
//   holow1=holow1+ "\n";
// }
// console.log(holow1);




//print this pattern//
// *****
// *****
// *****
// *****
// *****
// let nn = 5;
// let hollw2 = "";
// for (let i = 1; i <= nn; i++) {
//   for (let j = 1; j <= nn; j++) {
//       hollw2 = hollw2 + "*";
//      }
//     hollw2 = hollw2 + "\n";
// }
// console.log(hollw2);

//WAP tp print Abcd
// A
// A B
// A B C
// A B C D
// A B C D E
let a = 5;
let pattter = "";
for (let b = 1; b <= a; b++) {
  for (j = 1; j <= b; j++) {
    pattter += String.fromCharCode(64 + j) + " ";
  }
  pattter += "\n";
}
console.log(pattter);

//        *
//      * * *
//    * * * * *
//  * * * * * * *
// * * * * * * * * *
// let x = 4;
// let result = "";
// for (let i = 0; i <= x; i++) {
//   for (let j = 0; j < 2 * (x - i) - 1; j++) {
//     result = result + " ";
//   }
//   for (let k = 0; k < 2 * i + 1; k++) {
//     result = result + "* ";
//   }
//   result = result + "\n";
// }
// console.log(result);

//
//     *
//    * *
//   * * *
//  * * * *
// * * * * *
//  * * * *
//   * * *
//    * *
//     *
// let y = 5;
// let twopattern = "";
// for (let i = 1; i <= y; i++) {
//   for (let j = 1; j <= y - i; j++) {
//     twopattern += " ";
//   }
//   for (let k = 1; k <= i; k++) {
//     twopattern += "* ";
//   }
//   twopattern += "\n";
// }
// for (let i = y - 1; i >= 1; i--) {
//   for (let j = 1; j <= y - i; j++) {
//     twopattern += " ";
//   }
//   for (let k = 1; k <= i; k++) {
//     twopattern += "* ";
//   }
//   twopattern += "\n";
// }

// console.log(twopattern);

//     *   
//    * *      
//   *   *         
//  *     *            
// *       *               
//  *     *
//   *   *
//    * *
//     *

let rows = 5;
let both="";
 for (i = 1; i <= rows; i++) {
        for (j = 1; j <= rows - i; j++) {
            both += " ";
        }
        for (k = 1; k<=rows* i - 1; k++) {
            if (k== 1 || k== 2 * i - 1) {
                both += "*";
            } else {
                both += " ";
            }
        }
      both += "\n";
    }
for (i = rows - 1; i >= 1; i--) {
        for (j = 1; j <= rows - i; j++) {
            both += " ";
        }
        for (k= 1; k<= 2 * i - 1; k++) {
            if (k== 1 || k== 2 * i - 1) {
             both += "*";

            } else {
             both += " ";

            }
        }
     both += "\n";

    }
console.log(both);


//

//1.Wap to get the factorial of any no.
// let x=prompt();
// console.log("this is no. which we entered",x);
// let fact=1;
// for(let i=1;i<=x;i++){
//     fact*=i;
//     //fact=fact*i;
// }
// console.log("factorioal of ",x,"is ",fact);


//2.wap to tell enter no. is perfect or not
// let num=prompt();
// let sum=0;
// console.log("entered no. is",num);
// //perfect no.=> sum of devisor of a number equal to actual no.

// for(let j=1;j<num;j++){
//     if(num%j==0){
//         sum+=j;
//         //sum=sum+j;
//     }
// }

// // compare karo sum ko actual no. se
// if(sum==num){
//     console.log("this is the perfect no.");
// }
// else{
//         console.log("this is not a perfect no.");

// }


//3.wap to tell enter no. is armstorng or not

// let z=prompt();
// console.log("entered no . is ",z);
// let sum1=0;
// let digit;
// let original=z;
// while(z!=0){
//     digit=z%10;
//     sum1=sum1+digit*digit*digit;
//     z=Math.floor(z/10);

// }
// console.log(original);
// console.log("sum of queue of digit =",sum1);
// if(original==sum1){
//     console.log("this is the armstrong no.");
// }
// else{
//         console.log("this is not a armstrong no.");

// }


//4.wap to tell enter no. is armstorng or not

// let m = prompt();
// console.log("entered no . is ", m);
// let sum2 = 0;

// let digit = 0;
// let actualM = m;
// while (m != 0) {
//     let fact = 1;
//     //digit nikal lo
//     digit = m % 10;
//     console.log(digit);

//     // jo digit nikala hai uska factorial nikal lo
//     for (let i = 1; i <= digit; i++) {
//         fact = fact * i;
//     }

//     //sum of factorial nikal lo
//     sum2 = sum2 + fact;
//     m = Math.floor(m / 10);

// }
// console.log("actual entered no.", actualM);
// console.log("sum of digit factorial", sum2);

// if (actualM == sum2) {
//     console.log("this is the strong no.");
// }
// else {
//     console.log("this is not a strong no.");

// }


// function myFunction(a, b) {
//   let sum = a + b;
//   debugger; // Execution will pause here when myFunction is called
//   let product = a * b;
//   return [sum, product];
// }

// myFunction(5, 10);



//Wap to print
/*
* * * * *
* * * * *
* * * * *
* * * * *
* * * * *
 */
// #include <iostream>
// using namespace std;
// int main() {
// int size;
// cin>>size;
// cout<<"you enter this one=>"<<size<<endl;
// cout<<"This is the square "<<endl;
// for (int row = 1; row <= size; row++) {

//     for (int col = 1; col <= size; col++) {
//        cout<<"+";
//     }
//     cout<<endl;

// }





//Wap to print
/*
* * * * *
*       *
*       *
*       *
* * * * *

cout<<"this is the hollow square "<<endl;
for (int row = 1; row <= size; row++) {

    for (int col = 1; col <= size; col++) {
     if((row==1||row==size)||(col==1||col==size)){
         cout<<"+";
     }
     else{
         cout<<" ";
     }
    }
    cout<<endl;

}
    return 0;
}




/*

*
* *
* * *
* * * *
* * * * *

*/

// #include <iostream>
// using namespace std;
// int main() {
// int size;
// cin>>size;
// cout<<"you enter this one=>"<<size<<endl;
// cout<<"This is the square "<<endl;
// for (int row = 1; row <= size; row++) {

//     for (int col = 1; col <= row; col++) {
//        cout<<"+";
//     }
//     cout<<endl;

// }

/*

* * * * *
* * * *
* * *
* *
*

*/
// Online C++ compiler to run C++ program online
// #include <iostream>
// using namespace std;
// int main() {
// int size;
// cin>>size;
// cout<<"you enter this one=>"<<size<<endl;
// cout<<"This is the square "<<endl;
// int x=size;
// for (int row = 1; row <= size; row++) {

//     for (int col = 1; col <= x; col++) {
//        cout<<"+";
//     }
//     x=x-1;
//     cout<<endl;

// }





/*


This is the square 
1
23
456
78910
1112131415
1514131211
10987
654
32
1

*/

// Online C++ compiler to run C++ program online
// #include <iostream>
// using namespace std;
// int main() {
// 	int size;
// 	cin>>size;
// 	cout<<"you enter this one=>"<<size<<endl;
// 	cout<<"This is the square "<<endl;
// 	int x=size;
// 	int count=1;
// 	for (int row = 1; row <= size; row++) {

// 		for (int col = 1; col <= row; col++) {
// 			cout<<count;
// 			count++;
// 		}
	
// 		cout<<endl;

// 	}

// int count1=15;

// 	for (int row = 1; row <= size; row++) {

// 		for (int col = 1; col <= x; col++) {
// 			cout<<count1;
// 			count1--;
// 		}
// 	x=x-1;
// 		cout<<endl;

// 	}


// cout<<"this is the hollow square "<<endl;
// for (int row = 1; row <= size; row++) {

//     for (int col = 1; col <= size; col++) {
//      if((row==1||row==size)||(col==1||col==size)){
//          cout<<"+";
//      }
//      else{
//          cout<<" ";
//      }
//     }
//     cout<<endl;

// }
// 	return 0;
// }



/*


+ 
+ + 
+ + + 
+ + + + 
+ + + + + 
+ + + + 
+ + + 
+ + 
+ 


*/

// Online C++ compiler to run C++ program online
// #include <iostream>
// using namespace std;
// int main() {
// 	int size;
// 	cin>>size;
// 	cout<<"you enter this one=>"<<size<<endl;
// 	cout<<"This is the square "<<endl;
// 	int x=size;
// 	int count=1;
// 	for (int row = 1; row <= size; row++) {

// 		for (int col = 1; col <= row; col++) {
		
// 		    cout<<"+ ";
// 		}
	
// 		cout<<endl;

// 	}

// 	for (int row = 1; row <= size; row++) {

// 		for (int col = 1; col <= x-1; col++) {
// 		cout<<"+ ";
// 		}
// 	     x=x-1;
// 		cout<<endl;

// 	}

// return 0;
// }
