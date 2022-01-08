'use strict';
const game = {
  team1: 'Bayern Munich',
  team2: 'Borrussia Dortmund',
  players: [
    [
      'Neuer',
      'Pavard',
      'Martinez',
      'Alaba',
      'Davies',
      'Kimmich',
      'Goretzka',
      'Coman',
      'Muller',
      'Gnarby',
      'Lewandowski',
    ],
    [
      'Burki',
      'Schulz',
      'Hummels',
      'Akanji',
      'Hakimi',
      'Weigl',
      'Witsel',
      'Hazard',
      'Brandt',
      'Sancho',
      'Gotze',
    ],
  ],
  score: '4:0',
  scored: ['Lewandowski', 'Gnarby', 'Lewandowski', 'Hummels'],
  date: 'Nov 9th, 2037',
  odds: {
    team1: 1.33,
    x: 3.25,
    team2: 6.5,
  },

  printGoals: function (...playerNames) {
    console.log(`${playerNames}`);
    this.score = String(playerNames.length);
    console.log(this.score);
  },
};

// Team 1 and 2, players, goalkeeper, rest of the team
const [players1, players2] = game.players;
const [gk, ...fieldPlayers] = players1;



// All players (One array, 22 players)
const [...allPlayers] = [...players1, ...players2];
console.log(allPlayers);

// Adding players to new array, with the REST as the original 11
const players1Final = [...players1, 'Thiago', 'Coutinho', 'Perisic'];
console.log(players1Final);

// Nested destructuring Making game.odds property
let { team1, x: draw, team2 } = game.odds;
console.log(team1, draw, team2);


//
function printGoals(playerNames) {
  console.log(`${[playerNames]}.  `);

  [...playerNames];
  console.log(` ${[playerNames.length]}   goals were scored.`);
}

console.log(game.odds.team2 || game.odds.team1);

if(game.odds.team1 < game.odds.team2) { 
  console.log(game.odds.team1 + 'win ');
}




