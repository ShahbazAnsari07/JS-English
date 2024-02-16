// singleton

// object literals

const mySym = Symbol("key1")


const JsUser = {
    name: "Shahbaz",
    "full name": "Shahbaz Ansari",
    [mySym]: "mykey1",
    age: 21,
    location: "Delhi",
    email: "shahbaz@google.com",
    isLoggedIn: false,
    lastLogingDays: ["Monday", "Saturday"]
}

// console.log(JsUser.email);
// console.log(JsUser["email"]);
// console.log(JsUser["full name"]);
// console.log(JsUser[mySym]);


JsUser.email = "shahbaz@chatgpt.com"
// Object.freeze(JsUser);
JsUser.email = "shahbaz@microsoft.com";
// console.log(JsUser);

JsUser.greeting = function(){
    console.log("Hello JS Programmer");
}

JsUser.greetingTwo = function(){
    console.log(`Hello Js Programmer, ${this.name}`);
}

console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());