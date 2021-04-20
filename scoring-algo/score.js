const data = require("./dummy-data");
let players = data.players;
let teams = data.teams;

const calcPlayerScore = (player) => {
  let subTotal = player.booksThisRound * 10;

  subTotal -= player.renegesThisRound * 30;

  if (player.bidThisRound === player.booksThisRound) {
    return player.scoreLastRound + subTotal;
  } else if (player.bidThisRound < player.booksThisRound) {
    return player.scoreLastRound - subTotal;
  } else {
    const extraPoints = player.booksThisRound - player.bidThisRound;
    return subTotal + extraPoints;
  }
};

const getUpdatedTeam = (team, players) => {
  const teamPlayers = players.filter((player) => player.teamId === team.teamId);

  const newCombinedBid = teamPlayers.reduce(
    (bids, player) => bids + player.bidThisRound,
    0
  );

  const newScore = teamPlayers.reduce(
    (score, player) => score + player.scoreLastRound,
    0
  );

  return {
    teamId: team.teamId,
    score: newScore,
    combinedBid: newCombinedBid,
  };
};

const resetRound = (player) => {
  player.bidThisRound = 0;
  player.booksThisRound = 0;
  player.renegesThisRound = 0;
};

// players.forEach((player) =>
//   console.log(`Player ${player.userId}: ${player.scoreLastRound}`)
// );
// teams.forEach((team) => console.log(`Team ${team.teamId}: ${team.score}`));
// console.log("----------");

// players.forEach((player) => {
//   player.scoreLastRound = calcPlayerScore(player);
// });

// teams = teams.map((team) => getUpdatedTeam(team, players));

// players.forEach((player) => resetRound(player));

// players.forEach((player) =>
//   console.log(`Player ${player.userId}: ${player.scoreLastRound}`)
// );
// teams.forEach((team) => console.log(`Team ${team.teamId}: ${team.score}`));

module.exports = [calcPlayerScore, getUpdatedTeam, resetRound];
