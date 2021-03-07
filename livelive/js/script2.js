"use strict";

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

const num = 50;

switch (num) {
    case 49:
        console.log("Error");
        break;
    case 100:
        console.log("Error");
        break;
    case 51:
        console.log("True!!");
        break;
    default:
        console.log("Not this time))");
        break;
};