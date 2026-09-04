const descripter = Object.getOwnPropertyDescriptor(Math, "PI")

console.log(descripter);

//output:

// {
//   value: 3.141592653589793,
//   writable: false,
//   enumerable: false,
//   configurable: false
// }




//console.log(Math.PI);
//Math.PI = 5
//console.log(Math.PI);


const chai = {
    name: 'ginger chai', 
    price : 340,
    isAvailable : true
}

//before defining property
const myOwnDescriptor = Object.getOwnPropertyDescriptor(chai, "name");
console.log(myOwnDescriptor);

// output:

// {
//   value: 'ginger chai',
//   writable: true,
//   enumerable: true,
//   configurable: true
// }


// we can change these property for our code only 
Object.defineProperty(chai, 'name',{
    writable: false,
    enumerable: false,
    configurable: false
})

//after defining property
console.log(Object.getOwnPropertyDescriptor(chai, "name"));