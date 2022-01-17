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
// Here, the allPlayers is equal to an array, which has all of the elements of
// players1 and players 2 unpacked inside of the array.
const allPlayers = [...players1, ...players2];
console.log(allPlayers);

// 4. Create a new array, original team plus 3 substitutes, Thiago, Coutinho, Perisic
// players1final = [ the 3 names below, and also the unpacked array - 'players1 ]
const players1final = ['Thiago', 'Coutinho', 'Perisic', ...players1];
console.log(players1final);

// 5. Based on the odds object  create 'team1' 'draw' 'team2';
// To rename a property without having to use it's eact name in the object, we reference it then use the colon to redefine321§
const { team1, x: draw, team2 } = game.odds;
console.log(team1, draw, team2);

// 6. Wrire a function printGoals
// That receives an abritary number of names (NOT an array) and prints them each
// to the console. along with the number of goals that were scored (number of players passed in)
function printGoals(...players1) {
  [...game.scored] = [players1];
  console.log(
    `${game.scored} were the goal scorers. ${players1.length} goals were scored`
  );
}


//7. Team with lower odd is more likely to win.
// Print to the console which team is more likely to win, without using if/else or ternary
// The reason this works is because using the AND operator, if the first statement is true
// The the code after is executed. This is why it works. See below after reading,
// It will make sense
team1 < team2 && console.log('Team 1 is more likely to win');
team2 < team1 && console.log('Team 2 is more likely to win');


console.log("Second Challenge");
// 1. Loop over the game.scored array and print each player name to the console, along with the goal number (Example: "Goal 1: Lewandowski")

// entries method basically creates two elements, one with the index and the other one with the value for the object property targeted
// This means that we need two elements that these values will go into:
// goalNumber and goalScorer
for (const [goalNumber, goalScorer] of game.scored.entries()) { 
  console.log(`Goal ${goalNumber+1}:  ${goalScorer}`);
}

// 2. Use a loop to calculate the average odd and log it to the console (We already studied how to calculate averages, you can go check if you don't remember)
// Team 1 + draw + team 2 / 3 = average
// Each time the loop moves forward, we want to add the value of average onto something - so by the end of it we have added all three values
// for(let [average, total] of Object.entries(game.odds)) { 
//  console.log(average, total);
//  console.log(Object.values(total));
// }

let average = 0;
for (const x of Object.values(game.odds)) { 
  average += x;
}

console.log(average / Object.values(game.odds).length);


// 3. Print the 3 odds to the console, but in a nice formatted way, exaclty like this:
      // Odd of victory Bayern Munich: 1.33
// console.log(`Odds of victory ${game.team1}: ${game.odds.team1}`);

// //       Odd of draw: 3.25
// console.log(`Odds of draw: ${game.odds.x}`);

// //       Odd of victory Borrussia Dortmund: 6.5
// console.log(`Odds of victory ${game.team2}: ${game.odds.team2}`);

// Get the team names directly from the game object, don't hardcode them (except for "draw"). HINT: Note how the odds and the game objects have the same property names 😉
// Use a loop for this

for(const [teams, odds] of Object.entries(game.odds)) { 
  const draw = teams === 'x' ? 'draw': `Odds of ${odds}`;
  console.log(`Odds of victory ${game[teams]}: ${odds} `);
}






// BONUS: Create an object called 'scorers' which contains the names of the players who scored as properties, and the number of goals as the value. In this game, it will look like this:
//       {
//         Gnarby: 1,
//         Hummels: 1,
//         Lewandowski: 2
//       }
//  const scored= {...game.scored}
//  console.log(scored);

