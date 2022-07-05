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

// // console.log(jonas.firstName, jonas.birthYear);
// // console.log(jonas instanceof Person); // return true/false when a object is instance of constructor

// // const matilda = new Person('Matilda', 2001);
// // const jack = new Person('Jack', 1950);

// // console.log(matilda);
// Person.prototype.hey = function () {
//   console.log('Hey there');
// };

// jonas.hey();

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

// const Car = function (make, speed) {
//   this.make = make;
//   this.speed = speed;
// };

// Car.prototype.accelerate = function () {
//   this.speed += 10;
//   console.log(`${this.make} going at ${this.speed}`);
// };

// Car.prototype.brake = function () {
//   this.speed -= 5;
//   console.log(`${this.make} going at ${this.speed}`);
// };

// const bmw = new Car('BMW', 120);

// console.log(bmw);
// bmw.accelerate();
// bmw.accelerate();
// bmw.accelerate();
// bmw.brake();
// bmw.brake();
// bmw.brake();
// bmw.accelerate();
// bmw.accelerate();
// bmw.accelerate();
// bmw.accelerate();
// const mb = new Car('Mercedes', 95);

// console.log(mb);

// mb.accelerate();
// mb.accelerate();
// mb.accelerate();
// mb.accelerate();
// mb.brake();
// mb.brake();
// mb.brake();
// mb.brake();

///////////////////////////////////////
// Coding Challenge #2

/* 
1. Re-create challenge 1, but this time using an ES6 class;
2. Add a getter called 'speedUS' which returns the current speed in mi/h (divide by 1.6);
3. Add a setter called 'speedUS' which sets the current speed in mi/h (but converts it to km/h before storing the value, by multiplying the input by 1.6);
4. Create a new car and experiment with the accelerate and brake methods, and with the getter and setter.

DATA CAR 1: 'Ford' going at 120 km/h

GOOD LUCK 😀
// */
// class Car {
//   constructor(make, speed) {
//     this.make = make;
//     this.speed = speed;
//   }

//   accelerate = function () {
//     this.speed += 10;
//     console.log(`${this.make} going at ${this.speed}`);
//   };

//   brake = function () {
//     this.speed -= 5;
//     console.log(`${this.make} going at ${this.speed}`);
//   };
//   get speedUS() {
//     return `${this.speed / 1.6} mi/h`;
//   }

//   set speedUS(speed) {
//     this.speed = speed * 1.6;
//   }
// }

// const ford = new Car('Ford', 120);
// console.log(ford.speedUS);
// ford.accelerate();
// ford.accelerate();
// ford.brake();
// ford.speedUS = 50;
// console.log(ford);

///////////////////////////////////////
// Coding Challenge #3

/* 
1. Use a constructor function to implement an Electric Car (called EV) as a CHILD "class" of Car. Besides a make and current speed, the EV also has the current battery charge in % ('charge' property);
2. Implement a 'chargeBattery' method which takes an argument 'chargeTo' and sets the battery charge to 'chargeTo';
3. Implement an 'accelerate' method that will increase the car's speed by 20, and decrease the charge by 1%. Then log a message like this: 'Tesla going at 140 km/h, with a charge of 22%';
4. Create an electric car object and experiment with calling 'accelerate', 'brake' and 'chargeBattery' (charge to 90%). Notice what happens when you 'accelerate'! HINT: Review the definiton of polymorphism 😉

DATA CAR 1: 'Tesla' going at 120 km/h, with a charge of 23%

GOOD LUCK 😀
*/

/*
const Car = function (make, speed) {
  this.make = make;
  this.speed = speed;
};

Car.prototype.accelerate = function () {
  this.speed += 10;
  console.log(`${this.make} is going at ${this.speed} km/h`);
};

Car.prototype.brake = function () {
  this.speed -= 5;
  console.log(`${this.make} is going at ${this.speed} km/h`);
};

const EV = function (make, speed, charge) {
  Car.call(this, make, speed);
  this.charge = charge;
};

// Link the prototypes
EV.prototype = Object.create(Car.prototype);

EV.prototype.chargeBattery = function (chargeTo) {
  this.charge = chargeTo;
};

EV.prototype.accelerate = function () {
  this.speed += 20;
  this.charge--;
  console.log(
    `${this.make} is going at ${this.speed} km/h, with a charge of ${this.charge}`
  );
};

const tesla = new EV('Tesla', 120, 23);
tesla.chargeBattery(90);
console.log(tesla);
tesla.brake();
tesla.accelerate();
*/

