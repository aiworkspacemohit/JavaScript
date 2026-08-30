const myObject = {
    game1 : 'NFS',
    game2 : 'Spiderman'
} 

// for in loop

for(const key in myObject){
    console.log(key, ":= " , myObject[key]);
}

const programming = ['js', 'rb', 'py', 'swift']

for(const key in programming){
    console.log("value at :", key, "index is ", programming[key] );
}


//Maps

// const map = new Map()
// map.set('IN', "India")
// map.set('USA', "united states of america")
// map.set('Fr', "France")
// map.set('IN', "india")

// console.log(map);

// for(const key in map){
//     console.log(key);
// }


