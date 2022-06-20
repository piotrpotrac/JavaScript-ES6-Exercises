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
const displayMovements = function (movements, sort = false) {
  containerMovements.innerHTML = '';
  const movs = sort ? movements.slice().sort((a, b) => a - b) : movements;
  movs.forEach(function (mov, i) {
    const type = mov > 0 ? 'deposit ' : 'withdrawal';
    const html = `
  <div class="movements__row">
          <div class="movements__type movements__type--${type}">${
      i + 1
    } ${type}</div>
          <div class="movements__date">3 days ago</div>
          <div class="movements__value">${mov}€</div>
        </div>
  `;

    containerMovements.insertAdjacentHTML('afterbegin', html);
  });
};

const calcDisplayBalance = function (acc) {
  acc.balance = acc.movements.reduce((acc, mov) => acc + mov, 0);

  labelBalance.textContent = `${acc.balance}€`;
};

const calcDisplaySummary = function (acc) {
  const incomes = acc.movements
    .filter(mov => mov > 0)
    .reduce((acc, mov) => acc + mov, 0);
  labelSumIn.textContent = `${incomes}€`;

  const out = acc.movements
    .filter(mov => mov < 0)
    .reduce((acc, mov) => acc + mov, 0);
  // console.log(out);
  labelSumOut.textContent = `${Math.abs(out)}€`;

  const interest = acc.movements
    .filter(mov => mov > 0)
    .map(deposit => (deposit * currentAcounnt.interestRate) / 100)
    .filter((int, i, arr) => {
      // console.log(arr);
      return int >= 1;
    })
    .reduce((acc, int) => acc + int, 0);
  labelSumInterest.textContent = `${interest}€`;
};

const createUsernames = function (accs) {
  accs.forEach(function (acc) {
    acc.username = acc.owner
      .toLowerCase()
      .split(' ')
      .map(letter => letter[0])
      .join('');
  });
};
createUsernames(accounts);

const updateUI = function (acc) {
  //Display movements
  displayMovements(acc.movements);
  //Display baalnce
  calcDisplayBalance(acc);
  //Display summary
  calcDisplaySummary(acc);
};
// Event handler
let currentAcounnt;

btnLogin.addEventListener('click', function (e) {
  e.preventDefault();

  currentAcounnt = accounts.find(
    acc => acc.username === inputLoginUsername.value
  );

  console.log(currentAcounnt);

  if (currentAcounnt?.pin === Number(inputLoginPin.value)) {
    //Display UI and welcome message
    labelWelcome.textContent = `Welcome back, ${
      currentAcounnt.owner.split(' ')[0]
    }`;
    containerApp.style.opacity = '1';

    //clear inputs fields
    inputLoginUsername.value = inputLoginPin.value = '';
    inputLoginPin.blur();
    // Update UI
    updateUI(currentAcounnt);
  }
});
btnTransfer.addEventListener('click', function (e) {
  e.preventDefault();

  const amount = Number(inputTransferAmount.value);
  const reciverAcc = accounts.find(
    acc => acc.username === inputTransferTo.value
  );
  console.log(amount, reciverAcc);
  //Cleaniend a amount fields
  inputTransferAmount.value = '';
  inputTransferTo.value = '';

  if (
    amount > 0 &&
    reciverAcc &&
    amount <= currentAcounnt.balance &&
    reciverAcc?.username !== currentAcounnt.username
  ) {
    console.log('Transfer valid');
    //Doing a transfer
    currentAcounnt.movements.push(-amount);
    reciverAcc.movements.push(amount);
  }
  updateUI(currentAcounnt);
});

btnLoan.addEventListener('click', function (e) {
  e.preventDefault();

  const amount = Number(inputLoanAmount.value);
  if (amount > 0 && currentAcounnt.movements.some(mov => mov >= amount * 0.1)) {
    currentAcounnt.movements.push(amount);
    updateUI(currentAcounnt);
  }
  inputLoanAmount.value = '';
});

