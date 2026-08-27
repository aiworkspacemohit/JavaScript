// Singleton
// object.create  // it is done through constructor method
// object literals


const mySym = Symbol("key1")
const JsUser = {
    name: "Mohit",
    "full name" : "Mohit singh",
    [mySym]: "mykey1",
    age : 18,
    location: "India",
    email: "mohit@gmail.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"]
}

console.log(JsUser["email"]);
console.log(JsUser[mySym]);

JsUser.email = "mohitsingh@google.com"
// Object.freeze(JsUser)
JsUser.email = "mohitsingh@mircrosoft.com"
console.log(JsUser);



JsUser.greeting = function(){
    console.log("Hello Js user");
}
JsUser.greetingTwo = function(){
    console.log(`hello Js user, ${this.name}`)
}

console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());