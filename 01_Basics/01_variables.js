const accountId = 14423;
let accountEmail = "shahbaz@gmail.com";
var accountPassword = "2146";
accountCity = "Jaipur";
let accountState;

// accountId = 5;  // not allowed

accountEmail = "hc@hc.com";
accountPassword = "54789";
accountCity = "Bengaluru";

/*
Prefer not to use var
because of issue in block scope and functional scope
*/

console.table([accountId, accountEmail, accountPassword, accountCity, accountState]);