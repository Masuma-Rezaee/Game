"use strict";

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;

document.querySelector(".check").addEventListener("click", function () {
  let guess = Number(document.querySelector(".guess").value);
  if (!guess) {
    document.querySelector(".message").textContent = "⛔ No Number";
    //when the player wins
  } else if (guess === secretNumber) {
    document.querySelector(".message").textContent = "Correct Number";
    document.querySelector("body").style.backgroundColor = "green";

    document.querySelector(".number").style.width = "30rem";
    document.querySelector(".number").textContent = secretNumber;
    if (score > highscore) {
      highscore = score;
      document.querySelector(".highscore").textContent = highscore;
    }
    //when the guess is different
  } else if (guess !== secretNumber) {
    if (score > 1) {
      document.querySelector(".message").textContent =
        guess > secretNumber ? "too high" : "too low!";
      score--;
      document.querySelector(".score").textContent = score;
    } else {
      document.querySelector(".message").textContent = "you lost the game";
      document.querySelector(".score").textContent = 0;
    }
  }

  //when the player is too high
  //   else if (guess > secretNumber) {
  //     if (score > 1) {
  //       document.querySelector(".message").textContent = "too high";
  //       score--;
  //       document.querySelector(".score").textContent = score;
  //     } else {
  //       document.querySelector(".message").textContent = "you lost the game";
  //       document.querySelector(".score").textContent = 0;
  //     }
  //     //when the player is too low
  //   } else if (guess < secretNumber) {
  //     if (score > 1) {
  //       document.querySelector(".message").textContent = "too low";
  //       score--;
  //       document.querySelector(".score").textContent = score;
  //       // when the play loses the game
  //     } else {
  //       document.querySelector(".message").textContent = "you lost the game";
  //       document.querySelector(".score").textContent = 0;
  //     }
  //   }
  // });
  let again = document.querySelector(".again");
  again.addEventListener("click", function () {
    score = 20;
    secretNumber = Math.trunc(Math.random() * 20) + 1;
    document.querySelector(".message").textContent = "Starting guessing...";
    document.querySelector(".score").textContent = score;
    document.querySelector(".number").textContent = "?";
    document.querySelector(".guess").value = "";
    document.querySelector("body").style.backgroundColor = "#222";

    document.querySelector(".number").style.width = "15rem";
  });
});
