// Immediately Invoked Function Expressions

(function chai(){
    console.log(`DB1 connected`)
})(); // global scope ke pollution se problem hoti hai kayi baar 
// toh global scope ke pollution ko hatane ke liye iife ka use kiya 

( () => {
    console.log(`DB2 connected`);
})(); // () execution don't know where to stop so we use semicolon

( (name) => {
    console.log(`DB3 connected ${name}`);
})("mohit");

