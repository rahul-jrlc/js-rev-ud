"use strict";

// JAVASCRIPT BEHIND THE SCENES

// SCOPING IN PRACTICE

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