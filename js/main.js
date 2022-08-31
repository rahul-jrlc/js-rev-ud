"use strict";

// DATA STRUCTURES, MODERN OPERATORS AND STRINGS


const restaurant = {
    name: 'Classico Italiano',
    location: 'Via Angelo Tavanti 23, Firenze, Italy',
    categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
    starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
    mainMenu: ['Pizza', 'Pasta', 'Risotto'],

    order: function (starterIndex, mainIndex) {
        return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
    },
    openingHours: {
        thu: {
            open: 12,
            close: 22,
        },
        fri: {
            open: 11,
            close: 23,
        },
        sat: {
            open: 0, // Open 24 hours
            close: 24,
        },
    },

    orderDelivery: function ({starterIndex = 1, mainIndex = 0, time = "20:00", address}) {
        console.log(`Order received: ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time}.`);
    }
};

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

// DESTRUCTURING OBJECTS
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