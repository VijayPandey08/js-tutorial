const accountId = 144553
let accountEmail = "vijay@gmail.com"
var accountPassword = "12345"
accountCity = "Jaipur"
/*
prefer not to use var
because of issue in block scope and functional scope
*/

console.log(accountId);
console.table([accountId, accountEmail, accountPassword, accountCity])