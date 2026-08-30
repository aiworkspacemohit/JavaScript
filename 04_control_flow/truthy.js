// empty string gives false 
// string value gives true
// empty array gives true 

const gmail = "helo@gmail.com"

if(gmail){
    console.log("Got user email");
}
else{
    console.log("Don't have user email");
}


const email = ""

if(email){
    console.log("Got user email");
}
else{
    console.log("Don't have user email");
}

//falsy values 
// false, 0, -0, BigInt, 0n , "", null, undefined, NaN

// truthy values
// "0", "false", " ", [], {}, function(){}

const emptyObj = {}
if(Object.keys(emptyObj).length === 0){
    console.log("Object is empty");
}

// false == 0  => return true
// false == "" => return true
// 0 == "" => return true 

// Nullish coalescing operator (??): null undefined

let val1, val2 , val3;
val1 = 5 ?? 10  
val2 = null ?? 10
val3 = undefined ?? 15

// let val4;
// val4 = null ?? 30 ?? 40
// val4 = null ?? undefined ?? 3

console.log(val1);  // 5
console.log(val2);  // 10
console.log(val3);  // 15

// Terniary Operator
// condition ? true : false

const iceTeaPrice = 200
iceTeaPrice <= 80 ? console.log("less than 80") : console.log("more than 80");