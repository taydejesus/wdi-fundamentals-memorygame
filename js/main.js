console.log("Up and running!");



var cards = ['queen', 'queen', 'king', 'king'];
var cardsInPlay = [];

var cardOne = cards[0];
var cardTwo = cards[2];

cardsInPlay.push(cardOne);
cardsInPlay.push(cardTwo);
console.log("flipped " + cardOne);
console.log("flipped " + cardTwo);

if(cardsInPlay.length === 2) {
  if(cardOne == cardTwo) {
    alert("You found a match!");
  } else {
    alert("Try again");
  }
}
