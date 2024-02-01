let score = undefined

console.log(typeof score);
console.log(typeof (score));

let valueInNumber = Number(score);
console.log(typeof  valueInNumber);
console.log(valueInNumber);

// "33" => 33
// "33abc" => NaN
//  true  => 1; false => 0

let isLoggedIn = "Shahbaz";

let booleanIsLoggedIn = Boolean(isLoggedIn);
console.log(booleanIsLoggedIn);

// 1 => true; 0 => false;
// "" => false;
// "shahbaz" => true

let someNumber = 33

let stringNumber = String(someNumber);
console.log(stringNumber);
console.log(typeof stringNumber);

// *********************** Operations ***********************

let value = 4
let negValue  = -value;
// console.log(negValue);

let str1 = "hello "
let str2 = "shahbaz"

let str3 = str1 +str2;
// console.log(str3);

console.log("1" + 2);
console.log(1 + "2");
console.log("1" + 2 + 2);
console.log(1 + 2 + "2");

console.log( (3 + 4) * 5 % 3);

console.log(+true);

let num1, num2, num3

num1 = num2 = num3 = 2 + 2

let gameCounter = 100
gameCounter++;
console.log(gameCounter);
