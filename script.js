'use strict';

// Data needed for a later exercise
const flights =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

// Data needed for first part of the section
const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],
  openingHours: {
    thu: {
      open: 12,
      close: 22,
    },
    fri: {
      open: 11,
      close: 23,
    },
    sat: {
      open: 0, // Open 24 hours
      close: 24,
    },
  },

  order: function (starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },

  orderDelivery: function ({
    starterIndex = 1,
    mainIndex = 0,
    time = '20:00',
    address,
  }) {
    // console.log(`Order received! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]}
    // will be delivered to ${address} at ${time}`);
  },

  orderPasta: function (ing1, ing2, ing3) {
    // console.log(`Here is your delicious pasta with ${ing1}, ${ing2}, ${ing3}`);
  },

  orderPizza: function (mainIngredient, ...otherIngredients) {
    console.log(mainIngredient);
    console.log(otherIngredients);
  },
};

restaurant.orderDelivery({
  time: '22:30',
  address: 'Via del Sole, 21',
  mainIndex: 2,
  starterIndex: 2,
});

restaurant.orderDelivery({
  address: 'Via del Sole, 21',
  starterIndex: 1,
});

// Real world example
// const ingredients = [
//   prompt("Let's make pasta! Ingredient 1?"),
//   prompt('Ingredient 2?'),
//   prompt('Ingredient 3?'),
// ];

// console.log(ingredients);
// // Instead of writing this
// restaurant.orderPasta(ingredients[0], ingredients[1], ingredients[2]);

// // It's easier writing this:
// restaurant.orderPasta(...ingredients);

// Objects
// const newRestaurant = { foundedin: 1997, ...restaurant, founder: 'Guiseppe' };
// console.log(newRestaurant);

// const newRestaurant2 = {};

// const restaurantCopy = { ...restaurant };
// restaurantCopy.name = 'Ristorante Roma';
// console.log(restaurantCopy.name);
// console.log(restaurant.name);

// Curly braces are used, as this is what's used to create objects
// const { name, openingHours, categories } = restaurant;
// console.log(name, openingHours, categories);

// const {
//   name: restaurantName,
//   openingHours: hours,
//   categories: tags,
// } = restaurant;
// console.log(restaurantName, hours, tags);

// it is useful to also set default values
// const { menu = [], starterMenu: starters = [] } = restaurant;
// console.log(menu, starters);

//Mutating variables
// let a = 111;
// let b = 999;
// const obj = { a: 23, b: 7, c: 14 };
// ({ a, b } = obj);
// console.log(a, b);

//Nested Objects
// const {
//   fri: { open: o, close: c },
// } = openingHours;
// console.log(o, c);

// const arr = [2,3,4];
// const a = arr[0];
// const b = arr[1];
// const c = arr[2];

// const [x,y,z,k,l] = arr;
// console.log(x,y,z);

// const arr = [7, 8, 9];
// const badNewArr = [1, 2, arr[0], arr[1], arr[2]];
// console.log(badNewArr);

// Spread operator takes all the elements out of the array
// And then writes them individually-- just how we did so above
// If we wrote it without the ... first, then it would simply print the entire array
// And not it's values individually
// const newArr = [1, 2, ...arr];
// console.log(newArr);

// If we use the spread function on an array, then instead of showing them in the array
// It's as if the code extracts the entire newArr array, and lists the
// elements from it individually.
// console.log(...newArr);

// Now we will create a new menu here with one more item than the restaurant.mainMenu
const newMenu = [...restaurant.mainMenu, 'Gnocci'];
// console.log(newMenu);

// Copy Array
// This is actually a bit similar to Object.assign we used earlier, however this
// syntax is a lot easier to use and to remember
const mainMenuCopy = [...restaurant.mainMenu];

//Join 2 arrays or more
const menu1 = [...restaurant.mainMenu, ...restaurant.starterMenu];
// console.log(menu1);

// The spread operator works on all possible iterables.
// Strings, arrays, maps or sets but NOT objects
// Each bit of the string is an individual element, and is unpacked when using the spread
// We can still only use the spread operator when building an array or when we pass values
// into a function
const str = 'Jonas';
const letters = [...str, ' ', 'S.'];
// console.log(...letters);

// We can't use it to build a string on the other hand,
// console.log(`${...str} Scmedtmann`);
// We can only use it in places that expect multiple values separated by commas

// 1) Destructuring
// REST pattern looks exactly like the spread operator, but does the opposite.
// We use a spread operator to build arrays and to also to pass arguments into a functio
// SPREAD, because on the rigfht side of =

// SPREAD, because on RIGHT side of =
const arr = [1, 2, ...[3, 4]];

// REST, because on LEFT side of =
// REST collects elements that are unused in the destrucuring assignment
const [a, b, ...others] = [1, 2, 3, 4, 5];
console.log(a, b, others);

// The REST element only collects the remaining elements
// It does not collect the skipped elements,
// And as it only collects remaining elements, it must be the last element
const [pizza, , risotto, ...otherFood] = [
  ...restaurant.mainMenu,
  ...restaurant.starterMenu,
];

// console.log(pizza, risotto, otherFood);

// Objects
const { sat, ...weekdays } = restaurant.openingHours;
// console.log(weekdays);

// 2) Functions
// The second use case for spread operator was to pass in multiple arguments
// into a function all at the same time
// In the same way, we can pack using REST -- to do the opposite.

