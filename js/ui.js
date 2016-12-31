function printDiceNumber(number) {
  var placeHolder = document.querySelector('#placeHolder');
  placeHolder.innerHTML = number;
}

var button = document.querySelector('#buttonRoll');

button.addEventListener('click', function () {
  var result = dice.roll();
  printDiceNumber(result);
  button.blur();
});
