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

// IMPLEMENTING GAME LOGIC

const secretNumber = Math.trunc(Math.random() * 20) + 1;

let score = 20; // state variable

document.querySelector(".number").textContent = secretNumber;

//   -------------------handling click events
document.querySelector(".check").addEventListener("click", function () {
    const guess = Number(document.querySelector(".guess").value);
    console.log(guess);

    if (!guess) {
        document.querySelector(".message").textContent = "No Number :(";
    } else if (guess === secretNumber) {
        document.querySelector(".message").textContent = "Correct Number :)"
    } else if (guess > secretNumber) { 
        if (score > 1) {
            document.querySelector(".message").textContent = "Too high!";
            score--;
            document.querySelector(".score").textContent = score;
        } else {
            document.querySelector(".message").textContent = "LOSER :|"
            document.querySelector(".score").textContent = 0;
        }
        
    } else if (guess < secretNumber) {
        if (score > 1) {
            document.querySelector(".message").textContent = "Too Low!";
            score--;
            document.querySelector(".score").textContent = score;
        } else {
            document.querySelector(".message").textContent = "LOSER :|";
            document.querySelector(".score").textContent = 0;
        }
        
    }
});