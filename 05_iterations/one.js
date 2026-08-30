// for

// for(let index = 0 ; index < array.length; index++){
//     const element = array[index]; 
// }


// for(let i = 0 ; i<= 10; i++){
//     console.log(`Outer loop : ${i}`); 
//     for(let j = 0; j<= 10; j++){
//         console.log(`Inner loop : ${j}`);
//     }
// }

// for(let i = 0 ; i<= 10; i++){
//     for(let j = 0; j<= 10; j++){
//         console.log();
        
//     }
// }

// break and continue ;

// for(let index = 0 ; index <= 20; index++){
//     if(index == 5){
//         console.log("Detected 5");
//         break;
//     }
//     console.log(`value of i is ${index}`);
// }


for(let index = 0 ; index <= 20; index++){
    if(index == 5 || index == 15){
        console.log("Detected 5 or 15");
        continue;
    }
    console.log(`value of i is ${index}`);
}