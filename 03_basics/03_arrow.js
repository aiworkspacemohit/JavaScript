const user = {
    username : "hitesh",
    price: 333,

    welcomeMessage : function(){
        console.log(`${this.username} , welcome to website`)
        console.log(this);
    }
}

// user.welcomeMessage()
// user.username = "mohit"
// user.welcomeMessage()

// console.log(this);

function chai(){
    let username = "hitesh"
    console.log(this);
}

// chai()

// const chaiwala = function() {
//     let username = "hitesh"
//     console.log(this);
// }

const chaiwala = () => {
    let username = "hitesh"
    console.log(this);
}
 
chaiwala()

// const addTwo = (num1, num2) => {
//     return num1 + num2
// }

const addTwo = (num1, num2) => (num1 + num2)
// when we use curly braces return must be written between them 
// but in parathesis there is no need
// object must be in the curly braces 
console.log(addTwo(3,4));