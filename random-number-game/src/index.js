const PickNum = document.querySelector("#Pick-form .PickNumber");
const guessNum = document.querySelector("#Pick-form .guessNumber");
const GameForm = document.querySelector("#Pick-form");
const PICKING = document.querySelector("#Picker");

function randomNumber() {
  return Math.ceil(Math.random() * PickNum.value);
}
function result(event) {
  event.preventDefault();
  let randoms = randomNumber();
  const guessNumValue = parseInt(guessNum.value);
  let answer;
  if (guessNumValue === randoms) {
    answer = " you won!";
  } else {
    answer = "you lost!";
  }
  PICKING.innerHTML = `you choose: ${guessNum.value}, the machine choose: ${randoms} <br> ${answer}`;
}
GameForm.addEventListener("submit", result);
