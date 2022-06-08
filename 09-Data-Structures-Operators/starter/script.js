'use strict';

const openingHours = {
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
};
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
  openingHours, //Enhanced Object Literals object nested

  orderDelivery({ starterIndex = 1, mainIndex = 0, time = '20:00', address }) {
    //Enhanced Object Literals function
    console.log(
      `Order received! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time}`
    );
  },
  orderPasta(ing1, ing2, ing3) {
    console.log(`Here is your delicious pasta with ${ing1}, ${ing2}, ${ing3}.`);
  },
  orderPizza(mainIngridient, ...otherIngredients) {
    console.log(mainIngridient, otherIngredients);
  },
};
///////////////////////
// Loop over object
//Property name
// const properties = Object.keys(openingHours); // obj.keys property
// console.log(properties);

// let openStr = `We are open on ${properties.length} days`;

// // for loop over object
// for (const day of Object.keys(openingHours)) {
//   openStr += ` ${day},`;
// }
// console.log(openStr);
// // Property values

// const values = Object.values(openingHours);
// console.log(values);

// //Property entries
// const entries = Object.entries(openingHours);
// console.log(entries);
// for (const [key, { open, close }] of entries) {
//   console.log(`On ${key} we opena at${open} and close at ${close}`);
// }

/////////////////////
// Optional chaining
// without
// if (restaurant.openingHours && restaurant.openingHours.mon)
//   console.log(restaurant.openingHours.mon.open);
// // With optional chaining
// console.log(restaurant.openingHours.mon?.open);
// //Example
// const days = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];
// for (const day of days) {
//   console.log(day);
//   const open = restaurant.openingHours[day]?.open ?? 'closed';
//   console.log(`On ${day}, we are open at ${open}`);
// }

// // Method
// console.log(restaurant.order?.(0, 1) ?? 'Method does not exist');
// console.log(restaurant.orderRisotto?.(0, 1) ?? 'Method does not exist');

// ///Arrays
// const users = [{ name: 'Piotr', email: 'hello@wp.pl' }];

// console.log(users[0]?.name ?? 'User array empty');

// //////////////////////////////////
// //Spread operator  (destrukturyzacja tablicy na pojedyncze iterły)
// const arr = [7, 8, 9];
// const newArr = [1, 2, ...arr];
// console.log(newArr);

// console.log(...newArr);

// const newMenu = [...restaurant.mainMenu, 'Gnocci'];
// console.log(newMenu);

// //copy array
// const mainMenuCopy = [...restaurant.mainMenu];

// //join 2 arrays
// const menu = [...restaurant.starterMenu, ...restaurant.mainMenu];
// console.log(menu);

// // Iterables : arrays, strings, maps, seats.  NOT objects

// const str = 'Piotr';
// const letters = [...str, ' ', 'P.'];
// console.log(letters);

//Example 1

// const ingrediens = [
//   prompt("Let's make pasta! Ingredient 1?"),
//   prompt('Ingredient 2?'),
//   prompt('Ingredient 3?'),
// ];
// console.log(ingrediens);

//call a function pasta
// restaurant.orderPasta(...ingrediens);

// Objects !!!!!!!
//const newRestaurant = { foundedIn: 1998, ...restaurant, founder: 'Guiseppe' };
// console.log(newRestaurant);

// const restaurantCopy = { ...restaurant };
// restaurantCopy.name = 'Ristorante Roma';
// console.log(restaurantCopy.name);
// console.log(restaurant.name);
/////////////////
// 1) Destructuring
// Spread, becouse on right side of =
// const arr = [1, 22, ...[3, 4]];

// //Rest, becouse on left side of =
// const [a, b, ...others] = [1, 2, 3, 4, 5];
// console.log(a, b, others);
// const [pizza, , risotto, ...otherFood] = [
//   ...restaurant.mainMenu,
//   restaurant.starterMenu,
// ];
// console.log(pizza, risotto, otherFood);

