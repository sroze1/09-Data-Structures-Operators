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
};

// 1. Create an array for each team:
// The reason the two arrays appear separated in the console log is because there are two variables for one players it is being equated to
// Because players has 2 arrays, it adds one each to the left hand side.
const [players1, players2] = game.players;
console.log(players1, players2);

// 2. For the whole team of team 1, create a variable with the name of the first player - always the keeper -
//and a second array with the REST of the players
const [gk, ...fieldPlayers] = players1;
console.log(gk, fieldPlayers);

// 3. allPlayers array, containing players of both teams
// Here we have unpacked two arrays (on the right) and repacked them into a new array called allPlayers on the left. This way we have
// Destructured the two arrays into one and packed it away on the left
const [...allPlayers] = [...players1, ...players2];
console.log(allPlayers);

// 4. Create a new array, original team plus 3 substitutes, Thiago, Coutinho, Perisic
// Pack into players1final - the 3 names below, and also the unpacked array - 'players1'
const [...players1final] = ['Thiago', 'Coutinho', 'Perisic', ...players1];
console.log(players1final);

// 5. Based on the odds object  create 'team1' 'draw' 'team2';
// To rename a property without having to use it's eact name in the object, we reference it then use the colon to redefine321§
const { team1, x: draw, team2 } = game.odds;
console.log(team1, draw, team2);

// 6. Wrire a function printGoals
// That receives an abritary number of names (NOT an array) and prints them each
// to the console. along with the number of goals that were scored (number of players passed in)
function printGoals(...players1) { 
  console.log( `${players1} were the goal scorers. ${players1.length} goals were scored`);
}

function printGoals(...players1) { 
  console.log( `${players1} were the goal scorers. ${players1.length} goals were scored`);
}

printGoals(`Yes`, 'My', 'G');
printGoals('yES', 'cyz');


//7. Team with lower odd is more likely to win. 
// Print to the console which team is more likely to win, without using if/else or ternary
if(team2 > team1) { 
  console.log(team1);
}


