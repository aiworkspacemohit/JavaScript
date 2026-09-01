// fetch('https://something.comm').then().catch().finally()

const promiseOne = new Promise(function(resolve, reject){
    //Do an async task
    //db calls, cryptography, network
    setTimeout(function(){
        console.log('Async task is completed');
        resolve();
    },1000);
});

promiseOne.then(function(){
    console.log("Promise consumed");
});

new Promise(function(resolve, reject){
    setTimeout(function(){
        console.log("Async task Two:");
        resolve();
    },1000);
}).then(function(){
    console.log("Async 2 is resolved");
});



const promiseThree = new Promise(function(resolve, reject){
    setTimeout(function(){
        resolve({username: "chai", email: "chai@example.com"});
    },1000)
})

promiseThree.then(function(user){
    console.log(user);
});

const promiseFour = new Promise(function(resolve, reject){
    setTimeout(function(){
        let error = true;
        if(!error){
            resolve({username:"mohit", email:"mohit@example.com"});
        }
    });
}).then(function(user){
    console.log(user);
});