// //Rest in objects
// const { sat, ...weekDays } = restaurant.openingHours;
// console.log(weekDays);

// // 2) Functions
// const add = function (...numbers) {
//   let sum = 0;
//   for (let i = 0; i < numbers.length; i++) {
//     sum += numbers[i];
//   }
//   console.log(sum);
// };
// add(2, 3, 4);
// add(1, 2, 3, 4, 5, 6, 7);

// const x = [23, 5, 7];
// add(...x);

// // example 2
// restaurant.orderPizza('mushrooms', 'onion', 'olives', 'spinach');
////////////////////////////////////////////
//Destructuring data in array

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
//Destructuring data in objects

// const { name, categories, openingHours } = restaurant;
// console.log(name, categories, openingHours);

// // Reassign a variable name
// const {
//   name: restaurantName,
//   categories: tags,
//   openingHours: hours,
// } = restaurant;
// console.log(restaurantName, tags, hours);

// //Set a default value

// const { menu = [], starterMenu = [] } = restaurant;
// console.log(menu, starterMenu);

// //Mutating objects
// let a = 111;
// let b = 999;
// const obj = { a: 23, b: 7, c: 3 };

// ({ a, b } = obj);
// console.log(a, b);

// //Nested objects

// const {
//   fri: { open: o, close: c },
// } = openingHours;
// console.log(o, c);

// // Destructuring Objects
// restaurant.orderDelivery({
//   //calling a function from object
//   time: '22:30',
//   address: 'Via del Sole, 21',
//   mainIndex: 2,
//   starterIndex: 2,
// });

// restaurant.orderDelivery({
//   address: 'Via del Sole, 21',
//   starterIndex: 1,
// });

// Short circuiting (&& and ||)
// Use ANY data type, return ANY data type,short-circuiting
/* console.log('------- OR ----------------');

console.log(3 || 'piotr');
console.log('' || 'piotr');
console.log(true || 0);
console.log(undefined || null);

console.log(undefined || 0 || '' || 'hello' || 23);
 */
//example
/* 
// restaurant.numGuests = 23;
const guests1 = restaurant.numGuests ? restaurant.numGuests : 10; // if rest,numguest have  a guest than get value 10

console.log(guests1);

const guests2 = restaurant.numGuests || 10;
console.log(guests2);

console.log('---------- AND -----------'); // work oposit to or operator, return first falsy value or last truthly value

console.log(0 && 'Piotr');
console.log(7 && 'Piotr');
console.log('hello' && 'Me' && 23 && undefined && 85);

// example
if (restaurant.orderPizza) {
  restaurant.orderPizza('mushrooms', 'spinach');
}

restaurant.orderPizza && restaurant.orderPizza('mushrooms', 'spinach'); // that means this same was a line abowe
 */

////////////////////////////
// // nullish coaleshing operator
// restaurant.numGuests = 0;
// const guests = restaurant.numGuests || 10;
// console.log(guests);

// Logical assigment operator

// const rest1 = {
//   name: 'Capri',
//   numGuest: 0,
// };

// const rest2 = {
//   name: 'La Pizza',
//   owner: 'Giovanni Rossi',
// };

//OR assigment
// rest1.numGuest = rest1.numGuest || 10;
// rest2.numGuest = rest2.numGuest || 10;
// rest1.numGuest ||= 10;
// rest2.numGuest ||= 10;

// //nullish assigment operator ( null or undefined)
// rest1.numGuest ??= 10;
// rest2.numGuest ??= 10;

// //AND assigment operator

// rest1.owner &&= '<ANONYMOUS>';
// rest2.owner &&= '<ANONYMOUS>';

// console.log(rest1);
// console.log(rest2);

///////////////////////////////////////
// Coding Challenge #1