btnClose.addEventListener('click', function (e) {
  e.preventDefault();
  // clear fileds
  if (
    inputCloseUsername.value === currentAcounnt.username &&
    Number(inputClosePin.value) === currentAcounnt.pin
  ) {
    const index = accounts.findIndex(
      acc => acc.username === currentAcounnt.username
    );

    console.log(index);
    // Del account
    accounts.splice(index, 1);

    //hide ui
    containerApp.style.opacity = 0;
  }
  inputCloseUsername.value = inputClosePin = '';
});
let sorted = false;
btnSort.addEventListener('click', function (e) {
  e.preventDefault();
  displayMovements(currentAcounnt.movements, !sorted);
  sorted = !sorted;
});

const overallBalance = accounts
  .flatMap(acc => acc.movements)
  .reduce((acc, mov) => acc + mov, 0);
console.log(overallBalance);
/////////////////////////////////////////////////

/////////////////////////////////////////////////
// LECTURES

/////////////////////////////////////////////////
//ARRAY methods
// let arr = ['a', 'b', 'c', 'd', 'e'];

// // SLICE
// console.log(arr.slice(2));
// console.log(arr.slice(2, 4));
// console.log(arr.slice(-2)); //teke 2 last elements
// console.log(arr.slice(-1)); //take last element
// console.log(arr.slice(1, -2));
// console.log(arr.slice()); // copy a array to new place in memory
// console.log([...arr]); // copy a array to new place

// //SPLICE

// arr.splice(-1); // extract a last element and remove them from a origin array
// console.log(arr); //arr without last el
// arr.splice(1, 2);
// console.log(arr);

// //Revers
// arr = ['a', 'b', 'c', 'd', 'e'];
// const arr2 = ['j', 'i', 'h', 'g', 'f'];
// arr2.reverse(); //Reverse a array and mutete the origin arr2
// console.log(arr2);

// // CONCAT
// const letters = arr.concat(arr2); //Add a arr2 to arr and dont mutate the origin arr
// console.log(letters);
// console.log([...arr, ...arr2]); // that is the same and dont mutate too

// // JOIN
// console.log(letters.join(' - ')); //rozpakowuje tablice w string z danym symbolem pomiedzy

// // AT method

// const arr5 = [23, 11, 64];
// console.log(arr5[0]);
// console.log(arr5.at(-1));

// console.log(arr5[arr5.length - 1]);

// console.log('Piotr'.at(-1));

// ///////////////////////////////
// // forEach
// const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

// for (const [i, movement] of movements.entries()) {
//   if (movement > 0) {
//     console.log(`Movement:${i + 1} You deposited ${movement}`);
//   } else {
//     console.log(`Movement:${i + 1}  You withdrew ${Math.abs(movement)}`);
//   }
// }
// console.log(`-----------forEach----------------`);
// movements.forEach(function (movement, i, arr) {
//   if (movement > 0) {
//     console.log(`Movement:${i + 1} You deposited ${movement}`);
//   } else {
//     console.log(`Movement:${i + 1} You withdrew ${Math.abs(movement)}`);
//   }
// });
// /////////////////////////////
// //forEach with Map and Set

// const currencies = new Map([
//   ['USD', 'United States dollar'],
//   ['EUR', 'Euro'],
//   ['GBP', 'Pound sterling'],
// ]);

// //Map
// currencies.forEach(function (value, key, map) {
//   console.log(`${key}: ${value}`);
// });

// //Set
// const currenciesUnique = new Set(['USD', 'GBP', 'USD', 'EUR', 'EUR']);
// console.log(currenciesUnique);
// currenciesUnique.forEach(function (value, val, set) {
//   // value = val is this same paarmetr set doesnt have a index parametr
//   console.log(`${value}`);
// });

/////////////////////////////////////
// map method
const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

const eurToUsd = 1.1;

// // const movementsUsd = movements.map(function (mov) {
// //   return mov * eurToUsd;
// // });
// //arrow func
// const movementsUsd = movements.map(mov => mov * eurToUsd);
// console.log(movements);
// console.log(movementsUsd);
// // 2 option with for of loop
// // const movementsUSDfor = [];
// // for (const mov of movements) {
// //   movementsUSDfor.push(mov * eurToUsd);
// // }
// // console.log(movementsUSDfor);

// const movementsDescriptions = movements.map(
//   (mov, i) =>
//     `Movement ${i + 1}: You ${mov > 0 ? 'deposited' : 'withdrew'} ${
//       mov < 0 ? Math.abs(mov) : mov
//     }`
// );
// console.log(movementsDescriptions.join('\n'));

