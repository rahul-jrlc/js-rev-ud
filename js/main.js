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


// STRINGS AND TEMPLATE LITERALS

const firstName = "Jonas";
const job = "teacher";
const birthYear = 1991;
const year = 2037;

const jonas = `I'm ${firstName}, a ${year - birthYear} years old ${job}.`;
console.log(jonas);


// IF ELSE STATEMENTS

const age = 14;
// const isOldEnough = age >= 18;

if (age >= 18) {
    console.log("Buddha");
} else {
    const yearsLeft = 18 - age;
    console.log("Baccha", yearsLeft);
};

const birthYear = 2003;

let century;

if (birthYear <= 2000) {
    century = 20;
} else {
    century = 21;
};
console.log(century);
*/

// CODING CHALLENGE 2
/*
Use the BMI example from Challenge #1, and the code you already wrote, and
improve it.
Your tasks:
1. Print a nice output to the console, saying who has the higher BMI. The message
is either "Mark's BMI is higher than John's!" or "John's BMI is higher than Mark's!"
2. Use a template literal to include the BMI values in the outputs. Example: "Mark's
BMI (28.3) is higher than John's (23.9)

const markMass = 78;
const markHeight = 1.69;
const johnMass = 92;
const johnHeight = 1.95;

const markBMI = markMass / markHeight ** 2;
console.log(markBMI);

const johnBMI = johnMass / johnHeight ** 2;
console.log(johnBMI);

if (johnBMI > markBMI) {
    console.log(`John's BMI ${johnBMI} is higher than Mark's ${markBMI}.`);
} else {
    console.log(`Mark's BMI ${markBMI} is higher than John's ${johnBMI}.`);
};


// TYPE CONVERSION

const inputYear = "1991";
console.log(Number(inputYear), inputYear);
console.log(Number(inputYear) + 18); // number 18 automatically converted to a string

console.log(Number("Pinky")); // NaN - invalid number
console.log(typeof NaN); // number

console.log(String(3434), 3434);

// TYPE COERCION
console.log("I am " + 23 + " years old.");

console.log("23" - "33" - 98);


// TRUTHY AND FALSY VALUES
console.log(Boolean(0));
console.log(Boolean(NaN));
console.log(Boolean(null));
console.log(Boolean(undefined));
console.log(Boolean(''));

const money = 0;
if (money) {
    console.log("Don't spend it all.");
} else {
    console.log("GAREEB")
};

let height;
if (height) {
    console.log("Defined.");
} else {
    console.log("undefined.");
};


// EQUALITY OPERATORS
const age = 18;
if (age === 18) console.log("Adult now.");

console.log(18 === "18"); // strict equality operator - compares data type
console.log(18 == "18"); // loose equality operator - type coercion

const fav = Number(prompt("Favourite number?"));
console.log(fav);


// BOOLEAN LOGIC

const hasDriversLicense = true;
const hasGoodVision = false;

console.log(hasDriversLicense && hasGoodVision);
console.log(hasDriversLicense || hasGoodVision);
console.log(!hasDriversLicense);
*/

// CODING CHALLENGE 3
/*
There are two gymnastics teams, Dolphins and Koalas. They compete against each
other 3 times. The winner with the highest average score wins a trophy!
Your tasks:
1. Calculate the average score for each team, using the test data below
2. Compare the team's average scores to determine the winner of the competition,
and print it to the console. Don't forget that there can be a draw, so test for that
as well (draw means they have the same average score)
3. Bonus 1: Include a requirement for a minimum score of 100. With this rule, a
team only wins if it has a higher score than the other team, and the same time a
score of at least 100 points. Hint: Use a logical operator to test for minimum
score, as well as multiple else-if blocks �
4. Bonus 2: Minimum score also applies to a draw! So a draw only happens when
both teams have the same score and both have a score greater or equal 100
points. Otherwise, no team wins the trophy
Test data:
§ Data 1: Dolphins score 96, 108 and 89. Koalas score 88, 91 and 110


const dolphinsScore = (50 + 50 + 1) / 2;
console.log(dolphinsScore);

const KoalasScore = (100 + 100 + 0) / 2;
console.log(KoalasScore);

if (dolphinsScore >= 100 || KoalasScore >= 100) {
    if (dolphinsScore > KoalasScore) {
        console.log(`Winner: Dolphins with a score of ${dolphinsScore}.`);
    } else if (KoalasScore > dolphinsScore) {
        console.log(`Winner: Koalas with a score of ${KoalasScore}.`);
    } else {
        console.log("IT'S A DRAW.");
    }
} else {
    console.log("Scores too low.");
};
*/

// SWITCH STATEMENT
const day = "friday";

switch (day) {
    case "monday":
        console.log("Today is monday.");
        console.log("Bhosda day.");
        break;
    case "tuesday":
        console.log("Today is tuesday");
        break;
    case "wednesday":
    case "thursday":
        console.log("mutthi");
        break;
    case "friday":
    case "saturday":
    case "sunday":
        console.log("daaru");
        break;
    default:
        console.log("din nahi hai yeh.");
    
};