/* 
We're building a football betting app (soccer for my American friends 😅)!

Suppose we get data from a web service about a certain game (below). In this challenge we're gonna work with the data. So here are your tasks:

1. Create one player array for each team (variables 'players1' and 'players2')
2. The first player in any player array is the goalkeeper and the others are field players. For Bayern Munich (team 1) create one variable ('gk') with the goalkeeper's name, and one array ('fieldPlayers') with all the remaining 10 field players
3. Create an array 'allPlayers' containing all players of both teams (22 players)
4. During the game, Bayern Munich (team 1) used 3 substitute players. So create a new array ('players1Final') containing all the original team1 players plus 'Thiago', 'Coutinho' and 'Perisic'
5. Based on the game.odds object, create one variable for each odd (called 'team1', 'draw' and 'team2')
6. Write a function ('printGoals') that receives an arbitrary number of player names (NOT an array) and prints each of them to the console, along with the number of goals that were scored in total (number of player names passed in)
7. The team with the lower odd is more likely to win. Print to the console which team is more likely to win, WITHOUT using an if/else statement or the ternary operator.

TEST DATA FOR 6: Use players 'Davies', 'Muller', 'Lewandowski' and 'Kimmich'. Then, call the function again with players from game.scored

GOOD LUCK 😀
*/
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
// //1.
// const [player1, player2] = game.players;
// console.log(player1, player2);

// //2.
// const [gk, ...fieldPlayers] = player1;
// console.log(gk, fieldPlayers);

// //3.
// const allPlayers = [...player1, ...player2];
// console.log(allPlayers);

// //4.
// const players1Final = [...player1, 'Thiago', 'Coutinho', 'Perisic'];
// console.log(players1Final);

// //5.
// const {
//   odds: { team1, x: draw, team2 },
// } = game;
// console.log(team1, draw, team2);

// //6.
// const printGoals = function (...players) {
//   console.log(players);
//   console.log(`${players.length}goals were scored`);
// };
// printGoals('Davies', 'Muller', 'Lewandowski', 'Kimmich');
// printGoals(...game.scored);

// //7.
// team1 < team2 && console.log('Team1 is more likely to win');
// team2 < team1 && console.log('Team2 is more likely to win');
///////////////////////////////////////
// Coding Challenge #2

/* 
Let's continue with our football betting app!

1. Loop over the game.scored array and print each player name to the console, along with the goal number (Example: "Goal 1: Lewandowski")
2. Use a loop to calculate the average odd and log it to the console (We already studied how to calculate averages, you can go check if you don't remember)
3. Print the 3 odds to the console, but in a nice formatted way, exaclty like this:
      Odd of victory Bayern Munich: 1.33
      Odd of draw: 3.25
      Odd of victory Borrussia Dortmund: 6.5
Get the team names directly from the game object, don't hardcode them (except for "draw"). HINT: Note how the odds and the game objects have the same property names 😉

BONUS: Create an object called 'scorers' which contains the names of the players who scored as properties, and the number of goals as the value. In this game, it will look like this:
      {
        Gnarby: 1,
        Hummels: 1,
        Lewandowski: 2
      }

GOOD LUCK 😀
*/
// 1.
//(Example: "Goal 1: Lewandowski")
// for (const [i, pl] of game.scored.entries()) {
//   console.log(`Goal ${i + 1}: ${pl}`);
// }

// //2.
// const odds = Object.values(game.odds);
// //console.log(odds);
// let average = 0;
// for (const odd of odds) {
//   average += odd;
// }
// average /= odds.length;
// console.log(average);

// //3.
// // Odd of victory Bayern Munich: 1.33
// // Odd of draw: 3.25
// // Odd of victory Borrussia Dortmund: 6.5

// for (const [player, odd] of Object.entries(game.odds)) {
//   const win = player === 'x' ? 'draw' : `victory ${game[player]}`;
//   console.log(`Odd of ${win}: ${odd}`);
// }

// ////////////////////////////////////
// Looping Array  the for of loop
// const menu = [...restaurant.starterMenu, ...restaurant.mainMenu];

// for (const item of menu) console.log(item);

