const score = 400
// console.log(score);

const balance = new Number(100)
// console.log(balance); 

// console.log(balance.toString().length);
// console.log(balance.toFixed(3));


const otherNumber = 123.8966
// console.log(otherNumber.toPrecision(4));

const hundreds = 1000000
// console.log(hundreds.toLocaleString('en-IN'));


// ++++++++++++++ Maths +++++++++++++++

// console.log(Math);
// console.log(Math.abs(-9));
// console.log(Math.round(14.668));
// console.log(Math.ceil(4.2));
// console.log(Math.floor(4.9));
// console.log(Math.min(4, 32, 1, 2));
// console.log(Math.max(22, 10, 15, 36));

console.log(Math.random());     // values lie only between 0 and 1.

console.log((Math.random()*10) + 1);
console.log(Math.floor(Math.random()*10) + 1);

const min = 10
const max = 20

console.log(Math.floor(Math.random() * (max - min + 1)) + min)