///////////////////////////////////////
// Coding Challenge #4

/* 
1. Re-create challenge #3, but this time using ES6 classes: create an 'EVCl' child class of the 'CarCl' class
2. Make the 'charge' property private;
3. Implement the ability to chain the 'accelerate' and 'chargeBattery' methods of this class, and also update the 'brake' method in the 'CarCl' class. They experiment with chining!

DATA CAR 1: 'Rivian' going at 120 km/h, with a charge of 23%

GOOD LUCK 😀
*/
class CarCl {
  constructor(make, speed) {
    this.make = make;
    this.speed = speed;
  }

  accelerate() {
    this.speed += 10;
    console.log(`${this.make} is going at ${this.speed} km/h`);
    return this;
  }

  brake() {
    this.speed -= 5;
    console.log(`${this.make} is going at ${this.speed} km/h`);
    return this;
  }
}

class EVCl extends CarCl {
  #charge;
  constructor(make, speed, charge) {
    super(make, speed);
    this.#charge = charge;
  }

  chargeBattery(chargeTo) {
    this.#charge = chargeTo;
    return this;
  }

  accelerate() {
    this.speed += 20;
    this.#charge--;
    console.log(
      `${this.make} is going at ${this.speed} km/h, with a charge of ${
        this.#charge
      }`
    );
    return this;
  }
}

const rivian = new EVCl('Rivian', 120, 23);
console.log(rivian);
// console.log(rivian.#charge);
rivian
  .accelerate()
  .accelerate()
  .accelerate()
  .brake()
  .chargeBattery(50)
  .accelerate();

console.log(rivian.speedUS);
/* 
  const tesla = new EV('Tesla', 120, 23);
  tesla.chargeBattery(90);
  console.log(tesla);
  tesla.brake();
  tesla.accelerate(); */

//////////////////////
//ES6 classes
// class declartion
/* class PersonCl {
  constructor(fullName, birthYear) {
    this.fullName = fullName;
    this.birthYear = birthYear;
  }

  //instance methhods
  //Metoda została dodana do prototyp property
  calcAge() {
    //funkcja poza konstruktorem to prototyp
    console.log(2037 - this.birthYear);
  }

  // getter
  get age() {
    return 2037 - this.birthYear;
  }

  // set a property that alredy exist
  set fullName(name) {
    console.log(name);
    if (name.includes(' ')) this._fullName = name;
    else alert(`%{name} in not a full name!`);
  }
  get fullName() {
    return this._fullName;
  }

  //Static method  nie są dostepne w instancjach (stworzonych obiektach)
  static hey() {
    console.log('Hey');
  }
} */

// const jesica = new PersonCl('Jessica Davis', 2015);
// console.log(jesica);
// jesica.calcAge();

// console.log(jesica.__proto__ === PersonCl.prototype);

// PersonCl.prototype.greet = function () {
//   console.log(`HEY ${this.fullName}`);
// };

// jesica.greet();
// console.log(jesica.age);

//////////////////////////
// Object.create

// const PersonProto = {
//   ///////// Object prototyp
//   calcAge() {
//     console.log(2037 - this.birthYear);
//   },

//   init(firstName, birthYear) {
//     this.firstName = firstName;
//     //     this.birthYear = birthYear;
//   },
// };

// // obj.create

// const steven = Object.create(PersonProto); // w nawiasie umieszczamy prototyp objectu
// steven.name = 'Steven';
// steven.birthYear = 2001;
// console.log(steven);
// steven.calcAge();

// const sarah = Object.create(PersonProto);
// sarah.init('Sarah', 1995);
// console.log(sarah);

