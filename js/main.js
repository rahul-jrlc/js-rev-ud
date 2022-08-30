"use strict";

// JAVASCRIPT BEHIND THE SCENES

// SCOPING IN PRACTICE
/*
function calcAge(birthYear) {
    const age = 2037 - birthYear;

    function printAge() {
        let output = `${firstName}, you are ${age} years old, born in ${birthYear}.`;
        console.log(output);

        if (birthYear >= 1981 && birthYear <= 1996) {
            var millenial = true;
            // CReating NEW variable with same name as outer scope variable
            const firstName = "Steven";

            // Reassigning outer scope's variable
            output = "NEW OUTPUT";
            const str = `Oh and you're a millenial, ${firstName}.`;
            console.log(str);

            function add(a, b) {
                return a + b;
            }

        }
        // console.log(str); // error, since const is block scoped
        console.log(millenial); // var is function scoped - no error
        // console.log(add(2, 3)); // error, since function defined in if block of code - undefined
        // functions are block scoped only in strict mode
        console.log(output);
    }
    printAge();
    return age;
};

const firstName = "Jonas";

calcAge(1991);

// console.log(age); // error, since age is not in the global scope, but rather in the scope of calcAge function

// printAge(); // error
*/

// HOISTING AND THE TEMPORAL DEAD ZONE

// Variables hoisting
console.log(me);
// console.log(job);
// console.log(year);

var me = "Jonas"; // hoisted during memory creation phase, value set to unefined
let job = "teacher";// cannot access before initialization
const year = 1991;

// Hoisting with functions
console.log(decl(2, 3));

// console.log(expr(2, 3));

// console.log(arrow(2, 3));

function decl(a, b) {
    return a + b;
};

const expr = function (a, b) {
    return a + b;
};

var arrow = (a, b) => a + b;

// Example
if (!numProducts) deleteShoppingCart();

var numProducts = 10;

function deleteShoppingCart() {
    console.log("All products deleted.");
};

var x = 1; // creates a property on the window object
let y = 2;
const z = 3;

console.log(x === window.x); // true
console.log(y === window.y); // false
console.log(z === window.z);// false