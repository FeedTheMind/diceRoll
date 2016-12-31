// Constructor function
function Dice(sides) {
  this.sides = sides;
}

Dice.prototype.roll = function () {
  var placeHolderValue = document.querySelector('#placeHolder').innerHTML;
  var randomNumber = Math.floor(Math.random() * this.sides) + 1;
  
  // Loop if condition true, preventing duplicate number
  while (randomNumber === parseInt(placeHolderValue)) {
    randomNumber = Math.floor(Math.random() * this.sides) + 1;
  }
  
  return randomNumber;
}

var dice = new Dice(6);
