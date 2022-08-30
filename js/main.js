"use strict";

// DATA STRUCTURES, MODERN OPERATORS AND STRINGS

// DESTRUCTURING ARRAYS

const restaurant = {
    name: 'Classico Italiano',
    location: 'Via Angelo Tavanti 23, Firenze, Italy',
    categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
    starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
    mainMenu: ['Pizza', 'Pasta', 'Risotto'],

    order: function (starterIndex, mainIndex) {
        return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
    }
};

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