const cardRank = {
  '2': 2, '3': 3, '4': 4, '5': 5, '6': 6, '7': 7, '8': 8, '9': 9, '10': 10,
  'J': 11, 'Q': 12, 'K': 13, 'A': 14
};

function winningPair(pair1, pair2) {
  if (pair1[0] === pair1[1] && pair2[0] === pair2[1]) {
    return cardRank[pair1[0]] > cardRank[pair2[0]] ? pair1 : pair2;
  }
  if (pair1[0] === pair1[1]) return pair1;
  if (pair2[0] === pair2[1]) return pair2;
  return [];
}

// Extension criteria

function winningPairFromArray(pairs) {
  let winningPair = [];
  for (const pair of pairs) {
    if (pair[0] === pair[1]) {
      if (!winningPair.length || cardRank[pair[0]] > cardRank[winningPair[0]]) {
        winningPair = pair;
      }
    }
  }
  return winningPair;
}

function winning3CardHand(hands) {
  let winningHand = [];
  for (const hand of hands) {
    if (hand.length === 3 && hand[0] === hand[1] && hand[1] === hand[2]) {
      if (!winningHand.length || (winningHand.length !== 3 || cardRank[hand[0]] > cardRank[winningHand[0]])) {
        winningHand = hand;
      }
    } else if (hand.length === 2 && hand[0] === hand[1]) {
      if (!winningHand.length || (winningHand.length === 2 && cardRank[hand[0]] > cardRank[winningHand[0]])) {
        winningHand = hand;
      }
    }
  }
  return winningHand;
}

module.exports = {
  winningPair,
  winningPairFromArray,
  winning3CardHand
};
