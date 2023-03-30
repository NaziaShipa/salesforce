
/*// let, const and var
let age = 30;
age = 31;

const birthYear = 1991;
// birthYear = 1990;
// const job;

var job = 'programmer';
job = 'teacher'

lastName = 'Schmedtmann';
console.log(lastName);

////////////////////////////////////
// Data Types
let javascriptIsFun = true;
console.log(javascriptIsFun);

// console.log(typeof true);
console.log(typeof javascriptIsFun);
console.log(typeof 23);
// console.log(typeof 'Jonas');

javascriptIsFun = 'YES!';
console.log(typeof javascriptIsFun);

let year;
console.log(year);
console.log(typeof year);

year = 1991;
console.log(typeof year);

console.log(typeof null);

////////////////////////////////////

// Basic Operators
const now = 2037;
const ageJonas = now - 1991;
const ageSarah = now - 2018;
console.log(ageJonas, ageSarah);

// Assignment operators
let x = 10 + 5; // 15
x += 10; // x = x + 10 = 25
console.log(x);
x *= 4; // x = x * 4 = 100
console.log(x);
x++; // x = x + 1
console.log(x);
x-=5;
console.log(x);
x--;
console.log(x);

// Comparison operators
console.log(ageJonas > ageSarah); // >, <, >=, <=
console.log(ageSarah >= 18);

const isFullAge = ageSarah >= 18;

console.log(now - 1991 > now - 2018);
*/
////////////////////////////////////



/*
//...........Assignment...............
let x = 10 + 5; // 15
x += 10; // x = x + 10 = 25
x *= 4; // x = x * 4 = 100
x++; // x = x + 1
x--;
x--;
console.log(x);
// Comparison operators
console.log(ageJonas > ageSarah); // >, <, >=, <=
console.log(ageSarah >= 18);

const isFullAge = ageSarah >= 18;

console.log(now - 1991 > now - 2018);

// The Conditional (Ternary) Operator
const age = 23;
// age >= 18 ? console.log('I like to drink wine ') : console.log('I like to drink water ');

const drink = age >= 18 ? 'wine ' : 'water';
console.log(drink);

let drink2;
if (age >= 18) {
  drink2 = 'wine ';
} else {
  drink2 = 'water ';
}
console.log(drink2);

console.log(`I like to drink ${age >= 18 ? 'wine ' : 'water '}`);

*/

///////////////////////////////////////////////


  //----type conversion---------
const inputYear = '1999'
let year = 2023
console.log(year - Number(inputYear))
console.log(Number(inputYear)+ 18)

//---------logical operation-------
let age = 73

if(age<6 || age>70){
    console.log("Free")
}
else if(age>6 && age<17){
    console.log("Child discount")
}
else if(age>17 && age<26){
    console.log("student discount")
}
else if(age>26 && !age<66){
    console.log("full price")
}

//------switch--------

const x = 10
const y = 20
let operator = '+'
let result
switch(operator){
    case '+':
        console.log('Adddition operation')
        result = x+y
        console.log(result)
        break

    case '-':
        console.log('Subtraction operation')
        result = x-y
        console.log(result)
        break

    case '*':
        console.log('Multiplication operation')
        result = x*y
        console.log(result)
        break
    case '/':
        console.log('Division operation')
        result = x/y
        console.log(result)
        break

    default:
        console.log('Invalid operation')
}



