class Card {
  constructor (suit, rank) {
    this.suit = suit;
    this.rank = rank;
  }
  value () {
    return `${this.rank}${this.suit}`;
  }
}

class Deck {
  constructor() {
    this.storage = [];

    const suits = ['C', 'D', 'H', 'S'];
    const ranks = [2, 3, 4, 5, 6, 7, 8, 9, 10, 'J', 'Q', 'K', 'A'];

    ranks.forEach((rank) => {
      suits.forEach((suit) => {
        this.storage.push(new Card(suit, rank));
      });
    });
  }

  dealCard(){
    return this.storage.pop()
  }

  shuffleCards() {
    this.storage.forEach((card, index) => {
      let newIndex = Math.floor(Math.random() * this.storage.length);
      this.swapCards(index, newIndex);
    });
  }

  swapCards(idx1, idx2) {
    const temp = this.storage[idx1]
    this.storage[idx1] = this.storage[idx2]
    this.storage[idx2] = temp
  }

  returnCard(card) {
    this.storage.push(card);
  }

  dealHands(players, cardsPerPlayer) {
    // Return an array of arrays of cards
    let hands = [];
    let i = 0;

    // Generate the array of arrays
    while (i < players) {
      hands.push([]);
      i++;
    }

    // Shuffle Cards First
    this.shuffleCards();

    let j = 0;
    while(j < cardsPerPlayer) {
      hands.forEach((hand) => {
        let card = this.dealCard();
        hand.push(card);
      })
      j++;
    }
    return hands;
  }

}

let d = new Deck();

console.log(d.dealHands(4, 5));

console.log(d.storage);
