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

let secretNumber = Math.trunc(Math.random() * 20) + 1;

let score = 20; // state variable

let highScore = 0;

document.querySelector(".number").textContent = secretNumber;

//   -------------------handling click events
document.querySelector(".check").addEventListener("click", function () {
    const guess = Number(document.querySelector(".guess").value);
    console.log(guess);

    // When there is no guess
    if (!guess) {
        document.querySelector(".message").textContent = "No Number :(";

        // When player wins
    } else if (guess === secretNumber) {
        document.querySelector(".message").textContent = "Correct Number :)";

        // MANIPULATING CSS STYLES
        document.querySelector("body").style.backgroundColor = "#60b347";

        document.querySelector(".number").style.width = "30rem";

        // IMPLEMENTINH HIGH SCORES
        if (score > highScore) {
            highScore = score;
            document.querySelector(".highscore").textContent = highScore;
        }

        // When guess is too high
    } else if (guess > secretNumber) { 
        if (score > 1) {
            document.querySelector(".message").textContent = "Too high!";
            score--;
            document.querySelector(".score").textContent = score;
        } else {
            document.querySelector(".message").textContent = "LOSER :|"
            document.querySelector(".score").textContent = 0;
        }
        
        // When guess is too low
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

// DOM - CODING CHALLENGE 2

document.querySelector(".again").addEventListener("click", function () {
    score = 20;
    secretNumber = Math.trunc(Math.random() * 20) + 1;

    document.querySelector(".message").textContent = "Start guessing...";
    document.querySelector(".score").textContent = 0;
    document.querySelector(".number").textContent = "?";
    document.querySelector(".guess").value = '';
    document.querySelector("body").style.backgroundColor = "#222";
    document.querySelector(".number").style.width = "15rem";
});