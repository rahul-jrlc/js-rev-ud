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


// FUNCTIONS CALLING OTHER FUNCTIONS
function cutfruitPieces(fruit) {
    return fruit * 4;
}

function fruitProcessor(apples, oranges) {
    const applePieces = cutfruitPieces(apples);
    const orangePieces = cutfruitPieces(oranges);

    const juice = `Juice with ${applePieces} pieces of apple and ${orangePieces} pieces of orange.`;
    return juice;
};

console.log(fruitProcessor(2, 3));

function percentageOfWorld1(population) {
    return (population / 7900) * 100;
};

const describePopulation = (country, population) => {
    const percent = percentageOfWorld1(population);
    return `${country} has ${population} million people, which is about ${Math.ceil(percent)}% of the world.`;
};

const india = describePopulation("India", 1300);
console.log(india);


// PART-2 CODING CHALLENGE 1

const calcAverage = (score1, score2, score3) => (score1 + score2 + score3) / 3;

const avgDolphins = calcAverage(44, 23, 71);
console.log(avgDolphins);

const avgKoalas = calcAverage(65, 54, 49);
console.log(avgKoalas);

const checkWinner = function (dolphins, koalas) {
    if (dolphins >= koalas * 2) {
        console.log(`Dolphins win (${dolphins} vs ${koalas}).`);
    } else if (koalas >= dolphins * 2) {
        console.log(`Koalas win (${koalas} vs ${dolphins}).`);
    } else {
        console.log("No winner.");
    }
};

checkWinner(avgDolphins, avgKoalas);
checkWinner((85 + 54 + 41) / 3, (23 + 34 + 27) / 3);


// INTRO TO ARRAYS

const friend1 = "michael";
const friend2 = "steven";
const friend3 = "peter";

const friends = [friend1, friend2, friend3];
console.log(friends);

const y = new Array(1991, 2008, 2020, 1786);

console.log(friends[0], friends[2]);

console.log(friends.length);

console.log(friends[friends.length - 1]);

friends[2] = "Jake";
console.log(friends);

const jonas = ["Jonas", "Schmedtmann", 2037 - 1991, "teacher", friends];
console.log(jonas);

// exercise
const calcAge = function (birthYear) {
    return 2037 - birthYear;
};

const years = [1990, 1967, 2002, 2018];

const age1 = calcAge(years[0]);
console.log(age1);

const populationInMillion = [130, 4, 6, 10];
console.log(populationInMillion.length === 4);

function percentageOfWorld1(population) {
    return (population / 7900) * 100;
};

const percentages = [percentageOfWorld1(populationInMillion[0]), percentageOfWorld1(populationInMillion[1]), percentageOfWorld1(populationInMillion[2]), percentageOfWorld1(populationInMillion[3])];
console.log(percentages);


// BASIC ARRAY METHODS (OPERATIONS)

const friends = ["michael", "steven", "peter"];

// PUSH - ADD ELEMENTS TO END OF ARRAY
const newLength = friends.push("PINKY"); // returns length of new array
console.log(newLength);
console.log(friends);

// UNSHIFT - ADD ELEMENTS TO START OF AN ARRAY
friends.unshift("TINKU");
console.log(friends);

// POP - REMOVES AND RETURNS LAST ELEMENT OF ARRAY
const poppedItem = friends.pop();
console.log(poppedItem);
console.log(friends);

// SHIFT - REMOVE AND RETURN FIRST ELEMENT OF ARRAY
const shiftedItem = friends.shift();
console.log(shiftedItem);
console.log(friends);

console.log(friends.indexOf("PINKY"));
console.log(friends.indexOf("michael"));

console.log(friends.includes("PINKY"));

// exercise
const neighbours = ["Pakistan", "Bangladesh", "China", "Sri Lanka", "Myanmar", "Bhutan"];

neighbours.push("Utopia");
console.log(neighbours);
neighbours.pop();

if (neighbours.includes("Germany")) {
    console.log("European country");
} else {
    console.log("Probably not a European country.");
};


// CODING CHALLENGE 2

const calcTip = bill => {
    if (bill >= 50 && bill <= 300) {
        return bill * 0.15;
    } else {
        return bill * 0.2;
    }
};
const bill100 = calcTip(100);
console.log(bill100);

const bills = [125, 555, 44];

const tips = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])];
console.log(tips);

const total = [bills[0] + tips[0], bills[1] + tips[1], bills[2] + tips[2]]
console.log(total);
*/

// INTRODUCTION TO OBJECTS

// object literal syntax
const jonas = {
    firstName: "Jonas",
    lastName: "Schmedtmann",
    age: 30,
    job: "teacher",
    married: false,
    friends: ["Michael", "Peter", "Steven"]
};