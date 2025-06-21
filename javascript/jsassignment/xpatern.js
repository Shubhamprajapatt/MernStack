//  *     *
//   *   *
//    * *
//     *
//    * *      
//   *   *         
//  *     *            
// *       * 
let rows = 5;
let both="";
for (let i = rows - 1; i >= 1; i--) {
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

 for ( let i = 2; i <= rows; i++) {
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
console.log(both);
