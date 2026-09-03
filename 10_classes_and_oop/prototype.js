// let myName = "Mohit     "
// let mychannel = "chai     "
// console.log(myName.trueLength);

let myheroes = ["thor", "spiderman"]

let heroPower = {
    thor: "hammer",
    spiderman: "sling",

    getSpiderPower: function(){
        console.log("It is an Object")
        console.log(`spidy power is ${this.spiderman}`);

    }
}

Object.prototype.mohit = function(){
    console.log("Mohit function is present in all objects");
}
 
// heroPower.mohit()
// myheroes.mohit()

Array.prototype.heyMohit = function(){
    console.log("constructor created inside array: ")
}


// heroPower.heyMohit()
myheroes.heyMohit()







