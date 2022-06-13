'use strict';

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// BANKIST APP

// Data
const account1 = {
  owner: 'Jonas Schmedtmann',
  movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
  interestRate: 1.2, // %
  pin: 1111,
};

const account2 = {
  owner: 'Jessica Davis',
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,
};

const account3 = {
  owner: 'Steven Thomas Williams',
  movements: [200, -200, 340, -300, -20, 50, 400, -460],
  interestRate: 0.7,
  pin: 3333,
};

const account4 = {
  owner: 'Sarah Smith',
  movements: [430, 1000, 700, 50, 90],
  interestRate: 1,
  pin: 4444,
};

const accounts = [account1, account2, account3, account4];

// Elements
const labelWelcome = document.querySelector('.welcome');
const labelDate = document.querySelector('.date');
const labelBalance = document.querySelector('.balance__value');
const labelSumIn = document.querySelector('.summary__value--in');
const labelSumOut = document.querySelector('.summary__value--out');
const labelSumInterest = document.querySelector('.summary__value--interest');
const labelTimer = document.querySelector('.timer');

const containerApp = document.querySelector('.app');
const containerMovements = document.querySelector('.movements');

const btnLogin = document.querySelector('.login__btn');
const btnTransfer = document.querySelector('.form__btn--transfer');
const btnLoan = document.querySelector('.form__btn--loan');
const btnClose = document.querySelector('.form__btn--close');
const btnSort = document.querySelector('.btn--sort');

const inputLoginUsername = document.querySelector('.login__input--user');
const inputLoginPin = document.querySelector('.login__input--pin');
const inputTransferTo = document.querySelector('.form__input--to');
const inputTransferAmount = document.querySelector('.form__input--amount');
const inputLoanAmount = document.querySelector('.form__input--loan-amount');
const inputCloseUsername = document.querySelector('.form__input--user');
const inputClosePin = document.querySelector('.form__input--pin');

//Functions
const displayMovements = function (movements) {
  containerMovements.innerHTML = '';

  movements.forEach(function (mov, i) {
    const type = mov > 0 ? 'deposit ' : 'withdrawal';
    const html = `
  <div class="movements__row">
          <div class="movements__type movements__type--${type}">${
      i + 1
    } ${type}</div>
          <div class="movements__date">3 days ago</div>
          <div class="movements__value">${mov}</div>
        </div>
  `;

    containerMovements.insertAdjacentHTML('afterbegin', html);
  });
};
displayMovements(account1.movements);

/////////////////////////////////////////////////

/////////////////////////////////////////////////
// LECTURES

/////////////////////////////////////////////////
//ARRAY methods
let arr = ['a', 'b', 'c', 'd', 'e'];

// SLICE
console.log(arr.slice(2));
console.log(arr.slice(2, 4));
console.log(arr.slice(-2)); //teke 2 last elements
console.log(arr.slice(-1)); //take last element
console.log(arr.slice(1, -2));
console.log(arr.slice()); // copy a array to new place in memory
console.log([...arr]); // copy a array to new place

//SPLICE

arr.splice(-1); // extract a last element and remove them from a origin array
console.log(arr); //arr without last el
arr.splice(1, 2);
console.log(arr);

//Revers
arr = ['a', 'b', 'c', 'd', 'e'];
const arr2 = ['j', 'i', 'h', 'g', 'f'];
arr2.reverse(); //Reverse a array and mutete the origin arr2
console.log(arr2);

// CONCAT
const letters = arr.concat(arr2); //Add a arr2 to arr and dont mutate the origin arr
console.log(letters);
console.log([...arr, ...arr2]); // that is the same and dont mutate too

// JOIN
console.log(letters.join(' - ')); //rozpakowuje tablice w string z danym symbolem pomiedzy

// AT method

const arr5 = [23, 11, 64];
console.log(arr5[0]);
console.log(arr5.at(-1));

console.log(arr5[arr5.length - 1]);

console.log('Piotr'.at(-1));

///////////////////////////////
// forEach
const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

for (const [i, movement] of movements.entries()) {
  if (movement > 0) {
    console.log(`Movement:${i + 1} You deposited ${movement}`);
  } else {
    console.log(`Movement:${i + 1}  You withdrew ${Math.abs(movement)}`);
  }
}
console.log(`-----------forEach----------------`);
movements.forEach(function (movement, i, arr) {
  if (movement > 0) {
    console.log(`Movement:${i + 1} You deposited ${movement}`);
  } else {
    console.log(`Movement:${i + 1} You withdrew ${Math.abs(movement)}`);
  }
});
/////////////////////////////
//forEach with Map and Set

const currencies = new Map([
  ['USD', 'United States dollar'],
  ['EUR', 'Euro'],
  ['GBP', 'Pound sterling'],
]);

//Map
currencies.forEach(function (value, key, map) {
  console.log(`${key}: ${value}`);
});

//Set
const currenciesUnique = new Set(['USD', 'GBP', 'USD', 'EUR', 'EUR']);
console.log(currenciesUnique);
currenciesUnique.forEach(function (value, val, set) {
  // value = val is this same paarmetr set doesnt have a index parametr
  console.log(`${value}`);
});

////////////////////////////
//Bankist aplication
