"use strict";



/* ////////////////////////////////////////
//Function syntax

function logger() {
    //fuction body
    console.log("my name is Piotr");


}

// calling / running / invoking function
logger();
logger();
logger();

function fruitProcess (apples, oranges){
    console.log(apples, oranges);

    const juice = `Juice with ${apples} apples, and ${oranges} oranges.`;
    
    return juice;
}

const appleJuice = fruitProcess(5,0);
console.log(appleJuice);

const orangeJuice = fruitProcess(0,7);
console.log(orangeJuice); */


/////////////////////////////////////////////////
// Functions Declaretions vs. Expressions
/* 
// Function Declaration
function calcAge1(birthYear){
    return 2022 - birthYear;
}
const age1 = calcAge1(1993);

// Function Expression
const calcAge2 = function(birthYear){
    return 2022 - birthYear;
}
 const age2 = calcAge2(1992);

 console.log(age1, age2); */

 //////////////////////////////////
 // Arrow Functions      we dont need Return the function !!
/* 
const calcAge3 = birthYear => 2022 - birthYear;
const age3 = calcAge3(1993);
console.log(age3);

//Example 2 with long body function !!! return is necessary!!!
const calcRetire = (birthYear, firstName) => {
    const age4 = 2022 - birthYear;
    const retired = 65 - age4;
    return `${firstName} would be ritered in ${retired} years.`
}

console.log(calcRetire(1993, "Piotr"));
 */

///////////////////////////////////////////////////
//Function calling other function
/* 
function cutFruitPieces (fruit){
    return fruit * 4;
}


function fruitProcess (apples, oranges){
    const applePieces = cutFruitPieces(apples);
    const orangePieces = cutFruitPieces(oranges);


    const juice = `Juice with ${applePieces} pieces of apple, and ${orangePieces} pieces of orange.`;
    
    return juice;
}

console.log(fruitProcess(2, 3)); */

////////////////////////////////////////////////
// Coding challenge 1  !!!
/* 
const calcAverage = (score1, score2, score3) => (score1 + score2 + score3)/3;

const avgDolphins = calcAverage(85, 54, 41);
const avgKoalas = calcAverage(23, 34, 27);

const checkWinnner = function(avgDolphins, avgKoalas){
    if(avgDolphins >= 2 * avgKoalas){
        console.log(`Dolphins win ${avgDolphins}:${avgKoalas}`);
    } else if(avgKoalas >= 2 * avgDolphins){
        console.log(`Koalas win ${avgKoalas}:${avgDolphins}`);
    }
    else{
        console.group(`No team wins.`);
    }
}

checkWinnner(avgDolphins, avgKoalas); */

///////////////////////////////////////////////////////
////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////


// ----------------ARRAYS----------------
/* 
 const friends = ["Mike", "Peter", 'Derek'];

 console.log(friends);
 console.log(friends[0]);
 console.log(friends.length);


 const year = new Array(1989, 1992, 2021, 2022);
 console.log(year[year.length - 1]);

 year[2] = 1858;

 console.log(year);

const firstName = "Piotr";
 const piotr = [firstName, 'Potrac', 2022 - 1993, friends];

 console.log(piotr);
 */
 //////////////////////////////////////////////////////
 //Exercise

 /* const calcAge = function (birthYear) {
     return 2037 - birthYear;
 }
const years = [1990, 1967, 2002, 2010, 2018];

const age1 = calcAge(years[0]);
const age2 = calcAge(years[1]);
const age3 = calcAge(years[years.length - 1]);

const years2 = [calcAge(years[0]), calcAge(years[1]), calcAge(years[years.length - 1])];
console.log(years2); */

//////////////////////////////////////////////
// Operation on Arrays

//Add elements
/* 
const friends = ["Mike", "Peter", 'Derek'];
const newLength = friends.push("John");      // last element and return index of new array
console.log(friends);
console.log(newLength);

friends.unshift("Jay");                     // first alement
console.log(friends);

// Remove elements
friends.pop();            // lest element
const popped = friends.pop();   // remove last element and return a value of that el
console.log(popped);
console.log(friends);



friends.shift();   //rmv first el
console.log(friends);

// metods to find a index of element with example value

console.log(friends.indexOf("Peter"));

// zamiast indexOf  mozna uzyc includes ( zwraca true i false)
 console.log(friends.includes("Peter"));
 console.log(friends.includes("Jay")); */

 //////////////////////////////////////////////
 // Coding Challenge 2 !!!
/* 
const calcTip = bill => bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
const bills = [125, 555, 44];

const tips = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])];
const totals = [bills[0] +tips[0], bills[1] +tips[1], bills[2] +tips[2]];
  
  console.log(bills, tips, totals);
  
 */