///////////////////////////
// Filter method
// const deposits = movements.filter(function (mov, i, arr) {
//   return mov > 0;
// });
// console.log(movements);
// console.log(deposits);
// const depfor = [];
// for (const mov of movements) {
//   if (mov > 0) depfor.push(mov);
// }
// console.log(depfor);

// const withdrwawals = movements.filter(mov => mov < 0);
// console.log(withdrwawals);

// //Reduce method
// const balance = movements.reduce(function (acc, cur, i, arr) {
//   console.log(`Iteration ${i}:acc ${acc}, cur ${cur}`);
//   return acc + cur;
// }, 0); //acc is (value) like snowball (added a funct to previous value)  // 0 at the end is a initialization a value of acc
// console.log(balance);
// // MAx value
// const maxval = movements.reduce((acc, mov, i) => {
//   if (mov < acc) {
//     console.log(`Iteration- ${i}  acc:${acc}  mov:${mov}`);
//     return acc;
//   } else {
//     console.log(`Iteration- ${i}  acc:${acc}  mov:${mov}`);
//     return mov;
//   }
// });
// console.log(maxval);
////////////////////////////////////
// Chaining methods
//Pipeline
// const totalDepositsUSD = movements
//   .filter(mov => mov > 0)
//   .map((mov, i, arr) => {
//     // console.log(arr);
//     return mov * eurToUsd;
//   })
//   // .map(mov => mov * eurToUsd)
//   .reduce((acc, mov) => acc + mov, 0);
// console.log(totalDepositsUSD);

// ///////////////////////////////////////
// //Find method
// const firstWthdrawal = movements.find(mov => mov < 0);
// console.log(firstWthdrawal);

// console.log(accounts);

// // const account = accounts.find(acc => acc.owner === 'Jessica Davis');
// let account = {};
// for (const acc of accounts) {
//   if (acc.owner === 'Jessica Davis') {
//     account = acc;
//   }
// }
// console.log(account);

// ///////////////////////////
// // SOME and EVERY
// // equality
// console.log(movements.includes(-130));

// // condition
// // console.log(movements.some(mov => mov === -130));

// const anyDeposit = movements.some(mov => mov > 1000);
// console.log(anyDeposit);

// //every
// console.log(movements.every(mov => mov > 0));
// console.log(account4.movements.every(mov => mov > 0));

// // separate callback function
// const deposit = mov => mov > 0;

// console.log(movements.every(deposit));

// /////////////////////////////////
// // Flat flatMap

// const arr = [[1, 2, 3], [4, 5, 6], 7, 8];
// console.log(arr.flat());
// const arrDeep = [[[1, 2], 3], [4, [5, 6]], 7, 8];
// console.log(arrDeep.flat(2));

//////////////////////////////////////
//Sorting Arrays

// const owners = ['Jonas', 'Zach', 'Adam', 'Marta'];
// console.log(owners.sort());
// console.log(owners);

// //Numbers
// console.log(movements);

// // return <0, A, B (keep order)
// /// return > 0, B, A (switch order)

// // rosnaco
// movements.sort((a, b) => {
//   if (a > b) return 1;
//   if (a < b) return -1;
// });
// console.log(movements);

// //malejaco
// movements.sort((a, b) => {
//   if (a > b) return -1;
//   if (a < b) return 1;
// });

// console.log(movements);

//////////////////-----------------/////////////////
// Filling  a arrays

const x = new Array(7);
console.log(x);
// x.fill(1);
x.fill(1, 3, 5);
console.log(x);

const y = Array.from({ length: 7 }, (_, i) => i + 1);
console.log(y);

///////////////////////////////////////
// Coding Challenge #1

