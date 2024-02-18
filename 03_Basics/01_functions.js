function sayMyName(){
    console.log("S");
    console.log("H");
    console.log("A");
    console.log("H");
    console.log("B");
    console.log("A");
    console.log("Z");
}

// sayMyName();

// function addTwoNumbers(number1, number2){
//     console.log(number1 + number2);
// }

function addTwoNumbers(number1, number2){
    
    // let result = number1 + number2
    // return result
    return number1 + number2
}


const result = addTwoNumbers(3, 4)

// console.log("Result: ", result);

function loginUserMessage(username = "Sam"){
    if(!username){
        console.log("Please enter a username");
        return
    }
    return `${username} just logged in`
}

// console.log(loginUserMessage("Shahbaz"))
console.log(loginUserMessage("shahbaz"));