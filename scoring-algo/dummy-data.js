let players = [
  {
    userId: 1,
    teamId: 1,
    bidThisRound: 5,
    booksThisRound: 4,
    renegesThisRound: 1,
    scoreLastRound: 20,
  },
  {
    userId: 2,
    teamId: 2,
    bidThisRound: 2,
    booksThisRound: 6,
    renegesThisRound: 0,
    scoreLastRound: 50,
  },
  {
    userId: 3,
    teamId: 1,
    bidThisRound: 4,
    booksThisRound: 2,
    renegesThisRound: 1,
    scoreLastRound: -30,
  },
  {
    userId: 4,
    teamId: 2,
    bidThisRound: 1,
    booksThisRound: 1,
    renegesThisRound: 0,
    scoreLastRound: 70,
  },
];

let teams = [
  {
    teamId: 1,
    score: 0,
    combinedBid: 0,
  },
  {
    teamId: 2,
    score: 0,
    combinedBid: 0,
  },
];

module.exports = { players, teams }