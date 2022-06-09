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
// . methods to call a this keyword  (.call, .apply, .bind)
// const lufthansa = {
//   airline: 'Lufthansa',
//   iataCode: 'LH',
//   booking: [],
//   book(flightNum, name) {
//     console.log(
//       `${name} booked a seat on ${this.airline} flight ${this.iataCode}${flightNum}`
//     );
//     this.booking.push({
//       flight: `${this.iataCode}${flightNum}`,
//       name,
//     });
//   },
// };

// lufthansa.book(239, 'Piotr Potrac');
// lufthansa.book(658, 'Marek Nowak');
// console.log(lufthansa);

// const eurowings = {
//   airline: 'Eurowings',
//   iataCode: 'EW',
//   booking: [],
//   book(flightNum, name) {
//     console.log(
//       `${name} booked a seat on ${this.airline} flight ${this.iataCode}${flightNum}`
//     );
//     this.booking.push({
//       flight: `${this.iataCode}${flightNum}`,
//       name,
//     });
//   },
// };

// const swiss = {
//   airline: 'Swiss Air Lines',
//   iataCode: 'LX',
//   booking: [],
//   book(flightNum, name) {
//     console.log(
//       `${name} booked a seat on ${this.airline} flight ${this.iataCode}${flightNum}`
//     );
//     this.booking.push({
//       flight: `${this.iataCode}${flightNum}`,
//       name,
//     });
//   },
// };

// const book = lufthansa.book;
// // Call method
// book.call(eurowings, 299, 'Wojtek Cajak'); // .call() daje nam dostep do słowa kluczowego this w aktualnym objekcie
// // console.log(eurowings);
// // Apply function

// const flightData = [358, 'Dorota Lesner']; // to samo co call(object_from_this_keyword,arg1,arg2) tylko .apply(object_from_this_keyword, [arg1, arg2])
// book.apply(eurowings, flightData);
// console.log(eurowings.booking);

// // Bind method         ta metoda zwraca nam funkcję a nie wartość, dlatego przypisujemy ja do zmiennej i wywolujemy jeszcze raz, mozna przypisać wiecej niz jeden parametr wejsciowy
// book.call(eurowings, 299, 'Wojtek Cajak');
// const bookEW = book.bind(eurowings);
// const bookLH = book.bind(lufthansa);
// const bookLX = book.bind(swiss);

// bookEW(28, 'Steven Wiliams');
// const bookEW23 = book.bind(eurowings, 23);
// bookEW23('Piotr Potrac');
// bookEW23('Marta Cooper');

// console.log(eurowings);

// // Example  object and eventlisteners

// lufthansa.planes = 300;
// lufthansa.buyPlane = function () {
//   //console.log(this);
//   this.planes++;
//   console.log(this.planes);
// };
// document
//   .querySelector('.buy')
//   .addEventListener('click', lufthansa.buyPlane.bind(lufthansa));

//Partial aplication

// const addTax = (rate, value) => value + value * rate;

// console.log(addTax(0.1, 200));

// const addVAT = addTax.bind(null, 0.23);

// console.log(addVAT(28));

// // function returning function
// // const vat = function (value) {
// //   return function () {
// //     this.value + this.value * 0.23;
// //   };
// // };
// const vat = rate => value => value + value * rate;
// const addVat2 = vat(0.23);
// console.log(addVat2(50));

///////////////////////////////////////
// Coding Challenge #1

/* 
Let's build a simple poll app!

A poll has a question, an array of options from which people can choose, and an array with the number of replies for each option. This data is stored in the starter object below.

Here are your tasks:

1. Create a method called 'registerNewAnswer' on the 'poll' object. The method does 2 things:
  1.1. Display a prompt window for the user to input the number of the selected option. The prompt should look like this:
        What is your favourite programming language?
        0: JavaScript
        1: Python
        2: Rust
        3: C++
        (Write option number)
  
  1.2. Based on the input number, update the answers array. For example, if the option is 3, increase the value AT POSITION 3 of the array by 1. Make sure to check if the input is a number and if the number makes sense (e.g answer 52 wouldn't make sense, right?)
2. Call this method whenever the user clicks the "Answer poll" button.
3. Create a method 'displayResults' which displays the poll results. The method takes a string as an input (called 'type'), which can be either 'string' or 'array'. If type is 'array', simply display the results array as it is, using console.log(). This should be the default option. If type is 'string', display a string like "Poll results are 13, 2, 4, 1". 
4. Run the 'displayResults' method at the end of each 'registerNewAnswer' method call.

HINT: Use many of the tools you learned about in this and the last section 😉

BONUS: Use the 'displayResults' method to display the 2 arrays in the test data. Use both the 'array' and the 'string' option. Do NOT put the arrays in the poll object! So what shoud the this keyword look like in this situation?

BONUS TEST DATA 1: [5, 2, 3]
BONUS TEST DATA 2: [1, 5, 3, 9, 6, 1]

GOOD LUCK 😀
*/
const poll = {
  question: 'What is your favourite programming language?',
  options: ['0: JavaScript', '1: Python', '2: Rust', '3: C++'],
  // This generates [0, 0, 0, 0]. More in the next section 😃
  answers: new Array(4).fill(0),
  registerNewAnswer() {
    const answer = Number(
      prompt(
        `${this.question}\n${this.options.join('\n')}\n(Write option number)`
      )
    );

    // Register the answer

    if (typeof answer === 'number' && answer < this.answers.length) {
      this.answers[answer]++;
    } else {
      alert(`Get a correct number (0-3)`);
    }
    this.displayResult();
    this.displayResult('string');
  },
  displayResult(type = 'array') {
    if (type === 'array') console.log(this.answers);
    else console.log(`Poll results are ${this.answers.join(', ')}.`);
  },
};

document
  .querySelector('.poll')
  .addEventListener('click', poll.registerNewAnswer.bind(poll));

poll.displayResult.call({ answers: [5, 3, 6, 1] }, 'array');
poll.displayResult.call({ answers: [1, 5, 3, 9, 6, 1] }, 'string');
poll.displayResult.call({ answers: [1, 5, 3, 9, 6, 1] });
