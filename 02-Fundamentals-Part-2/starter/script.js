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

/*  const bills = [125, 555, 44];
 function tip(bills){
     if(bills >= 50 && bills <= 300){
         bills * 0.15
        return;
     }else
     bills * 0.2;
     return;
 }

 const tip1 = tip(125);
console.log(tip1);

const totals = [bills[0] +tips[0], bills[1] +tips[1], bills[2] +tips[2]];

console.log(bills);
console.log(tips);
console.log(totals); 
*/
const calcTip = bill => bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
const bills = [125, 555, 44];

const tips = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])];
const totals = [bills[0] +tips[0], bills[1] +tips[1], bills[2] +tips[2]];

  
  // const calcTip = bill => bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
  
 
  // my coment in github
  
  
  console.log(bills, tips, totals);
  