///////////////////////////
// inheritance constructor function
/* 
const Person = function (firstName, birthYear) {
  // instace properties
  this.firstName = firstName;
  this.birthYear = birthYear;
};
Person.prototype.calcAge = function () {
  console.log(2037 - this.birthYear);
};

const Student = function (firstName, birthYear, course) {
  // instace properties
  Person.call(this, firstName, birthYear);
  this.course = course;
};
Student.prototype = Object.create(Person.prototype);
Student.prototype.introduce = function () {
  console.log(`My name is ${this.firstName} and i study ${this.course}`);
};

const mike = new Student('Mike', 2020, 'Computer Since');
mike.introduce();
mike.calcAge();
console.log(mike.__proto__.__proto__.__proto__.__proto__);
console.log(mike instanceof Student); */
//////////////////////
// Inheritance between "Classes"
/* class StudentCl extends PersonCl {
  // extends - przyjmuje prototyp PersonCL
  constructor(fullName, birthYear, course) {
    //Always needs to happen first
    super(fullName, birthYear); // nadanie parametrom tych samych wartosci co w obj PersonCl
    this.course = course;
  }
  calcAge() {
    console.log(
      `I'm ${2037 - this.birthYear}, but i feel more like ${
        2037 - this.birthYear + 10
      }`
    );
  }
}

const marta = new StudentCl('Martha Jonas', 2012, 'Computer Since');

console.log(marta);
marta.calcAge();
 */

/////////////////////////////////////////////
// Inheritance between "Classes": Object.create()

// const PersonProto = {
//   ///////// Object prototyp
//   calcAge() {
//     console.log(2037 - this.birthYear);
//   },

//   init(firstName, birthYear) {
//     this.firstName = firstName;
//     this.birthYear = birthYear;
//   },
// };
// const steven = Object.create(PersonProto);
// console.log(steven);

// const StudentProto = Object.create(PersonProto);
// StudentProto.init = function (firstName, birthYear, course) {
//   PersonProto.init.call(this, firstName, birthYear);
//   this.course = course;
// };

// StudentProto.introduce = function () {
//   console.log(`My name is ${this.firstName} and i study ${this.course}`);
// };

// const jay = Object.create(StudentProto);
// jay.init('jay', 2010, 'computer since');
// console.log(jay);
// jay.introduce();
// jay.calcAge();

// Class another example

// 1 Public fields
// 2 Private fields
// 3 Public methods
// 4 Private methods
// static version for all of them (work only on the Class)
/* 
class Account {
  // 1 Public fields  (instances)
  locale = navigator.language;

  // 2 Private fields (instances)
  #movements = [];
  #pin;

  constructor(owner, currency, pin) {
    this.owner = owner;
    this.currency = currency;
    //protected property _prop
    this.#pin = pin;
    // this._movements = [];
    // this.locale = navigator.language;
    console.log(`Thanks for opening an account, ${owner.toUpperCase()}`);
  }
  // 3 Public methods (prototype)
  // Public interface
  getMovements() {
    return this.#movements;
  }
  deposit(value) {
    this.#movements.push(value);
    return this;
  }

  withdraw(value) {
    this.deposit(-value);
    return this;
  }

  requestLoan(val) {
    // if (this.#approveLoan(val)) {
    if (this._approveLoan(val)) {
      this.deposit(val);
      console.log(`Loan approved`);
      return this;
    }
  }

  // 4 Private methods
  //   #approveLoan(val) {
  _approveLoan(val) {
    return true;
  }

  //static version
  static helper() {
    console.log('Helper');
  }
}

const acc1 = new Account('Jonas', 'EUR', 1111);

/* acc1._movements.push(600); // _ znaczy ze ta metoda jest prywatna i nie powinna byc uzywana poza klasą */
/*
acc1.deposit(300);
acc1.withdraw(140);
acc1.requestLoan(1000);
/* acc1._approveLoan(1000); */
/*
console.log(acc1.getMovements());
console.log(acc1);

Account.helper();

// console.log(acc1.#pin);
// console.log(acc1.#movements);s
// console.log(acc1.#approveLoan(100));

// chaining methods in classes
acc1.deposit(300).deposit(500).withdraw(35).requestLoan(25000).withdraw(2000);

console.log(acc1);
 */
