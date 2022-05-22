/*///////////////////////////////////////
// deklaracja stringów i multiple line string
const firstName = "Piotr";
const job = "student";
const birthYear = 1993;
const year = 2022;

const piotr = "I'm " + firstName + ", a " + (year - birthYear) + " years old " + job + "!";
console.log(piotr);

const piotr1 = `I'm ${firstName},a ${year - birthYear} old ${job}!`;


console.log(`multiple 
line
string`);
console.log(piotr1);
 */
//////////////////////////////////////
//Exercise 2

// const massMark = 95;
// const heightMark = 1.88;
// const massJohn = 85;
// const heightJohn = 1.76;

// const BMIMark = massMark / heightMark ** 2;
// const BMIJohn = massJohn / (heightJohn * heightJohn);
// const markHigherBMI = BMIMark > BMIJohn;

// console.log(BMIMark, BMIJohn, markHigherBMI);

// if(markHigherBMI)
// console.log(`Mark's BMI (${Math.floor(BMIMark)}) is higher than John's (${Math.floor(BMIJohn)})!`);
// else
// console.log(`John's BMI (${BMIJohn.toFixed(2)}) is higher than Mark's (${Math.floor(BMIMark)})!`);

/*
////////////////////////////////////////////
//If , else

// Exercise 2


let year = 2022;
let driver = function driveLicense(age)
{
    if (year - age > 18)
    {
        console.log(`You are ${year - age} years old and you can do a driving license!`);

    }
    else
    console.log(`Sorry you are to young, wait (${18-(year -age)}) year/s`);
};

driver(2008); 

const birthYear = 1992;

if(birthYear<=2000)
console.log(`You are born i XX century`);
else
console.log(`You are born in XXI century`); */

/* const inputYear = "1991";

console.log(Number(inputYear));
console.log(parseInt(inputYear) + 18);
console.log(typeof parseInt(inputYear))

let money;

if(money)
console.log("you are rich");
else
console.log("you are poor"); */

///////////////////////////////
// IF else statement

/* const scoreD1 = 97;
const scoreD2 = 112;
const scoreD3 = 101;

const scoreK1 = 109;
const scoreK2 = 95;
const scoreK3 = 106;

const averageD = (scoreD1 + scoreD2 + scoreD3) / 3;

const averageK = (scoreK1 + scoreK2 + scoreK3) / 3;

if(averageD > averageK && averageD >= 100)
console.log(`Dolphins wins with ${averageD} score`);
else if(averageK > averageD && averageK >= 100)
console.log(`Koalas wins with ${averageK} score`);
else if(averageD ===averageK && averageD >= 100)
console.log(`Draw`);
 */
///////////////////////////

// Switch statement

/* 
const day = "sunwday";

switch(day){
    case "monday":
        console.log(`It's monday!`);
        break;
    case "friday":
        console.log(`Friday`);
        break;
    case "sunday":
    case "saturday":
        console.log("weekend");
        break;
    default:
        console.log("it's not a day");

} */

//////////////////////////////////////////
// Conditional operator
/* 
const age = 25;
age >= 18 ? console.log(`you are adult`) : console.log(`You are to young`);
//or
const drink = age >= 18 ? console.log(`you are adult`) : console.log(`You are to young`); */

//////////////////////////////
//Exercise  4

const bill = 430;
const tip = bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
console.log(
  `The bill was ${bill}, the tip was ${tip}, the total bill was ${bill + tip}`
);
