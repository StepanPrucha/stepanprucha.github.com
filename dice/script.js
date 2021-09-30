function myFunction() {
  rollDice();
  setTimeout(rollDice, 200);
  setTimeout(rollDice, 400);
  setTimeout(rollDice, 600);
  setTimeout(rollDice, 900);
  setTimeout(rollDice, 1300);
  changeBgColor();
  setTimeout(changeBgColor, 650);
  setTimeout(changeBgColor, 1300);
}

var dice1 = document.getElementById("dice-1");
var dice2 = document.getElementById("dice-2");
var dice3 = document.getElementById("dice-3");
var dice4 = document.getElementById("dice-4");
var dice5 = document.getElementById("dice-5");
var dice6 = document.getElementById("dice-6");

var currentNumber = 1;

function rollDice() {
  //  var previousNumber = document.getElementById("demo").innerText;
  var randomNumber = Math.floor(Math.random() * 6 + 1);
  if (currentNumber == randomNumber) {
    rollDice();
  } else {
    currentNumber = randomNumber;
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

var body = document.getElementById("body");
var currentBgNumber = 1;

function changeBgColor() {
  var randomBgNumber = Math.floor(Math.random() * 3 + 1);
  if (randomBgNumber == currentBgNumber) {
    changeBgColor();
  }
  else {
    currentBgNumber = randomBgNumber;
    if (randomBgNumber == 1) {
      body.style.background = "DarkSeaGreen";
    }
    if (randomBgNumber == 2) {
      body.style.background = "LightSalmon";
    }
    if (randomBgNumber == 3) {
      body.style.background = "SkyBlue";
    }
  }
}
