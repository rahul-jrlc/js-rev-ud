"use strict";

// DATA STRUCTURES, MODERN OPERATORS AND STRINGS
//

// ENHANCED OBJECT LITERALS

const weekdays = ["mon", "tue", "wed", "thu", "fri", "sat", "sun"];
const openingHours = {
    [weekdays[3]]: {
        open: 12,
        close: 22,
    },
    fri: {
        open: 11,
        close: 23,
    },
    ['s'+'a'+'t']: {
        open: 0, 
        close: 24,
    }
};



const restaurant = {
    name: 'Classico Italiano',
    location: 'Via Angelo Tavanti 23, Firenze, Italy',
    categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
    starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
    mainMenu: ['Pizza', 'Pasta', 'Risotto'],

    // ES6 object method
    order (starterIndex, mainIndex) {
        return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
    },
    // openingHours: {
    //     thu: {
    //         open: 12,
    //         close: 22,
    //     },
    //     fri: {
    //         open: 11,
    //         close: 23,
    //     },
    //     sat: {
    //         open: 0, // Open 24 hours
    //         close: 24,
    //     },
    // },

    // openingHours: openingHours,

    // ES6 ENHANCED OBJECT LITERAL
    openingHours,

    orderDelivery: function ({starterIndex = 1, mainIndex = 0, time = "20:00", address}) {
        console.log(`Order received: ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time}.`);
    },

    orderPasta: function (ing1, ing2, ing3) {
        console.log(`Here is your delicious pasta with ${ing1}, ${ing2} and ${ing3}.`);
    },

    orderPizza: function (mainIngredient, ...otherIngredients) {
        console.log(mainIngredient);
        console.log(otherIngredients);
        console.log(`The main ingredient in your pizza is ${mainIngredient}.`);
    }
};

// console.log(restaurant);

// WORKING WITH STRINGS

const airline = "TAP Air Portugal";

console.log(airline.toLowerCase());
console.log(airline.toUpperCase());

// Fix capitalization in passenger name
// const passenger = "jOnAs";
// const passengerToLOwer = passenger.toLowerCase();
// console.log(passengerToLOwer);
// const correctedName = passengerToLOwer[0].toUpperCase() + passengerToLOwer.slice(1);
// console.log(correctedName);

const correctPassengerName = function (passengerName) {
    const passengerToLOwer = passengerName.toLowerCase();
    const correctedName = passengerToLOwer[0].toUpperCase() + passengerToLOwer.slice(1);
    console.log(`Corrected passenger name: ${correctedName}.`);
};

correctPassengerName('piNKY');

// Comparing email
const email = "hello@jonas.io";
const loginEmail = " Hello@Jonas.Io \n";

const lowerEmail = loginEmail.toLowerCase();
const trimmedEmail = lowerEmail.trim();
console.log(trimmedEmail);

console.log(email === trimmedEmail);

// Replacing
const priceGB = "288,97E";
const priceUS = priceGB.replace("E", "$").replace(",", ".");
console.log(priceUS);

const announcement = "All passengers come to boarding door 23, Boarding door 23!";

console.log(announcement.replaceAll('door', "gate"));

// Booleans
const plane = "A320neo";
console.log(plane.includes('A320'));
console.log(plane.startsWith("Air"));

if (plane.startsWith('Airbus') && plane.endsWith("neo")) {
    console.log("new airbus family.");
} else {
    console.log("Bekaar plane");
};

// Practise exercise
const checkBaggage = function (items) {
    const baggage = items.toLowerCase();
    if (baggage.includes("knife") || baggage.includes("gun")) {
        console.log("Nikal yaha se.");
    } else {
        console.log("Aaja");
    }
};

checkBaggage("I have a laptop, a lighter, a knife and an apple.");













