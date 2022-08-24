/*
let js = "amazing";
console.log(20 + 30 + 60);

console.log("Jonas");
console.log(7474);

let firstName = "Jonas";
console.log(firstName);

let country = "India";
let continent = "Asia";
let population = 1300000000;

console.log(country);
console.log(continent);
console.log(population);


// DATA TYPES - Primitives and objects
let isFun = true;
console.log(isFun);

console.log(typeof true);
console.log(typeof "Hello");

isFun = "NOPE";

let year;
console.log(year);
console.log(typeof year);

year = 1999;
console.log(typeof year);

console.log(typeof null);

let isIsland = false;
let language;
console.log(typeof isIsland);
console.log(typeof language);


// LET, CONST , VAR
let age = 30;
age = 31; // reassignment, mutated the variable

const birthYear = 1991;
// birthYear = 1990; // Error - immutable variable const

// const job; // error - need an initial value

var job = "programmer";
job = "teacher";

lastName = "pinky"; // CREATES A PROPERTY ON THE GLOBAL OBJECT, NOT A VARIABLE IN CURRENT SCOPE
console.log(lastName);
*/

// CODING CHALLENGE 1
/*
Mark and John are trying to compare their BMI (Body Mass Index), which is
calculated using the formula:
BMI = mass / height ** 2 = mass / (height * height) (mass in kg
and height in meter).
Your tasks:
1. Store Mark's and John's mass and height in variables
2. Calculate both their BMIs using the formula (you can even implement both
versions)
3. Create a Boolean variable 'markHigherBMI' containing information about
whether Mark has a higher BMI than John.
Test data:
§ Data 1: Marks weights 78 kg and is 1.69 m tall. John weights 92 kg and is 1.95
m tall.
§ Data 2: Marks weights 95 kg and is 1.88 m tall. John weights 85 kg and is 1.76
m tall.


const markMass = 78;
const markHeight = 1.69;
const johnMass = 92;
const johnHeight = 1.95;

const markBMI = markMass / markHeight ** 2;
console.log(markBMI);

const johnBMI = johnMass / johnHeight ** 2;
console.log(johnBMI);

const markHigherBMI = markBMI > johnBMI;
console.log(markHigherBMI);
*/

// STRINGS AND TEMPLATE LITERALS

const firstName = "Jonas";
const job = "teacher";
const birthYear = 1991;
const year = 2037;

const jonas = `I'm ${firstName}, a ${year - birthYear} years old ${job}.`;
console.log(jonas);