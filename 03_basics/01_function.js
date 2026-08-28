
function sayMyName(){
    console.log("Mohitsingh");
}

sayMyName //function reference 
sayMyName() // function execute

function addTwoNumbers(number1, number2){
    console.log(number1 + number2);
}

addTwoNumbers(24, 44);

function addition(num1, num2){
    let result = num1+  num2
    return result;
}

const result = addition(3, 4);
console.log("Result: " , result);

function loginUserMessage(userName = "Rahul"){  // by default value 
    if(userName === undefined){
        console.log("Please enter a username");
        return 
    }
    return `${userName} just logged in`
}

console.log(loginUserMessage("mohit"));
console.log(loginUserMessage());


console.log("+++++++ New Lecture +++++++");


function calculateCartPrice(...num1){  //here ... is the rest operator similar with the spread operator

    return num1;
}

console.log(calculateCartPrice(200, 300, 400, 500, 2000));

const user = {
    username : "hitesh",
    price : 144
}

function handleObject(anyobject){
    console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`);
}

// handleObject(user)
handleObject({
    username : "sam",
    price: 399
});

handleObject(user);

const myNewArray = [200, 400, 100, 600];

function returnSecondValue(getArray){
    return getArray[1]
}

console.log(returnSecondValue(myNewArray));
console.log(returnSecondValue([200,400,500,1000]));