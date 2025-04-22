const accountId = 144553
let accountEmail = "surya@gmail.com"
var accountPassword = "12345"
accountCity = "jaipur"
let accountState;

//accountId = 2 //not allowed beacsuse of const


/*
prefer not to use var beacsuse of issue in block scope and functional scope
*/
accountEmail = "hc@hc.com"
accountPassword = "212121"
accountCity = "jamnagar"

console.log(accountId);

console.table([accountId,accountEmail,accountPassword,accountCity,accountState]);
