const user = {
    username: "shahbaz",
    price: 999,

    welcomeMessage: function() {
        console.log(`${this.username} , welcome to website`);
        console.log(this);
    }
}

// user.welcomeMessage()
// user.username = "sid"
// user.welcomeMessage()

// console.log(this);

// function chai(){
//     let username = "shahbaz"
//     console.log(this.username);
// }

// chai()

// const chai = function () {
//     let username = "shahbaz"
//     console.log(this.username);
// }


// const chai =  () => {
//     let username = "sid"
//     console.log(this);
// }


// chai()

// const addTwo = (num1, num2) => {
//     return num1 + num2
// }

// const addTwo = (num1, num2) =>  num1 + num2

// const addTwo = (num1, num2) =>  ( num1 + num2 )

const addTwo = (num1, num2) => ({username: "shahbaz"})

console.log(addTwo(3, 4))