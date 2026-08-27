const accountId = 144423
let accountEmail = "mohit8360@gmail.com"
var accountPassword = "1234"
accountCity = "Ludhiana"
let accountState;               

// accountId = 2 // not allowed 

console.log(accountId);

accountEmail = "hec@gmail.comm"
accountPassword = "21212121"
accountCity = "Begaluru"

/* 
Prefer not to use var
because of issue in block scope and functional scope

*/

console.table([accountId, accountEmail, accountPassword, accountCity, accountState])