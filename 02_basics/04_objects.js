const tinderUser = new Object() // singleton object 

// const tinderUsers = {}  // non singleton object

tinderUser.id = "123abc"
tinderUser.name = "Sammy"
tinderUser.isLoggedIn = false

// console.log(tinderUser)


const regularUser = {
    email: "some@gmail.comm",
    fullname: {
        userfullname: {
            firstname: "mohit",
            lastname: "singh"
        }
    }
}

console.log(regularUser.fullname.userfullname.firstname);

const obj1 = {1:"a", 2: "b"}
const obj2 = {3:"a", 4: "b"}

// const obj3 = {obj1, obj2}
const obj3 = Object.assign(obj1, obj2)
const obj4 = Object.assign({}, obj1, obj2) // consider to use this one to assign object 

const obj5 = {...obj1, ...obj2};
console.log(obj3);

console.log(obj4); 

console.log(obj5);

const users = [
    {
        id: 1,
        email: "h@gmail.com"
    },
    {
        id: 2,
        email: "i@gmail.com"
    },
    {
        id: 3,
        email: "j@gmail.com"
    },
    {
        id: 4,
        email: "k@gmail.com"
    }
]

const k = users[1].email;
console.log(k);

console.log(tinderUser);

console.log(Object.keys(tinderUser));
console.log(Object.values(tinderUser));

console.log(Object.entries(tinderUser));
console.log(tinderUser.hasOwnProperty('isLoggedIn'));

const course = {
    courseName : "Js in hindi",
    price : "999",
    courseInstructor: "hitesh"
}

//course.courseInstructor

const {courseInstructor: instructor} = course ; // destructuring

// console.log(courseInstructor);
console.log(instructor);

// const navbar = () => {
// }
// navbar(company = "hitest")

 //++++++++++  API +++++++++++++
 // format JSON => javascript object notation