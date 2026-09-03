const user = {
    username : "mohit", 
    loginCount : 8,
    signedInt : true,

    getUserDetails: function(){
        console.log("Got user details from database");
        console.log(`Username : ${this.username}`);
        console.log(this);
    }
}

// console.log(user.username);
// console.log(user.getUserDetails());

// console.log(this);



// const promiseOne = new Promise()
// const date = new Date()


function User(username, loginCount , isLoggedIn){
    this.username = username;
    this.loginCount = loginCount;
    this.isLoggedIn = isLoggedIn

    this.greeting = function(){
        console.log(`Greeting ${this.username}`)
    }
    return this
}

const userOne = new User("Mohit", 23, true)
const userTwo = new User("chaiAurcode", 22, false)
console.log(userOne.greeting());
console.log(userTwo);


// when we write new key word an empty instance will be created

console.log(userTwo.constructor);