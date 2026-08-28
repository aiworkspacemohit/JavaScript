let a = 10
const b = 20
var c = 30

if(true){
    let a = 30
    const b = 40
    var c = 50

    console.log(a);
    console.log(b);
    console.log(c);
}

console.log(a);
console.log(b);
console.log(c);

function one(){
    const username = "hitesh"

    function two(){
        const website = "youtube"
        console.log(username);
    }
    // console.log(username);

    two()
}

one()

if(true){
    const username = "mohit"
    if(username === "mohit"){
        const website = " youtube"
        console.log(username + website);
    }
    // console.log(website);
}

// console.log(username);


console.log(addone(3)); // function can be access before and after declaring it 
function addone(num){
    return num + 1;
}

// addone(3);

// console.log(addTwo(4));  // we cannot access the variables before declaring it 
const addTwo = function(num){
    return num + 2;
}

console.log(addTwo(4))