// for (const [i, el] of menu.entries()) {
//   console.log(`${i + 1}: ${el}`);
// }

/////////////////////////////
//Enhanced object literals
//look in restaurant object

////////////////////////////////
// Sets data structur
// const orderSet = new Set([
//   'Pasta',
//   'Pizza',
//   'Pizza',
//   'Risotto',
//   'Pasta',
//   'Pizza',
// ]);
// console.log(orderSet);

// console.log(new Set('Piotr'));
// console.log(orderSet.size);
// console.log(orderSet.has('Pizza'));
// console.log(orderSet.has('Bread'));
// orderSet.add('Garlic Bread');
// orderSet.delete('Risotto');
// // orderSet.clear();
// console.log(orderSet);
// for (const order of orderSet) console.log(order);

// // Exaple - remove duplicated version of array
// const staff = ['Waiter', 'Chef', 'Waiter', 'Menager', 'Chef', 'Waiter'];

// const staffUnique = [...new Set(staff)]; // make a new array with a Set el items
// console.log(staffUnique);

// console.log(
//   new Set(['Waiter', 'Chef', 'Waiter', 'Menager', 'Chef', 'Waiter']).size
// ); // checking a size of a staff array

// console.log(new Set('PiotrPotrac').size);

// /////////////////////////////
// // Maps data structur

// const rest = new Map();
// rest.set('name', 'Classico Italiano');
// rest.set(1, 'Firenze, Italy');

// console.log(rest.set(2, 'Lisbon, Portugal'));

// rest
//   .set('categories', ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'])
//   .set('open', 11)
//   .set('close', 22)
//   .set(true, 'We are open.')
//   .set(false, 'We are closed.');

// console.log(rest.get('name'));
// console.log(rest.get(true));

// //Example

// const time = 23;
// console.log(rest.get(time > rest.get('open') && time < rest.get('close'))); // cheking or in var time restaurant is open or closed

// console.log(rest.has('categories'));
// const arr = [1, 2];
// rest.set(arr, 'Test');
// rest.delete(2);
// // rest.clear();
// console.log(rest);
// console.log(rest.size);
// console.log(rest.get(arr));

// /////////////////////////////
// // Maps objects

// const question = new Map([
//   ['question', 'What is the best programing language?'],
//   [1, 'C'],
//   [2, 'Java'],
//   [3, 'JavaScript'],
//   ['correct', 3],
//   [true, 'Correct🧨'],
//   [false, 'Try again!'],
// ]);
// console.log(question);

// // Convert object to map

// console.log(Object.entries(openingHours));
// const hoursMap = new Map(Object.entries(openingHours));

// console.log(hoursMap);
// //Quiz app
// console.log(question.get('question'));
// for (const [key, value] of question) {
//   if (typeof key === 'number')
//     console.log(`Answer $3
//   {key}: ${value}`);
// }
// // const answer = Number(prompt('What is the best programing language?'));
// const answer = 3;
// console.log(answer);

// const result = question.get(question.get('correct') === answer);
// console.log(result);

// // Convert map to array
// console.log([...question]);
// // console.log(question.entries());
// console.log([...question.keys(2)]);
// console.log([...question.values()]);

//Coding Challenge #3

/* 
Let's continue with our football betting app! This time, we have a map with a log of the events that happened during the game. The values are the events themselves, and the keys are the minutes in which each event happened (a football game has 90 minutes plus some extra time).

1. Create an array 'events' of the different game events that happened (no duplicates)
2. After the game has finished, is was found that the yellow card from minute 64 was unfair. So remove this event from the game events log.
3. Print the following string to the console: "An event happened, on average, every 9 minutes" (keep in mind that a game has 90 minutes)
4. Loop over the events and log them to the console, marking whether it's in the first half or second half (after 45 min) of the game, like this:
      [FIRST HALF] 17: ⚽️ GOAL

GOOD LUCK 😀
*/ // first half

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
// //1.
// // const events = new Set();
// // for (const [key, value] of gameEvents) {
// //   events.add(value);
// // }
// // console.log(events);
// //
// const events = [...new Set(gameEvents.values())];
// console.log(events);