// In this case this is the REST parameters
const add = function (...numbers) {
  let sum = 0;

  for (let i = 0; i < numbers.length; i++) {
    sum += numbers[i];
  }

  // console.log(sum);
};

add(2, 3);
add(5, 3, 7, 2);
add(8, 2, 5, 3, 2, 1, 4);

const x = [23, 5, 7];

add(...x);

// restaurant.orderPizza('mushrooms', 'onion', 'olives', 'spinach');
// restaurant.orderPizza('mushrooms');

// HOW TO KNOW WHEN AND WHERE TO USE REST?
// SPREAD is used where we would usually write values separated by commas
// On the other hand
// REST pattern is used where we would otherwise use variable names separated by commas
// And not values separated by commas

// SHORT CIRCUITING && AND ||

// 3 PROPERTIES OF LOGICAL OPERATORS
// Can use ANY data type, return ANY data type, short-circuiting

console.log('------OR-------');
// Short circuiting means if the first value is a truthy value, It will immediately return the first value
// 3 is a truthy value as seen below
// JS won't even look at the string
console.log(3 || 'Jonas');
console.log('' || 'Jonas');
console.log(true || 0);
console.log(undefined || null); // Here, the first value is a falsy so we move to the second value,
// the second is also a falsy but there is no short circuiting , so null is returned

// The result of this short circuit is 'Hello' because the first Truthy value is returned
console.log(undefined || 0 || '' || 'Hello' || 23 || null);

// SHORT CIRCUIT USE CASE EXAMPLE
// Below we are using short ternary operator.
// In this case we don't know if it exists or not
// However we want to define a default value to the guests1 variable we created

// If the restaurant.numGuests exists, set guests1 to this value.
//If the restaurant.numGuests doesn't
// to create a new default value '10'

// If however we do set the property to 23, then guests1 will = 23.
// restaurant.numGuests = 23;

const guests1 = restaurant.numGuests ? restaurant.numGuests : 10;
console.log(guests1);

// This is a much easier method to set the values of things
// Than having to use the ternary operator
const guests2 = restaurant.numGuests || 10;
console.log(guests2);

// When the number of guests is 0 for restaurant.numGuests, it will NOT work
// Because 0 is a falsey value, it will set the default value to 10,
// even though the number of guests we want and set is to 0.

console.log('------AND-------');
// The && Operator works in the opposite way
// It immediately returns the first falsy value, without further evaluating anything else

console.log(0 && 'Jonas');

// In the same way as OR value, this will print Jonas, as when it's true it will continue
// And the last truthy value will be returned
console.log(7 && 'Jonas');

// This returns null, and the rest of the evaluation is short-circuited
console.log('Hello' && 23 && null && 'jonas');

// This makes sense, because with the && operator, something is only true if BOTH
// values are true, and therefore if one is false, it doesn't even match the condition
// for the && operator and so it doesn't continue

// Practical example
// Many times we can avoid an if statement if all we want to do is check if a certain..
// ..property or value exists.

if(restaurant.orderPizza) { 
  restaurant.orderPizza('mushrooms', 'spinach');
}

// This works, because if the first part is true, then the second part will be 
// evaluated as it's the final truthy in the statement

// Also we can call anything after the second operand.. we can even call a function.
restaurant.orderPizza && restaurant.orderPizza('mushrooms', 'spinach');


// Not all statements should be swapped for && and || Short circuits, as it will make 
// Your code much harder to read


// The OR returns the first truthy value, or the last one if all are falsy
// The AND returns the first falsy value, or the last one if all are truthy

// USE CASES:
// We can use the OR operator to set default values,
// We can use the AND operator to execute code in the second operand if the first one is true



restaurant.numGuests = 20;
const guests3 = restaurant.numGuests || 10;
console.log(guests3);

// Nullish: null and undefined (---NOT 0 or '' ---);
// With the syntax below only the nullish values would short circuit the evaluation
// Only then the second value would be returned. 
// So as the numGuests is actually = to 0, we want to make sure it is 0 and a 
// default isn't set of 10
const guestCorrect = restaurant.numGuests ?? 10;
console.log(guestCorrect);



// LOGICAL OPERATORS

// OR assignment operator
const rest1 = {
  name: 'Capri',
  numGuests: 0,
};

const rest2 = { 
  name: 'La Piazza',
  owner: 'Giovanni Rossi',
}

// OR operator
rest1.numGuests = rest1.numGuests || 10;
rest2.numGuests = rest2.numGuests || 10;
// Can be shortened: 
rest1.numGuests ||=10;
rest2.numGuests ||=10;

// If falsy, default numGuests is set = to 10;
// If we set the value of numGuests to 0, the rest1 numGuests will = 10 by default
// Although this isn't what we want.. so for this we also have the logical nullish 
// assignment operator

// Nullish assignment operator
// Will assign default if the value is nullish (null or undefined)
rest1.numGuests ??=10;
rest2.numGuests ??=10;

// Let's say we want to anonymise the restaurant owner names
// We can do this using the and operator
// If there is a rest2.owner, then set it = to <ANONYMOUS>
// If you have to assign a value to a variable that is already defined, you can use 
// truthy
rest1.owner &&= '<ANONYMOUS>';
rest2.owner &&= '<ANONYMOUS>';

console.log(rest1);
console.log(rest2);