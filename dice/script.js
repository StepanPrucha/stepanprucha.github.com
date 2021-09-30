var body = document.getElementById("body");

function myFunction() {
  body.className = "bg-animation";
  setTimeout(rollDice, 200);
  setTimeout(rollDice, 400);
  setTimeout(rollDice, 600);
  setTimeout(rollDice, 800);
  setTimeout(rollDice, 1100);
  setTimeout(rollDice, 1500);
  setTimeout(animationReset, 2000);
}

function animationReset() {
  body.className = "";
}

var dice1 = document.getElementById("dice-1");
var dice2 = document.getElementById("dice-2");
var dice3 = document.getElementById("dice-3");
var dice4 = document.getElementById("dice-4");
var dice5 = document.getElementById("dice-5");
var dice6 = document.getElementById("dice-6");

var actualNumber = 1;

function rollDice() {
//  var previousNumber = document.getElementById("demo").innerText;
  var randomNumber = Math.floor(Math.random() * 6 + 1);
  if (actualNumber == randomNumber) {
    rollDice();
  } else {
    actualNumber = randomNumber;
    hideAll();
    if (randomNumber == 1) {
      dice1.style.display = "block";
    }
    if (randomNumber == 2) {
      dice2.style.display = "block";
    }
    if (randomNumber == 3) {
      dice3.style.display = "block";
    }
    if (randomNumber == 4) {
      dice4.style.display = "block";
    }
    if (randomNumber == 5) {
      dice5.style.display = "block";
    }
    if (randomNumber == 6) {
      dice6.style.display = "block";
    }
  }
}

function hideAll() {
  dice1.style.display = "none";
  dice2.style.display = "none";
  dice3.style.display = "none";
  dice4.style.display = "none";
  dice5.style.display = "none";
  dice6.style.display = "none";
}
