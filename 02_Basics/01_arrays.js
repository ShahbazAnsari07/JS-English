// array

// Types of array declaration techniques.
const myArr = [0, 1, 2, 3, 4, 5];
const myHeros = ["batman", "Thor"]
const myArr2 = new Array(1, 2, 3, 4)

// console.log(myArr[2]);


// Array Methods

// myArr.push(6)
// console.log(myArr);
// myArr.pop()

// myArr.unshift(8)
// myArr.shift()


// console.log(myArr.includes(9));
// console.log(myArr.indexOf(19));

// const newArr = myArr.join()

// console.log(myArr)
// console.log(typeof newArr);


// slice, splice
console.log("A", myArr);

const myn1 = myArr.slice(1, 3)

console.log(myn1);
console.log("B", myArr);


const myn2 = myArr.splice(1, 3)
console.log("C", myArr);
console.log(myn2);