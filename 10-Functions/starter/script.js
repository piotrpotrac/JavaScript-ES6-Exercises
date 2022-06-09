'use strict';
/////////////////////////////////
// daclaring a default value
// const bookings = [];
// const createBooking = function (
//   flightNum,
//   numPassangers = 1,
//   price = 199 * numPassangers
// ) {
//   const booking = {
//     flightNum,
//     numPassangers,
//     price,
//   };
//   console.log(booking);
//   bookings.push(booking);
// };

// createBooking('LH123');
// createBooking('LH123', 2, 800);
// createBooking('LH123', undefined, 800);
// createBooking('LH123', 5);
// createBooking('LH123', 2);

///////////////////////
// How passing argument work

// const flight = 'LH234';
// const piotr = {
//   name: 'Piotr Potrac',
//   passport: 2849651686531,
// };

// const checkIn = function (flightNum, passenger) {
//   flightNum = 'LH999';
//   passenger.name = `Mr. ` + passenger.name;

//   if (passenger.passport === 2849651686531) {
//     alert('Checked In');
//   } else {
//     alert('Wrong passport');
//   }
// };
// // checkIn(flight, piotr);
// // console.log(flight);
// // console.log(piotr);

// //is the same as doing
// // const flightNum = flight;
// // const passenger = piotr;

// const newPassport = function (person) {
//   person.passport = Math.trunc(Math.random() * 100000000000);
// };

// newPassport(piotr);
// checkIn(flight, piotr);
// console.log(piotr);
//////////////////////////////////////////
//Function acepting callback functions

// const oneWord = function (str) {
//   return str.replace(/ /g, '').toLowerCase();
// };

// const upperFirstWord = function (str) {
//   const [first, ...others] = str.split(' ');
//   return [first.toUpperCase(), ...others].join(' ');
// };

// // High order function
// const transformer = function (str, fn) {
//   console.log(`Original string: ${str}`);
//   console.log(`Transformed string: ${fn(str)}`);
//   console.log(`Transformed by: ${fn.name}`);
// };

// transformer('JavaScript is the best!', upperFirstWord);
// transformer('JavaScript is the best!', oneWord);
// // exmpl 2
// const high5 = function () {
//   console.log(`✋`);
// };

// document.body.addEventListener('click', high5);
// ['Piotr', 'Marta', 'Adam'].forEach(high5);

// // example

// const modulo = function (n) {
//   console.log(n % 2);
//   return n % 2;
// };
// const check = function (n, modulo) {
//   const x = modulo(n);
//   console.log(x === 0 ? 'Even Number' : 'Odd Number');
// };

// check(8, modulo);

///////////////////
//Function returning function
// const greet = function (greeting) {
//   return function (name) {
//     console.log(`${greeting} ${name}`);
//   };
// };
// const greetArr = greeting => name => console.log(`${greeting} ${name}`); // this same
// const greeterHey = greet('Hey');
// greeterHey('Piotr');
// greeterHey('Mike');

// greet('Hey')('Piotr');
// greetArr('Hi')('Piotr');

//////////////////////////////////
const lufthansa = {
  airline: 'Lufthansa',
  iataCode: 'LH',
  booking: [],
  book(flightNum, name) {
    console.log(
      `${name} booked a seat on ${this.airline} flight ${this.iataCode}${flightNum}`
    );
    this.booking.push({
      flight: `${this.iataCode}${flightNum}`,
      name,
    });
  },
};

lufthansa.book(239, 'Piotr Potrac');
lufthansa.book(658, 'Marek Nowak');
console.log(lufthansa);

const eurowings = {
  airline: 'Eurowings',
  iataCode: 'EW',
  booking: [],
  book(flightNum, name) {
    console.log(
      `${name} booked a seat on ${this.airline} flight ${this.iataCode}${flightNum}`
    );
    this.booking.push({
      flight: `${this.iataCode}${flightNum}`,
      name,
    });
  },
};

const swiss = {
  airline: 'Swiss Air Lines',
  iataCode: 'LX',
  booking: [],
  book(flightNum, name) {
    console.log(
      `${name} booked a seat on ${this.airline} flight ${this.iataCode}${flightNum}`
    );
    this.booking.push({
      flight: `${this.iataCode}${flightNum}`,
      name,
    });
  },
};

const book = lufthansa.book;
// Call method
book.call(eurowings, 299, 'Wojtek Cajak'); // .call() daje nam dostep do słowa kluczowego this w aktualnym objekcie
// console.log(eurowings);
// Apply function

const flightData = [358, 'Dorota Lesner']; // to samo co call(object_from_this_keyword,arg1,arg2) tylko .apply(object_from_this_keyword, [arg1, arg2])
book.apply(eurowings, flightData);
console.log(eurowings.booking);

// Bind method         ta metoda zwraca nam funkcję a nie wartość, dlatego przypisujemy ja do zmiennej i wywolujemy jeszcze raz, mozna przypisać wiecej niz jeden parametr wejsciowy
book.call(eurowings, 299, 'Wojtek Cajak');
const bookEW = book.bind(eurowings);
const bookLH = book.bind(lufthansa);
const bookLX = book.bind(swiss);

bookEW(28, 'Steven Wiliams');
const bookEW23 = book.bind(eurowings, 23);
bookEW23('Piotr Potrac');
bookEW23('Marta Cooper');

console.log(eurowings);