/*
const plane = "A320";

console.log(plane[0]);
console.log(plane[2]);
console.log(plane[3]);

console.log(typeof plane[2]);
console.log(Number(plane[2]));

console.log("ajhssJhuihg"[4]);

console.log(airline.length);
console.log("KHHGJJ".length);

console.log(airline.indexOf('r')); // returns first occurence
console.log(airline.lastIndexOf("r")); // returns the last occurence
console.log(airline.indexOf("Portugal"));

console.log(airline.slice(2));
console.log(airline.slice(4, 8)); // does not include the character at the end index

console.log(airline.slice(0, airline.indexOf(" "))); // first word of a string
console.log(airline.slice(airline.lastIndexOf(" ") + 1)); // last word of a string

console.log(airline.slice(-2));
console.log(airline.slice(2, -1));

const checkMiddleSeat = function (seat) {
    // B and E are middle seats
    const letter = seat.slice(-1);
    if (letter === "B" || letter === "E") {
        console.log(`You have been assigned the middle seat: Row ${seat.slice(0, seat.indexOf(letter))}, seat ${letter}.`);
    } else {
        console.log("Window or aisle");
    }
    
};

checkMiddleSeat("16B");
checkMiddleSeat("22A")










/*
// THE FOR-OF LOOP
const menu = [...restaurant.starterMenu, ...restaurant.mainMenu];

for (const item of menu) console.log(item);

for (const [i, el] of menu.entries()) {
    console.log(`${i + 1}: ${el}.`);
};

console.log([...menu.entries()]);


/*
restaurant.orderPizza("mushroom", "onion", "capsicum", "jalapeno", "tomato");

// 1) DESTRUCTURING
// REST PATTERN AND PARAMETERS - left side of the assignment operator
// pack elements into an array

const arr = [1, 2, ...[2, 3, 4, 5]]; // spread operator - on right side
console.log(arr);

const [a, b, ...others] = [1, 2, 3, 4, 5, 6]; // rest operator - on left side
console.log(a);
console.log(b);
console.log(others);

const [pizza, , risotto, ...otherFood] = [...restaurant.mainMenu, ...restaurant.starterMenu];
console.log(pizza);
console.log(risotto);
console.log(otherFood);

// OBJECTS

const { sat, ...weekdays } = restaurant.openingHours;
console.log(weekdays);

// 2) FUNCTIONS
let sum = 0;
const add = function (...num) {
    let sum = 0;
    for (let i = 0; i < num.length; i++) {
        sum += num[i];
    }
    console.log(sum);
};
add(2, 3);
add(3, 4, 5, 6);
add(2, 3, 4, 5, 6, 7, 8, 9, 1, 2, 3, 4, 5, 6);

const x = [2, 3, 4, 5, 22, 33, 654];
add(...x);










///////////////////////////
/*
// THE SPREAD OPERATOR - right side of the assignment operator
const arr = [7, 8, 9];
const badNewArray = [1, 2, arr[0], arr[1], arr[2]];
console.log(badNewArray);

const newGoodArray = [1, 2, ...arr];
console.log(newGoodArray);

console.log(...newGoodArray);

const newMenu = [...restaurant.mainMenu, "Gnocci"];
console.log(newMenu);

// Copy array
const mainMenuCopy = [...restaurant.mainMenu];

// Join 2 arrays
const entireMenu = [...restaurant.mainMenu, ...restaurant.starterMenu];
console.log(entireMenu);

// Spread operator works on all iterables: strings, arrays, maps, sets, NOT OBJECTS
const str = "Jonas";
const letters = [...str, " ", "S"];
console.log(letters);
console.log(...str);

// Real world example
// const ingredients = [prompt("Let's make pasta! Ingredient 1?"), prompt("Ingredient 2?"), prompt("Ingredient 3?")];
// console.log(ingredients);

// restaurant.orderPasta(...ingredients);

// Objects
const newRestaurant = { foundedIn: 1999, ...restaurant, founder: "Nagesh" };
console.log(newRestaurant);

// SHALLOW COPY OF OBJECTS
const restaurantCopy = { ...restaurant };
restaurantCopy.name = "Domino's";
console.log(restaurantCopy.name);
console.log(restaurant.name);








////////////////////////////////////////////////////////////////////////////
/*
// DESTRUCTURING OBJECTS
restaurant.orderDelivery(
    {
        time: "22:30",
        address: "Tihar Jail",
        mainIndex: 2,
        starterIndex: 2
    }
);

restaurant.orderDelivery(
    {
        address: "Tihar Jail",
        starterIndex: 1
    }
);


const { name, categories, openingHours } = restaurant;
console.log(name);
console.log(categories);
console.log(openingHours);

const { name: restaurantName, openingHours: hours, categories: tags } = restaurant;
console.log(restaurantName);
console.log(hours);
console.log(tags);

// Default values
const { menu = [], starterMenu: starters = [], mainMenu: mainCourse = [] } = restaurant;
console.log(menu);
console.log(starters);
console.log(mainCourse);

// Mutating variables
let a = 3232;
let b = 4343;
let c = 41299;
let d = 0;
const obj = { a: 23, b: 7, c: 14 };

({ a, b, c, d=100000 } = obj);
console.log(a);
console.log(b);
console.log(c);
console.log(d);

// Nested objects
const { fri: {open: openingTime, close: closingTime} } = openingHours
console.log(openingTime);
console.log(closingTime);


/*
//////////////////////////////////////////////////////////////
// DESTRUCTURING ARRAYS
const arr = [2, 3, 4];
const a = arr[0];
const b = arr[1];
const c = arr[2];

const [x, y, z] = arr;

console.log(x);
console.log(y);
console.log(z);

console.log(arr);

let [main, ,secondary] = restaurant.categories;
console.log(main);
console.log(secondary);

// SWITCHING VARIABLES

// let temp = main;
// main = secondary;
// secondary = temp;
// console.log(secondary, main);

[main, secondary] = [secondary, main];
console.log(main);
console.log(secondary);

console.log(restaurant.order(2, 0));

// Receive 2 return values from a function
const [starter, mainCourse] = restaurant.order(2, 0);
console.log(starter);
console.log(mainCourse);

// Nested destructuring
const nested = [2, 4, [5, 6]];
const [i, , [p, q]] = nested;
console.log(i, p, q);


// Default values
const [j = 1, k = 1, r = 1] = [8, 9];
console.log(j, k, r);
*/