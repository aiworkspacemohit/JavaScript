// for of

["","", ""]
[{},{},{}]

const arr = [1,3,4,5,6,7]

for(const num of arr){
    console.log(`value : ${num}`);
}

const greetings = "hello world"
for(let greet of greetings){
    console.log(`Each char is ${greet}`);
}

//Maps

const map = new Map()
map.set('IN', "India")
map.set('USA', "united states of america")
map.set('Fr', "France")
map.set('IN', "india")

console.log(map);

for(const [key, value] of map){
    console.log(key , ':=', value);
}

for(const key of map){
    console.log(key);
}


//Object 

const myObject = {
    game1 : 'NFS',
    game2 : 'Spiderman'
} // for of loop is not work on the objects