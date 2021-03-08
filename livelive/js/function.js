"use  strict";



function showTextMessage(text) {
    console.log(text);
    let num = 20;
    console.log(num);
}

showTextMessage("Hello, World!");


function calc(a, b) {
    return (a + b);
}

console.log(calc(100, 22));

function ret() {
    let num = 50;
    return num;
}

anotherNum = ret();
console.log(anotherNum);

const logger = function() {
    console.log("hello, world!");

};

logger();

//Стрелочная функция 
const calculator = (a, b) => { return a + b};

console.log(calculator(123, 27));