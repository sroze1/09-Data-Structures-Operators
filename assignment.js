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

console.log('Second Challenge');
// 1. Loop over the game.scored array and print each player name to the console, along with the goal number (Example: "Goal 1: Lewandowski")

// entries method basically creates two elements, one with the index and the other one with the value for the object property targeted
// This means that we need two elements that these values will go into:
// goalNumber and goalScorer
for (const [goalNumber, goalScorer] of game.scored.entries()) {
  console.log(`Goal ${goalNumber + 1}:  ${goalScorer}`);
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

// Below, we have used the Object entries to call the entire odds object in game
// This creates two elements, the name and the value
// We store these into teams and odds, which will loop over this object
// Instead of hardcoding the string 'team 1', as it's available in the game object we can
// use this for our advantage

// What we do is allow the name element to append to the game object
// E.g the name is 'team1' - when put into the teams variable with {game[teams]}
// this is essentially like saying {game[teams1]}
// This will therefore print the team which is being passed into the game object

// In the instance that the 'x' is chosen, this is a draw and we require a different
// approach
// To resolve this, we can create a separate variable, using a ternary operator
// If the teams (in the loop) has the key of 'x', then = draw
// If it's not x, it must therefore be another team, so continue with our first logic
// i.e {game[teams]}

// finally, we can print this to the console, with the variable which is a conditional,
// to produce the statement we need.

// for(const [teams, odds] of Object.entries(game.odds)) {
//   const draw = teams === 'x' ? 'draw': `Odds of victory ${game[teams]}`;
//   console.log(`Odds of ${draw}: ${odds} `);
// }

// BONUS: Create an object called 'scorers' which contains the names of the players who scored as properties, and the number of goals as the value.
// In this game, it will look like this:
//       {
//         Gnarby: 1,
//         Hummels: 1,
//         Lewandowski: 2
//       }
//  const scored= {...game.scored}
//  console.log(scored);

const { scored: scorers } = game;
for (const [key, value] of Object.entries(scorers)) {
  console.log(key, value);
}

// Coding challenge 3
const gameEvents = new Map([
  [17, '⚽️ GOAL'],
  [36, '🔁 Substitution'],
  [47, '⚽️ GOAL'],
  [61, '🔁 Substitution'],
  [64, '🔶 Yellow card'],
  [69, '🔴 Red card'],
  [70, '🔁 Substitution'],
  [72, '🔁 Substitution'],
  [76, '⚽️ GOAL'],
  [80, '⚽️ GOAL'],
  [92, '🔶 Yellow card'],
]);

// 1. Create an array 'events' of the different game events that happened (no duplicates)
const [...array5] = gameEvents;

const uniqueEvents = [];
for (const [key, value] of array5) {
  uniqueEvents.push(value);
}

// Another way to do the above is:
// Firstly create a new set for specifically the gameEvents.values
// then unpack all of this.
const events = [...new Set(gameEvents.values())];

console.log(new Set(uniqueEvents));
console.log(events);

// console.log(new Set(key1));
// for(const [arr, key] of array5) {
//   // All this is doing is printing the Set from that specific array
//   // We need to access the whole array at once
//   // Put into an array
//   // Then unpack the entire elements into one variable
//   console.log(arr, key);
// }

// const [keys, values] = [gameEvents];
// console.log(keys, values);

// for(const [key,value] of [gameEvents]) {
//   console.log([...new Set(gameEvents)]);
// }

// 2. After the game has finished, is was found that the yellow card from minute 64 was unfair. So remove this event from the game events log.
gameEvents.delete(64);
console.log(gameEvents);

// 3. Print the following string to the console: "An event happened, on average, every 9 minutes" (keep in mind that a game has 90 minutes)

// 4. Loop over the events and log them to the console, marking whether it's in the first half or second half (after 45 min) of the game, like this:
//       [FIRST HALF] 17: ⚽️ GOAL
for (const [key, value] of gameEvents) {
  console.log(
    key < 45 ? `[FIRST HALF] ${key + value}` : `[SECOND HALF] ${key + value}`
  );
}

//
// console.log('new test brother');
// function removeChar(str) {
//   console.log(
//     str.length > 2
//       ? str.slice(1, -1)
//       : 'String not long enough (ensure greater than 2)'
//   );
// }

// removeChar('eloquen');

// let highestNum = 0;
// let lowestNum = 0;
// let total = 0;

// function sumArray(array) {
//   lowestNum = array[0];

//   for(let i = 0; i < array.length; i++) {
//     highestNum > array[i] ? highestNum: highestNum = array[i];
//     lowestNum < array[i] ? lowestNum: lowestNum = array[i];
//     total += array[i];
//   }

//   console.log(total);
//   total -= (lowestNum + highestNum);
//   return total;
// }

// console.log(sumArray([4,9,2,4,5,11]));

// ['hello', 'world', 'this', 'is', 'great']  =>  'hello world this is great'
const newArray = ['hello', 'world', 'this', 'is', 'great'];

function smash(words) {
  let sentence = '';
  for (let contents of words) {
    sentence += ' ' + contents;
  }

  return sentence.slice(1);
}

console.log(smash(['hello', 'yes', 'g']));

// New function g ("Join)
// Creates a new string by concatenating all elements of the array
// Whatever is in the brackets will separate the two elements.
// function smashed(words) {
//   return words.join(" ");
// }

// console.log(smashed(['tatt', 'you', 'are']));

// const sheepArray = [
//   true,
//   true,
//   true,
//   false,
//   true,
//   true,
//   true,
//   true,
//   true,
//   false,
//   true,
//   false,
//   true,
//   false,
//   false,
//   true,
//   true,
//   true,
//   true,
//   true,
//   false,
//   false,
//   true,
//   true,
// ];

// function countingSheep(sheepArray) {
//   let total = 0;
//   for(let count of sheepArray) {
//     if(count) {total++};
//   }
//   return total;
// }

// console.log(countingSheep(sheepArray));
// // an even easier way of doing the above
// // This finds all the booleans, and the length of them in the array of sheeps is returned
// function countSheeps(arrayOfSheeps) {
//   return arrayOfSheeps.filter(Boolean).length;
// }

// function smash (words) {
//   let smashed = ([...words]);
//    return words ? smashed : "";
// };

// xxsmash(['hello', 'this', 'is', 'a', 'test']);

// VOWEL COUNT
// function getCount(str) {
//   let strArray = [...str];
//   let vowelsCount = 0;

//   for(let vowels of strArray) {
//     vowels === 'a' ? vowelsCount++ : vowelsCount;
//     vowels === 'e' ? vowelsCount++ : vowelsCount;
//     vowels === 'i' ? vowelsCount++ : vowelsCount;
//     vowels === 'o' ? vowelsCount++ : vowelsCount;
//     vowels === 'u' ? vowelsCount++ : vowelsCount;
// };
// return vowelsCount;
// }

// all multiples of x (up to n times)
// function countBy(x, n) {
//   let newArray = [];

//   for (let r = x; newArray.length < n; r++) {
//     if(r % x === 0) newArray.push(r);
//   }
//   return newArray;
// }

// console.log(countBy(2, 5));

// console.log(getCount('aeiouy h'));

// GOOD LUCK 😀
// */

// function splitTheBill(x) {

//   let arrayOfBill = Object.entries(x);
//   let total = 0;
//   for (let [keys,values] of arrayOfBill) {
//     total += values;
//   }

//   let equalBill = (total/arrayOfBill.length);

//   for (let [keys, values] of arrayOfBill) {
//     // x becomes the keys and 'D' becomes the ''''values''''
//     // x[A:,B:,C:] = [20,15,10] - 15;

//     // All the keys are being looped through, from A to whatever property we have it to
//     // These keys are stored in the 'key' value, which we manipulate by first inserting the object into an array with a different variable name
//     // We can reference the key in our original object as they have the same names as the keys being looped through (because we have the Object into the array)

//     // so x[A:] = values(20) - equalBill(15)
//     x[keys] = (values-equalBill);
//     // Number is needed because the minus figures print as strings, and therefore don't fix to 2 decimals as we want
//     if(x[keys] % 1 !=0) { x[keys] = Number(values - equalBill).toFixed(2)};
//     console.log(x[keys]);
//   }

// return x;
// }

// console.log(splitTheBill({A:20, B:15, C:10}));

// How to split the bill
// The bill will equal the total amount of the values passed in by x    totalBill = (x:A + x:B + x:C)
// To calculate who owes how much, we must calculate how much should be paid first by each person       equalSplit = (totalBill / amount of people)
// We can then subtract the values from each property by the amount they should have paid -- to give us how much they are owed or owe      (x:A - equalSplit) = owed/owe
// x = [...key, (value - equalSplit);

// Find the index of the needle position in the array
// function findNeedle(haystack) {
//   let position = '';
//   for (let i = 0; i < haystack.length; i++) {
//     if (haystack[i] === 'needle')
//       position = `found the needle at position ${i}`;
//   }

//   return position;
// }

// console.log(
//   findNeedle(['hay', 'junk', 'hay', 'hay', 'moreJunk', 'needle', 'randomJunk'])
// );

// // an easier way to do this:
// function findNeedle1(haystack) {
//   return `found the needle at position ${haystack.indexOf('needle')}`;
// }

// console.log(
//   findNeedle1(['hay', 'junk', 'hay', 'hay', 'moreJunk', 'ned', 'needle'])
// );

// Each char of the string has to be repeated once
// function doubleChar(str) {

//   let sentence = '';
//   for (character of str) {
//     sentence +=character+=character;

//   }

//   return sentence;
// }

// console.log(doubleChar('123456'));

// Return opposite of number
// Writing '-' returns the opposite of the number
function opposite(number) {
  return -number;
}

// console.log(20);

// Repeat "S" n times
// Better way to do this instead of for loops:
// function repeatStr(n, s) {
//   return s.repeat(n);
// }

// function passed(list) {
//   let sum = 0;
//   let count = 0;

//   for (let values of list) {
//     if (values <= 18) {
//       sum += values;
//       count++;
//     }
//   }

//   return sum > 0 ? Math.round(sum / count) : 'No pass scores registered.';
// }

// console.log(passed([10,10,10,18,20,20]));

// Driving school series #2
// function cost(mins) {
//   let hourCost = 30;
//   let halfHourCost = 10;
//   let count= 0;

//   if (mins <= 60) {
//     return hourCost;
//   }

//   if (mins > 65) {
//    return 30 + Math.ceil((mins - 65) / 30) * 10;
//   }
// }

// console.log(cost(102));

// Coding meetup series #1
// function countDevelopers(list) {
//   return list.filter(x => x.continent == 'Europe' && x.language == 'JavaScript')
//     .length;
// }
const greetDevelopers = list =>
  list.map(dev => ({
    ...dev,
    greeting: `Hi ${dev.firstName}, what do you like the most about ${dev.language}?`,
  }));

var list1 = [
  {
    firstName: 'Sofia',
    lastName: 'I.',
    country: 'Argentina',
    continent: 'Americas',
    age: 35,
    language: 'Java',
  },
  {
    firstName: 'Lukas',
    lastName: 'X.',
    country: 'Croatia',
    continent: 'Europe',
    age: 35,
    language: 'Python',
  },
  {
    firstName: 'Madison',
    lastName: 'U.',
    country: 'United States',
    continent: 'Americas',
    age: 32,
    language: 'Ruby',
  },
];

console.log(greetDevelopers(list1));

// { firstName: 'Sofia', lastName: 'I.', country: 'Argentina', continent: 'Americas', age: 35, language: 'Java',
//     greeting: 'Hi Sofia, what do you like the most about Java?'
//   },

// check if at least one ruby developer in the list1
// function isRubyComing(list) {
//   return list.some(v => v.language === 'Ruby');
//   // thank you for checking out my kata :)
// }

// function exclaimWord(word) {
//   let text = word.toUpperCase();
//   console.log(text + '!');
// }

// exclaimWord('woof');

// function getFirstAndLast(array) {
  
//   let newArray = [];
//   newArray.push(array[0]);
//   newArray.push(array.slice(-1));

// return newArray;
// }

// console.log(getFirstAndLast(['a', 'b', 'c', 'd', 'e', 'f']));

// function findTotalAge(people) {
//   if (!people) {
//     return 0;
//   }

//   let peopleObject = Object.entries(people);
//   let sum = 0;

//   for(let [keys,values] of peopleObject) { 
//     console.log(keys,values.age);
//     sum+=values.age;
//   };
// return sum;
// }


// console.log(findTotalAge([
//   { name: 'Sam', age: 20 },
//   { name: 'Anat', age: 30 },
//   { name: 'Alex', age: 40 },
// ]));
// // returns 90


// function countChars (str, char) {
//   let count = 0;
//   for(let values of str) { 
//     if(values === char) { 
//       count++;
//     }
//   }
//   return count;
// }

// console.log(countChars('hello world', 'e'));
// countChars('hello world', 'l') --> 3
// countChars('hello world', 'z') --> 0
// countChars('hello world', 'e') --> 1

// function allOscarWinners(films) {
//   let newArray = {...films};

//   let oscarOrNot = Object.entries(newArray);

//   for(let [keys,values] of oscarOrNot) {
//     if(!values.wonOscar) return false;
//   }
//   return true;
// }

// console.log(allOscarWinners([
//   {
//     title: 'Forrest Gump',
//     wonOscar: true,
//   },
//   {
//     title: 'Moonlight',
//     wonOscar: false,
//   },
//   {
//     title: 'No Country for Old Men',
//     wonOscar: true,
//   },
// ]));
// should return true

// please complete this function...

console.log('JFEHJDJ');

function gatherPets(people) {
  let newArray = {...people};

  let petsNames = Object.entries(newArray);
  let sentence = [];


  for(let [keys, values] of [...petsNames]) { 
    sentence.push(...(values.pets));
  }
  return sentence;
};



console.log(gatherPets(([
  { name: 'Malcolm', pets: ['Bear', 'Minu'] },
  { name: 'Caroline', pets: ['Basil', 'Hamish'] },
])));



console.log(
  gatherPets([
    { name: 'Malcolm', pets: ['Bear', 'Minu'] },
    { name: 'Caroline', pets: ['Basil', 'Hamish'] },
  ])
);
// should return ['Bear', 'Minu', 'Basil', 'Hamish']

