// Dates 

let myDate = new Date()
console.log(myDate.toString());
console.log(myDate.toDateString());
console.log(myDate.toLocaleString());
 
// toDateString
// toISOString
// toJSON
// toLocaleDateString
// toLocaleString
// toLocaleTimeString
// toString
// toTimeString
// toUTCString
// getTimezoneOffset

console.log(myDate.toDateString());
console.log(myDate.toISOString());
console.log(myDate.toJSON());
console.log(myDate.toLocaleDateString());
console.log(myDate.toLocaleTimeString());
console.log(myDate.toString());
console.log(myDate.toTimeString());
console.log(myDate.toUTCString());
console.log(myDate.getTimezoneOffset());


console.log(typeof(myDate));

let myCreatedDate = new Date(2025, 1, 25)
console.log(myCreatedDate.toDateString());


let myTimeStamp = Date.now()

console.log(myTimeStamp);
console.log(myCreatedDate.getTime());
console.log(Math.floor(Date.now()/1000));

let newDate = new Date()
console.log(newDate);
console.log(newDate.getMonth() + 1);
console.log(newDate.getDay());

//`${newDate.getDay()} and the time `
newDate.toLocaleString('default',{
    weekday: "long"
})

