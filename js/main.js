"use strict";

// JAVASCRIPT IN THE BROWSER: DOM MANIPULATION

// PROJECT - GUESS MY NUMBER
/*
console.log(document.querySelector(".message").textContent);

document.querySelector(".message").textContent = "Correct Number!";

console.log(document.querySelector(".message").textContent);

document.querySelector(".number").textContent = 13;
document.querySelector(".score").textContent = 1000;

document.querySelector(".guess").value = 23;
console.log(document.querySelector(".guess").value);
*/


// HANDLING CLICK EVENTS

document.querySelector(".check").addEventListener("click", function () {
    const guess = Number(document.querySelector(".guess").value);
    console.log(guess);

    if (!guess) {
        document.querySelector(".message").textContent = "No Number :("
    }
})