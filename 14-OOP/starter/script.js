'use strict';
///////////////////////////////////
// -------------OOP------------------

//-------------Constructor Functioons--------

// const Person = function (firstName, birthYear) {
//   // instace properties
//   this.firstName = firstName;
//   this.birthYear = birthYear;

//   //NEVER do this!!!!!!

//   //   this.calcAge = function () {
//   //     console.log(2022 - this.birthYear);
//   //   };
// };

// const jonas = new Person('jonas', 1991);

// console.log(jonas.firstName, jonas.birthYear);
// console.log(jonas instanceof Person); // return true/false when a object is instance of constructor

// const matilda = new Person('Matilda', 2001);
// const jack = new Person('Jack', 1950);

// console.log(matilda);

// /// Prototypes
// Person.prototype.calcAge = function () {
//   console.log(2022 - this.birthYear);
// };

// jonas.calcAge();
// matilda.calcAge();

// console.log(jonas.__proto__);
// console.log(jonas.__proto__ === Person.prototype);

// console.log(Person.prototype.isPrototypeOf(jonas));
// console.log(Person.prototype.isPrototypeOf(matilda));

// Person.prototype.species = 'Homo Sapiens';
// console.log(jonas, matilda);

// console.log(jonas.hasOwnProperty('firstName'));

// console.log(jonas.__proto__);

// //Object.prototype (top of proto chain)
// console.log(jonas.__proto__.__proto__);

// console.dir(Person.prototype.constructor);

// const arr = [3, 5, 6, 8, 7, 8, 9];

// console.log(arr.__proto__);

// const h1 = document.querySelector('h1');

// console.dir(x => x + 1);

///////////////////////////////////////
// Coding Challenge #1

/* 
1. Use a constructor function to implement a Car. A car has a make and a speed property. The speed property is the current speed of the car in km/h;
2. Implement an 'accelerate' method that will increase the car's speed by 10, and log the new speed to the console;
3. Implement a 'brake' method that will decrease the car's speed by 5, and log the new speed to the console;
4. Create 2 car objects and experiment with calling 'accelerate' and 'brake' multiple times on each of them.

DATA CAR 1: 'BMW' going at 120 km/h
DATA CAR 2: 'Mercedes' going at 95 km/h

GOOD LUCK 😀
*/

const Car = function (make, speed) {
  this.make = make;
  this.speed = speed;
};

Car.prototype.accelerate = function () {
  this.speed += 10;
  console.log(`${this.make} going at ${this.speed}`);
};

Car.prototype.brake = function () {
  this.speed -= 5;
  console.log(`${this.make} going at ${this.speed}`);
};

const bmw = new Car('BMW', 120);

console.log(bmw);
bmw.accelerate();
bmw.accelerate();
bmw.accelerate();
bmw.brake();
bmw.brake();
bmw.brake();
bmw.accelerate();
bmw.accelerate();
bmw.accelerate();
bmw.accelerate();
const mb = new Car('Mercedes', 95);

console.log(mb);

mb.accelerate();
mb.accelerate();
mb.accelerate();
mb.accelerate();
mb.brake();
mb.brake();
mb.brake();
mb.brake();
