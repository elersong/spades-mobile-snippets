const suits = ["Spades", "Clubs", "Hearts", "Diamonds"];
const values = [
  "A",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "10",
  "J",
  "Q",
  "K",
];

const deck = [];

suits.forEach((suit) => {
  values.forEach((value) => {
    deck.push([suit, value]);
  });
});

const shuffle = (array) => {
  var random = array.map(Math.random);
  return array.sort(
    (a, b) => random[array.indexOf(a)] - random[array.indexOf(b)]
  );
};

const newDeck = () => shuffle(deck);

const dealNewHands = () => {
  const items = newDeck();

  const n = 4;
  const result = [[], [], [], []];

  const wordsPerLine = Math.ceil(items.length / n);

  for (let line = 0; line < n; line++) {
    for (let i = 0; i < wordsPerLine; i++) {
      const value = items[i + line * wordsPerLine];
      result[line].push(value);
    }
  }

  return result
};

module.exports = dealNewHands;
