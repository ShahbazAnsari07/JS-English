// Primitive Datatypes

// 7 types : String, Number, Boolean, null, undefined, Symbol, BigInt

// JavaScript is a dynamically typed language, which means that 
// data types of variables are determined by the value they hold 
// at runtime and can change throughout the program as we assign 
// different values to them.

const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')

// console.log(id === anotherId);

const bigNumber = 35546886654264n



// Reference Type (Non primitive)

// Arrays, Objects, Functions
const heros = ["Batman", "Thor", "Ironman"];
let myObj = {
    name: "shahbaz",
    age: 21,
}

const myFunction = function(){
    console.log("Hello World");
}


// console.log(typeof bigNumber);
// console.log(typeof anotherId);




// +++++++++++++++++++++++++++++++++++++++++++++++++++++++

// Stack (Primitive), Heap(Non-Primitive)

let myFirstname = "Shahbaz";

let anotherName = myFirstname
anotherName = "Ansari";

console.log(myFirstname);
console.log(anotherName);

let userOne = {
    email: "user@google.com",
    upi: "user@ybl"
}

let userTwo = userOne

userTwo.email = "shahbaz@google.com"
console.log(userOne.email);
console.log(userTwo.email);