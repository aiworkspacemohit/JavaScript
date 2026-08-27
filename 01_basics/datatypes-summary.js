//primitive and non primitive 

// Primitive data types 
// 7 types : String , Number, Boolean, null, undefined, BigInt
// symbol

// javascript is a dynamically typed programming language because variable types are checked at runtime and can change during execution 





const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id === anotherId) // ans is false

const bigNumber = 245678946785678n  //BigInt



// Reference type( Non primitive )

// Array, Objects , Functions, 

const heros = ["shaktiman" , "naagraj", "doga"];

let myobj = {
    name: "mohit",
    age: 22,
}

const myFunction = function(){
    console.log("Hello world"); 
}

console.log(typeof heros); // array
console.log(typeof myobj); // obj
console.log(typeof anotherId); // symbol
console.log(typeof bigNumber); // bigInt

console.log(myFunction);
console.log(typeof(myFunction));



//+++++++++++++++++++++++++++++++++++++++++++
// Stack ( primitive ), Heap (Non - Primitive)

let myYoutubeName = "mohitsingh"

let anotherName = myYoutubeName
anotherName = "chaiAurCode"

console.log(myYoutubeName);
console.log(anotherName);

let userOne = {
    email: "user@google.com",
    upi : "user@oksbi"
}

let userTwo = userOne

userTwo.email = "mohitsingh@gmail.com"
console.log(userOne);
console.log(userTwo);