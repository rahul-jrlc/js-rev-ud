"use strict";

// FUNCTIONS
/*
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


// FUNCTION DECLARATION VS EXPESSION

// FUNCTION DECLARATION
function calcAge1(birthYear) {
    // const age = 2037 - birthYear;
    return 2037 - birthYear;
};

const age1 = calcAge1(1999);
console.log(age1);


// FUNCTION EXPRESSION
const calcAge2 = function (birthYear) {
    return 2037 - birthYear;
};
const age2 = calcAge2(1991);
console.log(age2);

function describeCountry(country, population, capitalCity) {
    return `${country} has ${population} people and its capital city is ${capitalCity}.`
};
const india = describeCountry("India", "1.3 billion", "New Delhi");
console.log(india);

const finland = describeCountry("Finland", "6 million", "Helsinki");
console.log(finland);

const bangladesh = describeCountry("Azerbaijan", "2 million", "Dhaka");
console.log(bangladesh);

function percentageOfWorld1(population) {
    return (population / 7900) * 100;
};

const argentina = percentageOfWorld1(3);
console.log(argentina);

const usa = percentageOfWorld1(30);
console.log(usa);

const vatican = percentageOfWorld1(2);
console.log(vatican);

const percentageOfWorld2 = function (population) {
    return (population / 7900) * 100;
};

const india2 = percentageOfWorld2(130);
console.log(india2);
*/

// ARROW FUNCTIONS

const calcAge3 = birthYear => 2037 - birthYear;
const age3 = calcAge3(1967);
console.log(age3);

const yearsUntilRetirement = (birthYear, firstName) => {
    const age = 2037 - birthYear;
    const retirement = 65 - age;
    return `${firstName} retires in ${retirement} years.`;
};

const retireAge = yearsUntilRetirement(1999, "Bob");
console.log(retireAge);