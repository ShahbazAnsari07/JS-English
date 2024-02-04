const name = "shahbaz";
const repoCount = 20;

// console.log(name + repoCount + " Value");

// string interploation
console.log(`Hello my name is ${name} and my repoCount is ${repoCount}`);

const gameName = new String('shahbaz-ansari')

console.log(gameName[0]);
console.log(gameName.__proto__);


// console.log(gameName.length);
// console.log(gameName.toUpperCase());
// console.log(gameName.charAt(5));
// console.log(gameName.indexOf('h'));

// const newString = gameName.substring(0, 4);
// console.log(newString);

// const anotherString = gameName.slice(-8, 4);
// console.log(anotherString);

// trim removes the unwanted spaces
const newStringOne = "   shahbaz   "
console.log(newStringOne);
console.log(newStringOne.trim());

const url = "https://shahbaz.com/shahbaz%20ansari"

console.log(url.replace('%20', "-"));

console.log(url.includes('shahbaz'));

console.log(gameName.split('-'));