// //2.
// gameEvents.delete(64);
// console.log(gameEvents);

// //3.
// console.log(
//   `An event happened, on average, every ${90 / gameEvents.size} minutes`
// );

// //4.
// // for (const [key, value] of gameEvents) {
// //   if (key <= 45) {
// //     console.log(`[FIRST HALF] ${key}: ${value}`);
// //   } else console.log(`[SECOND HALF] ${key}: ${value}`);
// // }

// //
// for (const [key, value] of gameEvents) {
//   const half = key <= 45 ? 'First' : 'Second';
//   console.log(`[${half} HALF] ${key}: ${value}`);
// }

/////////////////////////
// Strings

// const airline = 'TAP Air Portugal';
// const plane = 'A320';

// console.log(plane[0]);
// console.log(plane[5]);
// console.log('B474'.length);

// console.log(airline.indexOf('r'));
// console.log(airline.lastIndexOf('r'));
// console.log(airline.indexOf('Portugal'));

// console.log(airline.slice(4));
// console.log(airline.slice(4, 7)); //cut before 4 index place and before 7 i place (7-4) length = 3
// console.log(airline.slice(airline.indexOf('Air')));

// console.log(airline.slice(0, airline.indexOf(' ')));
// console.log(airline.slice(airline.lastIndexOf(' ') + 1));

// console.log(airline.slice(-2)); // EXtracting from the end
// console.log(airline.slice(1, -1));

// //////////
// // exercise

// const checkMiddleSeat = function (seat) {
//   const s = seat.slice(-1);
//   if (s === 'B' || s == 'E') console.log(`You got a middle seat`);
//   else console.log('You got lucky');
// };
// // B and E is middle seats
// checkMiddleSeat('11B');
// checkMiddleSeat('23C');
// checkMiddleSeat('3E');

// checkMiddleSeat('11B');

// //

// console.log(airline.toLowerCase());
// console.log(airline.toUpperCase());

// // Fix capitalization in name
// const passanger = 'jOnAS'; // Jonas;
// const passangerLower = passanger.toLowerCase();
// const passangerCorect =
//   passangerLower[0].toUpperCase() + passangerLower.slice(1);
// console.log(passangerCorect);

// // in function
// const capitalization = function (string) {
//   const stringLower = string.toLowerCase();
//   //console.log(stringLower);
//   const stringCorrect = stringLower[0].toUpperCase() + stringLower.slice(1);
//   console.log(stringCorrect);
// };

// console.log(capitalization('mAreCZek'));

// // example comparing email
// const email = 'hello@piotr.io';
// const loginEmail = '   Hello@Piotr.Io  \n';

// // const lowerEmail = loginEmail.toLowerCase();
// // const trimmedEmail = lowerEmail.trim();
// // console.log(trimmedEmail);
// // // 2 way

// const normalizedEmail = loginEmail.toLowerCase().trim();
// console.log(email === normalizedEmail ? 'Email Correct' : 'Check your email!');

// ///Replacing

// const priceGb = '288,97Ł';
// const priceUS = priceGb.replace('Ł', '$').replace(',', '.');
// console.log(priceUS);

// const announcement =
//   'All passanger come to boarding door 23. Boarding door 23!';
// console.log(announcement.replaceAll('door', 'gate'));

// // Booleans

// const plane1 = 'Airbus A320neo';
// console.log(plane1.includes('A320'));
// console.log(plane1.includes('Boeing'));
// console.log(plane1.startsWith('Airb'));

// if (plane1.startsWith('Airbus') && plane1.endsWith('neo')) {
//   console.log('Part of the New Airbus family');
// }
// // Exercise
// const checkBaggage = function (items) {};

// checkBaggage('I have a laptop, some food and a pocket knife');
// checkBaggage('I have socks and camera');
// checkBaggage('Got some snacks and a gun for protection');

