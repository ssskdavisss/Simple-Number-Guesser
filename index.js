const triesText = document.getElementById("tries");
const inputNumber = document.getElementById("input");
const choices = document.getElementById("choice");
const answer = document.getElementById("answer");
const guessButton = document.getElementById("run");

let random = Math.floor(Math.random() * 100);
let numberOfTries = 8;

function run() {
  if (numberOfTries == 1) {
    answer.textContent = "You dont have tries, number was: " + random;
    return;
  }

  choices.textContent = inputNumber.value;
  if (inputNumber.value < random) {
    answer.textContent = "higher";
  } else if (inputNumber.value > random) {
    answer.textContent = "lower";
  } else if (inputNumber.value == random) {
    answer.textContent = "You won!! number was: " + random;
  } else {
    choices.textContent = "";
    answer.textContent = "ERROR";
    return;
  }
  inputNumber.value = "";
  numberOfTries -= 1;
  triesText.textContent = numberOfTries;
}

guessButton.addEventListener("click", run);

function choosingNumber() {
  document.getElementById("choosing").textContent =
    "Computer is choosing the number...";
}
const firstTimeout = setTimeout(choosingNumber, 2000);

function choseNumber() {
  document.getElementById("chose").textContent =
    "computer chose the number ( 1 - 100 )";
}
const secondTimeout = setTimeout(choseNumber, 4000);