/* 
Julia and Kate are doing a study on dogs. So each of them asked 5 dog owners about their dog's age, and stored the data into an array (one array for each). For now, they are just interested in knowing whether a dog is an adult or a puppy. A dog is an adult if it is at least 3 years old, and it's a puppy if it's less than 3 years old.

Create a function 'checkDogs', which accepts 2 arrays of dog's ages ('dogsJulia' and 'dogsKate'), and does the following things:

1. Julia found out that the owners of the FIRST and the LAST TWO dogs actually have cats, not dogs! So create a shallow copy of Julia's array, and remove the cat ages from that copied array (because it's a bad practice to mutate function parameters)
2. Create an array with both Julia's (corrected) and Kate's data
3. For each remaining dog, log to the console whether it's an adult ("Dog number 1 is an adult, and is 5 years old") or a puppy ("Dog number 2 is still a puppy 🐶")
4. Run the function for both test datasets

HINT: Use tools from all lectures in this section so far 😉

TEST DATA 1: Julia's data [3, 5, 2, 12, 7], Kate's data [4, 1, 15, 8, 3]
TEST DATA 2: Julia's data [9, 16, 6, 8, 3], Kate's data [10, 5, 6, 1, 4]

GOOD LUCK 😀
*/
// const checkDogs = function (dogsJulia, dogsKate) {
//   const correctJuliaDogs = dogsJulia.slice(1, -2);

//   const dogs = correctJuliaDogs.concat(dogsKate);

//   dogs.forEach(function (age, i) {
//     const dog =
//       age >= 3
//         ? `Dog number ${i + 1} is an adult, and is ${age} years old"`
//         : `Dog number ${i + 1} is still a puppy 🐶`;
//     console.log(dog);
//   });
// };

// second way
// correctJuliaDogs.forEach(function (age, i) {
//   const dog =
//     age > 3
//       ? `Dog number ${i + 1} is an adult, and is ${age} years old"`
//       : `Dog number ${i + 1} is still a puppy 🐶`;
//   console.log(dog);
// });
// dogsKate.forEach(function (age, i) {
//   const dog =
//     age > 3
//       ? `Dog number ${i + 1} is an adult, and is ${age} years old"`
//       : `Dog number ${i + 1} is still a puppy 🐶`;
//   console.log(dog);
//   });
// };

// checkDogs([3, 5, 2, 12, 7], [4, 1, 15, 8, 3]);
// checkDogs([9, 16, 6, 8, 3], [10, 5, 6, 1, 4]);

//////////////////////////////////////
// Coding Challenge #2

/* 
Let's go back to Julia and Kate's study about dogs. This time, they want to convert dog ages to human ages and calculate the average age of the dogs in their study.

Create a function 'calcAverageHumanAge', which accepts an arrays of dog's ages ('ages'), and does the following things in order:

1. Calculate the dog age in human years using the following formula: if the dog is <= 2 years old, humanAge = 2 * dogAge. If the dog is > 2 years old, humanAge = 16 + dogAge * 4.
2. Exclude all dogs that are less than 18 human years old (which is the same as keeping dogs that are at least 18 years old)
3. Calculate the average human age of all adult dogs (you should already know from other challenges how we calculate averages 😉)
4. Run the function for both test datasets

TEST DATA 1: [5, 2, 4, 1, 15, 8, 3]
TEST DATA 2: [16, 6, 10, 5, 6, 1, 4]

GOOD LUCK 😀
*/

// const calcAverageHumanAge = function (arr) {
//   const humanAge = arr.map(dog => {
//     if (dog <= 2) {
//       return dog * 2;
//     } else {
//       return 16 + dog * 4;
//     }
//   });
//   return humanAge
//     .filter(dog => dog >= 18)
//     .reduce((acc, cur, i, arr) => acc + cur / arr.length, 0);
// };

// console.log(calcAverageHumanAge([5, 2, 4, 1, 15, 8, 3]));
// console.log(calcAverageHumanAge([16, 6, 10, 5, 6, 1, 4]));

///////////////////////////////////////
// Coding Challenge #3

/* 
Rewrite the 'calcAverageHumanAge' function from the previous challenge, but this time as an arrow function, and using chaining!

TEST DATA 1: [5, 2, 4, 1, 15, 8, 3]
TEST DATA 2: [16, 6, 10, 5, 6, 1, 4]

GOOD LUCK 😀
*/
// const calcAverageHumanAge = function (arr) {
//   const humanAge = arr
//     .map((age, i, arr) => {
//       if (age <= 2) return age * 2;
//       else return age * 4 + 16;
//     })
//     .filter((age, i, arr) => {
//       // console.log(arr);
//       return age >= 18;
//     })
//     .reduce((acc, age, i, arr) => {
//       // console.log(arr);
//       return acc + age / arr.length;
//     }, 0);
//   return humanAge;
// };

// console.log(calcAverageHumanAge([5, 2, 4, 1, 15, 8, 3]));
