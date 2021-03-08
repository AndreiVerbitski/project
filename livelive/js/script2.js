// "use strict";

// if (4 == 9) {
//     console.log("ok");
// } else {
//     console.log("Error");
// };



// if (num < 49) {
//     console.log("Error");
// } else if (num > 100) {
//     console.log("a lot");
// } else {
//     console.log("Ok!");
// };

// (num === 50) ? console.log("Ok!") : console.log("Error");

// const num = 50;

// switch (num) {
//     case 49:
//         console.log("Error");
//         break;
//     case 100:
//         console.log("Error");
//         break;
//     case 51:
//         console.log("True!!");
//         break;
//     default:
//         console.log("Not this time))");
//         break;
// };

// let theNumber = Number(prompt("Enter number"));

// if (!Number.isNaN(theNumber)) {
//     console.log("Это число является корнем числа " + theNumber * theNumber);
// }
// else {
//     console.log("Hey why you didnt enter a number?");
// };

// let justNumber = Number(prompt("Enter the number: "));

// if (justNumber < 10) {
//     console.log("You entered less then 10 " + justNumber );
// } else if (justNumber < 100) {
//     console.log("You entered less then 100 " + justNumber);
// } else if (justNumber < 1000) {
//     console.log("You entered a number less then 1000 " + justNumber);
// } else {
//     console.log("WHy you entered not a number?? bitch");
// };

// let number = 0;

// while (number <= 12) {
//     console.log(number);
//     number += 2;
// };

// let result = 1,
//     counter = 0;

// while (counter < 10) {
//     result *= 2;
//     counter += 1;
// }
// console.log(result);
// let num = 50;

// while (num < 55) {
//     console.log(num);
//     num++;
// };

// do {
//     console.log(num);
//     num++;
// } while (num < 55);

// for (let i = 1; i < 10; i++) {
//     if (i === 6) {
//         continue;
//     };
//     console.log(i);
// };
"use strict";

// let n = "#";
// while (n.length <= 7) {
//     console.log(n);
//     n = n + "#";
    
// }

for (let i = 0; i <= 100; i++) {
    if (i % 3 ==0 && i % 5 ==0){
        console.log(i + " FIzz and Buzz")
    }
    else if (i % 3 == 0) {
        console.log(i);
        console.log("fizz");
    }else if (i % 5 == 0 && i % 3 !=0) {
        console.log(i);
        console.log("buzz")
    }
}