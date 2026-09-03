// fetch('https://something.comm').then().catch().finally()

// const promiseOne = new Promise(function(resolve, reject){
//     //Do an async task
//     //db calls, cryptography, network
//     setTimeout(function(){
//         console.log('Async task is completed');
//         resolve();
//     },1000);
// });

// promiseOne.then(function(){
//     console.log("Promise consumed");
// });

// new Promise(function(resolve, reject){
//     setTimeout(function(){
//         console.log("Async task Two:");
//         resolve();
//     },1000);
// }).then(function(){
//     console.log("Async 2 is resolved");
// });



// const promiseThree = new Promise(function(resolve, reject){
//     setTimeout(function(){
//         resolve({username: "chai", email: "chai@example.com"});
//     },1000)
// })

// promiseThree.then(function(user){
//     console.log(user);
// });

// const promiseFour = new Promise(function(resolve, reject){
//     setTimeout(function(){
//         let error = false;
//         if(!error){
//             resolve({username:"mohit", email:"mohit@example.com"});
//         } else {
//             reject('Error: Something went wrong');
//         }
//     }, 1000);
// })
// promiseFour.then((user)=>{
//     console.log(user);
//     return user.username
// })
// .then((username)=>{
//     console.log(username);
// })
// .catch(function(error){
//     console.log(error);
// }).finally(()=> {
//     console.log("The promise is either resolved or rejected");
// })

const promiseFive = new Promise(function(resolve, reject){
    setTimeout(function(){
        let error = false;
        if(!error){
            resolve({username: "javascript", password: "123"})
        } else {
            reject('Error: JS Something went wrong')
        }
    }, 1000)
});

async function consumePromiseFive(){
    try{
        const response = await promiseFive
        console.log(response);
    }
    catch (error){
        console.log(error);
    }
    
}

consumePromiseFive();



// async function getAllUsers(){
//     try{
//         const response = await fetch('https://jsonplaceholder.typicode.com/users')
//         // console.log(response);

//         const data = await response.json()
//         console.log(data);

//     } catch (error){
//         console.log("E: ", error);
//     }

// }

// getAllUsers()


fetch('https://jsonplaceholder.typicode.com/users')
.then((response) => {
    return response.json()
})
.then((data) => {
    console.log(data);
})
.catch((error) => {
    console.log("E: ", error);
})


// Promises // async await // fetch 

// fetch 

// respones = fetch("some url")
// it handles data :_____ using onfulfulled(), and onRejection()
// and handle the web browser/ node  -> network request -> yes/No 
// then store the data into => global memory => response 
// response <= data
// this is how fetch keyword works behind the scene
