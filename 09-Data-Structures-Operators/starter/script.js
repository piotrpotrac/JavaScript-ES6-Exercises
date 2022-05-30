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
  order: function (starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },
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
  orderDelivery({ starterIndex = 1, mainIndex = 0, time = '20:00', address }) {
    console.log(
      `Order received! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time}`
    );
  },
};
////////////////////////////////////////////
//Destructurization data in array

// const arr = [2, 3, 4];
// const [a, b, c] = arr;
// console.log(a, b, c);

// let [main, secondary] = restaurant.categories;
// console.log(main, secondary);

// // Switching variable
// [main, secondary] = [secondary, main];
// console.log(main, secondary);

// //return  2 recive value froma  function
// const [starter, mainCourse] = restaurant.order(2, 0);
// console.log(starter, mainCourse);
// //nested array
// const nested = [2, 3, [4, 5]];
// const [i, , [j, k]] = nested;
// console.log(i, j, k);

// // Default value

// const [p = 1, q = 1, r = 1] = [8, 9]; // set a default value each to variable

// console.log(p, q, r);

/////////////////////////////////////
//Destructurization data in objects

const { name, categories, openingHours } = restaurant;
console.log(name, categories, openingHours);

// Reassign a variable name
const {
  name: restaurantName,
  categories: tags,
  openingHours: hours,
} = restaurant;
console.log(restaurantName, tags, hours);

//Set a default value

const { menu = [], starterMenu = [] } = restaurant;
console.log(menu, starterMenu);

//Mutating objects
let a = 111;
let b = 999;
const obj = { a: 23, b: 7, c: 3 };

({ a, b } = obj);
console.log(a, b);

//Nested objects

const {
  fri: { open: o, close: c },
} = openingHours;
console.log(o, c);

// Destructuring Objects
restaurant.orderDelivery({
  //calling a function from object
  time: '22:30',
  address: 'Via del Sole, 21',
  mainIndex: 2,
  starterIndex: 2,
});

restaurant.orderDelivery({
  address: 'Via del Sole, 21',
  starterIndex: 1,
});
