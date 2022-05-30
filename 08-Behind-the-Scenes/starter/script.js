'use strict';

//Access to variables and functions
// function calcAge(birthYear) {
//   const age = 2037 - birthYear;

//   function printAge() {
//     let output = `You are${age}, born in in ${birthYear}`;
//     console.log(output);

//     if (1981 >= birthYear <= 1996) {
//       var milenial = true;

//       // creating  a new variable with same name as outer scopes variable
//       const str = `"oh, you are a milenial${firstName}`;
//       console.log(str);

//       function add(a, b) {
//         return a + b;
//       }
//       output = 'NEW OUTPUT!';
//       //console.log(add(2, 3));
//     }
//     // console.log(add(2, 3));
//   }
//   //console.log(str);
//   ///console.log(milenial);
//   printAge();
//   return age;
// }
// //add(2, 3);
// //console.log(add(2, 3));
// const firstName = 'Piotr';
// calcAge(1993);
// //console.log(milenial);
// //console.log(age);

// //Hoistiong
// // 1. Variables
// console.log(me);
// //console.log(job);
// console.log(year);

// var me = 'Piotr';
// let job = 'front dev';
// const year = 1993;

// 2. Functions

//console.log(addDecl(2, 3));
//console.log(addExpr(2, 3));
//console.log(addArrow(2, 3));

// function addDecl(a, b) {
//   return a + b;
// }
// const addExpr = function (a, b) {
//   return a + b;
// };
// var addArrow = (a, b) => a + b;

// // 3. Example
// const numProdusts = 10;
// console.log(numProdusts);
// if (!numProdusts) deleteShoppingCart();

// function deleteShoppingCart() {
//   console.log('All products deleted!');
// }

// This keyword !!!!!!!!!!
//Global
// console.log(this);

// // 1. Reglar function in strict mode  (undefined)
// const calcAge = function (birthYear) {
//   console.log(2037 - birthYear);
//   console.log(this);
// };
// calcAge(1993);

// //2. arrow function

// const calcAgeArrow = birthYear => {
//   console.log(2037 - birthYear);
//   console.log(this);
// };
// calcAgeArrow(1991);

// //3. Metod (in object)

// const piotr = {
//   year: 1993,
//   calcAge: function () {
//     console.log(this);
//   },
// };
// piotr.calcAge();

//example   tipp !! Avoid a arrow function in obects => use a regular function

// const piotr = {
//   firstName: 'Piotr',
//   year: 1993,
//   calcAge: function () {
//     console.log(this);
//     //solution 1
//     // const self = this;  //self or that
//     // const isMilenial = function () {
//     //   //console.log(this.year >= 1981 && this.year <= 1996);
//     //   console.log(self.year >= 1981 && self.year <= 1996);
//     // };
//     //solution 2    use a arrow function into another function with inherit a this keyword form parent function

//     const isMilenial = () => {
//       console.log(this);
//       console.log(this.year >= 1981 && this.year <= 1996);
//     };
//     isMilenial();
//   },
//   greet: () => console.log(`Hey ${this.firstName}`),
// };
// piotr.greet(); // this przybiera wartosc window a cale wyrazenuie window.firstName=undefined
// piotr.calcAge();

///////////////////////////////////////
// Primitive types and objects in memory

// let age = 30;
// let oldAge = age;
// age = 31;
// console.log(age);
// console.log(oldAge);

// const me = {
//   name: 'Piotr',
//   age: 30,
// };

// const friend = me;
// friend.age = 27;

// console.log(friend);
// console.log(me);

// // Objects vs. primitives
// let age = 30;
// let oldAge = age;
// age = 31;
// console.log(age);
// console.log(oldAge);

// const me = {
//   name: 'Jonas',
//   age: 30,
// };
// const friend = me;
// friend.age = 27;
// console.log('Friend:', friend);
// console.log('Me', me);

// ///////////////////////////////////////
// // Primitives vs. Objects in Practice

// // Primitive types
// let lastName = 'Williams';
// let oldLastName = lastName;
// lastName = 'Davis';
// console.log(lastName, oldLastName);

// Reference types
// const jessica = {
//   firstName: 'Jessica',
//   lastName: 'Williams',
//   age: 27,
// };
// const marriedJessica = jessica;
// marriedJessica.lastName = 'Davis';
// // console.log('Before marriage:', jessica);
// // console.log('After marriage: ', marriedJessica);
// // marriedJessica = {};

// Copying objects
const jessica2 = {
  firstName: 'Jessica',
  lastName: 'Williams',
  age: 27,
  family: ['Alice', 'Bob'],
};

const jessicaCopy = Object.assign({}, jessica2);
jessicaCopy.lastName = 'Davis';

jessicaCopy.family.push('Mary');
jessicaCopy.family.push('John');

console.log('Before marriage:', jessica2);
console.log('After marriage: ', jessicaCopy);
