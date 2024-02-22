// Block and Global scope.

let a = 200

if(true) {
    let a = 10
    const b = 20
    var c = 30
    // console.log("INNER: ", a);
}


// console.log(a);
// console.log(b);
// console.log(c);

// Inner functions can access the elements of outer function but reverse not possible.
function one(){
    const username = "shahbaz"

    function two(){
        const website = "youtube"
        console.log(username);
    }
    // console.log(website);

    two()
}

// one()

if (true) {
    const username = "shahbaz"
    if (username === "shahbaz") {
        const website = " youtube"
        // console.log(username + website);
    }
    // console.log(website);
}

// console.log(username);



// ++++++++++++++ INTERESTING +++++++++++++


console.log(addone(5))
function addone(num) {
    return num + 1
}



addTwo(5)
const addTwo = function(num) {
    return num + 2
}

