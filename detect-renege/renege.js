// const deal = require('./dummy-data');

// let [hand1, hand2, hand3, hand4] = deal();

const didRenege = (activeCard, playerCard, playerHand) => {
  const playedCardInSuit = activeCard[0] === playerCard[0]

  //console.log("Next player: ", playerCard)

  if (!playedCardInSuit) {
    const availableSuits = playerHand.map(card => card[0])
    return availableSuits.includes(activeCard[0]);
  }

  return false;
}

// hand1.forEach(card => {
//   console.log("----------")
//   console.log("Active card: ", card)
//   const p2 = hand2.pop();
//   console.log("player 2: ", didRenege(card, p2, hand2))
//   const p3 = hand3.pop();
//   console.log("player 3: ", didRenege(card, p3, hand3))
//   const p4 = hand4.pop();
//   console.log("player 4: ", didRenege(card, p4, hand4))
// })

module.exports = didRenege;