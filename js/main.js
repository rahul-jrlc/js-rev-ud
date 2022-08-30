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
/*
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


// THE this KEYWORD
console.log(this); // points to the window object

const calcAge = function (birthYear) {
    console.log(2037 - birthYear);
    console.log(this); // undefined
};
// Regular function call
calcAge(1991);

// Arrow functions do not get their own this keyword
// Arrow functions use the lexical this keyword i.e this keyword of the parent scope or parent function
const calcAgeArrow = birthYear => {
    console.log(2037 - birthYear);
    console.log(this); // will point to the window object
};

calcAgeArrow(1991);

// METHOD CALL

const jonas = {
    year: 1991,
    calcAge: function () {
        console.log(this); // this keyword points to the object calling the method
        console.log(2037 - this.year);
    }
};

jonas.calcAge();


const matilda = {
    year: 2017
};

// METHOD BORROWING
matilda.calcAge = jonas.calcAge;
matilda.calcAge(); // this points to matilda - the object calling the method - ALWAYS

const f = jonas.calcAge;
f();
*/

// REGULAR FUNCTIONS VS ARROW FUNCTIONS

// var firstName = "Matilda";

const jonas = { // object literal in the global scope
    firstName: "Jonas",
    year: 1991,
    calcAge: function () {
        // console.log(this);
        console.log(2037 - this.year);

        // SOLUTION 1
        // const self = this; // self or that inside method points to the object
        // const isMIllenial = function () {
        //     console.log(self);
        //     console.log(self.year >= 1981 && self.year <= 1996);
        //     //console.log(this.year >= 1981 && this.year <= 1996);
            
        // };

        // SOLUTION 2
        const isMIllenial = () => {
            console.log(this);
            console.log(this.year >= 1981 && this.year <= 1996);
            //console.log(this.year >= 1981 && this.year <= 1996);
            
        };
        isMIllenial(); // regular function call
    },

    greet: () => {
        console.log(this);
        console.log(`Bhosdiwala ${this.firstName}.`)
        // arrow func uses this keyword of parent scope - global scope
        // no firstName property on the global window object
    }
};

jonas.greet();
// console.log(this);
// console.log(this.firstName);

jonas.calcAge();

// ARGUMENTS KEYWORD - array of arguments
const addExpr = function (a, b) {
    console.log(arguments);
    return a + b;;
};
addExpr(2, 4); 
addExpr(2, 3, 4, 5, 6);

var addArrow = (a, b) => {
    console.log(arguments);
    return a + b;
};
addArrow(2, 4, 4, 5, 6);

