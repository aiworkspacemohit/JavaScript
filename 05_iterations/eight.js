const myNums =[1,2,3]

// const myTotal = myNums.reduce(function (acc , currval) {
//     console.log(`acc: ${acc} and currval : ${currval}`);
//     return acc + currval;
// },0)


const myTotal = myNums.reduce((acc, currval) => acc + currval, 0);
console.log(myTotal);
// here acc is known as accumulator and by default we have to initialize its value to zero so that first value in the accumulator should be 0

const shoppingCart = [
    {
        itemName: "JS course",
        price : 3444
    },
    {
        itemName: "python course",
        price : 5000
    },
    {
        itemName: "C++ course",
        price : 1000
    },
    {
        itemName: "data science course",
        price : 5555
    }
]

const total = shoppingCart.reduce((acc, item) => {
    return acc + item.price;
},0)

console.log(total);