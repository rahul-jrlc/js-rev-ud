"use strict";

// FUNCTIONS

function logger() {
    console.log("My name is Pinky.");
};

logger(); // invoking / running / calling the function
logger();

function fruitProcessor(apples, oranges) {
    // console.log(apples, oranges);
    const juice = `Juice with ${apples} apples and ${oranges} oranges.`;
    return juice;
};

fruitProcessor(5, 0);
const juice1 = fruitProcessor(3, 5);
const appleJuice = fruitProcessor(5, 0);
const orangeJuice = fruitProcessor(0, 3);
console.log(appleJuice);
console.log(orangeJuice);
console.log(juice1);
