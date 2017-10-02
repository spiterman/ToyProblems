var suits = ['d', 'h', 'c', 's'];
var cards = [2, 3, 4, 5, 6, 7, 8, 9, 10, 'J', 'Q', 'K', 'A'];
var orderedDeck = [];

var cardMatrix = cards.slice().map((card) => suits.map((suit) => card + suit));
cardMatrix.forEach((row) => row.forEach((card) => orderedDeck.push(card)));

Array.prototype.shuffle = function(){
  var len = this.length;
  var that = this;
  that.forEach((item, index) => {
    var swap = Math.floor(Math.random() * len);
    that[index] = that[swap];
    that[swap] = item;
  });
};

orderedDeck.shuffle();