////////////////////////
// Split metod on string

// console.log('a+very+nice+string'.split('+'));

// const [firstName, lastName] = 'Piotr Potrac'.split(' ');
// console.log(firstName, lastName);

// const newName = ['Mr.', firstName, lastName.toUpperCase()].join(' ');
// console.log(newName);

// const passanger = 'jessica ann smith davis';
// const capitalizeName = function (name) {
//   const names = name.split(' ');
//   const newNames = [];
//   for (const person of names) {
//     // newNames.push(person[0].toUpperCase() + person.slice(1));
//     newNames.push(person.replace(person[0], person[0].toUpperCase()));
//   }
//   console.log(newNames);
// };

// capitalizeName('jessica ann smith davis');
// capitalizeName('piotr potrac');

// //Padding  -  dodawanie tylu znakow zeby string osiagnał zadaną długość

// const message = 'Go to gate 23';
// console.log(message.padStart(25, '+').padEnd(30, '+'));
// console.log('piotr'.padStart(25, '+'));

// //Example maskin a credit card number

// const maskCreditCard = function (number) {
//   const str = String(number);
//   const last = str.slice(-4).padStart(str.length, '*');
//   return last;
// };
// console.log(maskCreditCard(235648565465465));
// console.log(maskCreditCard(235654684348));
// console.log(maskCreditCard(23564547788964725));

// //Repeat

// const message2 = 'Bad weather... All departues Dalayed...';
// console.log(message2.repeat(5));

// const planesInLine = function (n) {
//   console.log(`There are ${n} planes in line ${'✈'.repeat(n)}`);
// };
// planesInLine(2);
// planesInLine(5);
// planesInLine(12);

///////////////////////////////////////
// Coding Challenge #4

/* 
Write a program that receives a list of variable names written in underscore_case and convert them to camelCase.

The input will come from a textarea inserted into the DOM (see code below), and conversion will happen when the button is pressed.

THIS TEST DATA (pasted to textarea)
underscore_case
 first_name
Some_Variable 
  calculate_AGE
delayed_departure

SHOULD PRODUCE THIS OUTPUT (5 separate console.log outputs)
underscoreCase      ✅
firstName           ✅✅
someVariable        ✅✅✅
calculateAge        ✅✅✅✅
delayedDeparture    ✅✅✅✅✅

HINT 1: Remember which character defines a new line in the textarea 😉
HINT 2: The solution only needs to work for a variable made out of 2 words, like a_b
HINT 3: Start without worrying about the ✅. Tackle that only after you have the variable name conversion working 😉
HINT 4: This challenge is difficult on purpose, so start watching the solution in case you're stuck. Then pause and continue!

Afterwards, test with your own test data!

GOOD LUCK 😀
*/

// document.body.append(document.createElement('textarea'));
// document.body.append(document.createElement('button'));
// document.querySelector('button').addEventListener('click', function () {
//   const text = document.querySelector('textarea').value;
//   const arr = text.split('\n');
//   let new1 = [];
//   for (const [index, row] of arr.entries()) {
//     const [a, b] = row.toLowerCase().trim().split('_');
//     //console.log([a, b]);
//     const outputs = `${a}${b.replace(b[0], b[0].toUpperCase())}`;
//     console.log(`${outputs.padEnd(20)}${'✅'.repeat(index + 1)}`);
//   }

//console.log(new1);
// });

////////////////////////
// Exercises with strings
// Data needed for a later exercise
const flights =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

const getCode = str => str.slice(0, 3).toUpperCase();

for (const flight of flights.split('+')) {
  const [type, from, to, time] = flight.split(';');
  const output = `${type.startsWith('_Delayed') ? '🔴' : ''}${type.replaceAll(
    '_',
    ' '
  )} from ${getCode(from)} to ${getCode(to)} (${time.replace(
    ':',
    'h'
  )})`.padStart(56);
  console.log(output);
}