//////////////////////////////////////////
// Objects
/* 
const piotr = {
    firstName: 'Piotr',
    lastName: 'Potrac',
    birthYear: 1993,
    job: 'Front dev',
    friends: ['Micheal', 'Stev', "Karl"],
    hasDriverLicens: false,
/* 
    calcAge: function(birthYear) {                 // Methods
        return 2022 - birthYear;
    } */
/* 
    calcAge: function() {                 // Methods
       // console.log(this);   
       this.age = 2022 - this.birthYear;
        return this.age;
    },

    getSummary: function(){
    const sum = `${this.firstName} is a ${this.calcAge()}-years old ${this.job}, and he has ${this.hasDriverLicens ? "a dirver license": "no a drivers licence"}`;
        return sum;
    }
};

const nameKey = 'Name';
console.log(piotr.firstName);
console.log(piotr['firstName']);
console.log(piotr["first" + nameKey]);

piotr.location = "Poland";

console.log(piotr); */
// console.log(`${piotr.firstName} has ${piotr.friends.length} friends, and the best one called ${piotr.friends[1]}`);

///////////////////////////////////////
// Objects methods
/* 
console.log(piotr.calcAge(1993));
console.log(piotr.calcAge());
console.log(piotr.calcAge(piotr.birthYear));
console.log(piotr['calcAge'](1993));
console.log(piotr.getSummary());

 */

/////////////////////////////
// Coding challenege 3
/* 
const mark = {
    name: 'Mark Miller',
    mass: 78,
    heigth: 1.69,

    calcBMI: function(){
        this.BMI = this.mass / this.heigth **2;
        return this.BMI;
    }
    
};


const john = {
    name: 'John Smith',
    mass: 92,
    heigth: 1.95,

    calcBMI: function(){
        this.BMI = this.mass / this.heigth **2;
        return this.BMI;
    }
    
};
console.log(mark.calcBMI());
console.log(mark);

console.log(john.calcBMI());
console.log(john);


if(mark.calcBMI() > john.calcBMI()){
    console.log(`${mark.name} BMI (${mark.BMI}) is higher than ${john.name} BMI (${john.BMI})`);
}else if(john.calcBMI() > mark.calcBMI()){
    console.log(`${john.name} BMI (${john.BMI}) is higher than ${mark.name} BMI (${mark.BMI})`);
} */

//////////////////////////////////
//  -------------Loops------------------
//    for loop
/* 
for(let i = 1; i <=10; i++){
    console.log(`Lifting weights repetition ${i}`);
}

 */

// exercise
/* 
const piotr = ['Piotr', 'Potrac', 2022 - 1993, "front dev", ["mike", "karl", "brad"], true];
const types = [];

for(let i = 0; i < piotr.length; i++){
    types.push(typeof piotr[i]);
    //types[i] = typeof(piotr[i]);
 }

console.log(types);


const years  = [1991, 2007, 1969, 2020];
const ages =  [];

for(let  i = 0; i < years.length; i++){
ages.push(2037 - years[i]);
}
 console.log(ages);

 // continue 
 for (let i = 0; i < piotr.length; i++){
     if(typeof piotr[i] !== "string"){ 
         continue;                     // it finish a current iteration of loop and go to next one
    }
console.log(piotr[i], typeof piotr[i]);
 }

 //  break and backward 
 for (let i = piotr.length - 1; i >= 0; i--){
    if(typeof piotr[i] === "number"){ 
    break;                     // it finish a loop  !!!!!!!!!!!!!!!!!!!!
   }
console.log(piotr[i], typeof piotr[i]);
}

 */
//////////////////////////////////////////
// loop in loop
/* 
for(let exercise = 1; exercise < 4; exercise++){
    console.log(`----------- Starting exercise${exercise}`);

    for (let rep = 1; rep < 6; rep++){
        console.log(`lifting weigth repetition ${rep}`);
    }

}

 */

//////////////////////////////////
//  While loop
/* 
for (let rep = 1; rep <= 10; rep++){
    console.log(`Lifting weigth repetition ${rep}`);
}

console.log(`-----------While loop ----------------`);
let rep = 1;
while (rep <= 10) {
    console.log(`Lifting weigth repetition ${rep}`);
    rep++;

}
 */
// example 2
/* 
let dice = Math.trunc(Math.random() * 6) + 1;

while(dice !== 6 ){
console.log(`You rolled ${dice}`);
dice = Math.trunc(Math.random() * 6) + 1;
} */

////////////////////////////////
// Coding chalenege 4 

const calcAverage = function(arr){
    let avg = 0;
    for(let i = 0; i < arr.length; i++){
        avg +=  arr[i] / arr.length;
    }
    return avg;
}
const bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];
const tips = [];
const totals = [];

const calcTip = bill => bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;

for (let i = 0; i < bills.length; i++){
    tips[i] = calcTip(bills[i]);
    totals.push(bills[i] + tips[i]);
}

console.log(bills, tips, totals);
console.log(calcAverage(bills));
console.log(calcAverage(totals));