// Block and Global scope.

let a = 200

if(true) {
    let a = 10
    const b = 20
    var c = 30
    console.log("INNER: ", a);
}


console.log(a);
// console.log(b);
// console.log(c);