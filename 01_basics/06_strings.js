const name = "Mohit"
const repoCount = 50 

// console.log(name + repoCount + "Value");

console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);

const gameName = new String("Rahul")
console.log(gameName[0]);
console.log(gameName.__proto__);

console.log(gameName.length);
console.log(gameName.toUpperCase());

console.log(gameName.charAt(3));
console.log(gameName.indexOf('l'));

const newString = gameName.substring(0,2)
console.log(newString);

const anotherString = gameName.slice(-4,3)
console.log(anotherString);


const newStringOne = "   Mohit   "
console.log(newStringOne);
console.log(newStringOne.trim());

const url = "https://mohitporfolio.in/mohit%20singh"

console.log(url.replace('%20', '-'));

console.log(url.includes('singh'));