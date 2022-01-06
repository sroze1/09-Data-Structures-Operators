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

console.log(pizza, risotto, otherFood);

// Objects
const { sat, ...weekdays } = restaurant.openingHours;
console.log(weekdays);

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

  console.log(sum);
};

add(2, 3);
add(5, 3, 7, 2);
add(8, 2, 5, 3, 2, 1, 4);

const x = [23, 5, 7];

add(...x);

restaurant.orderPizza('mushrooms', 'onion', 'olives', 'spinach');
restaurant.orderPizza('mushrooms');

// HOW TO KNOW WHEN AND WHERE TO USE REST?
// SPREAD is used where we would usually write values separated by commas
// On the other hand
// REST pattern is used where we would otherwise use variable names separated by commas
// And not values separated by commas
