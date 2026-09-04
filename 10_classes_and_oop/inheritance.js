// Inheritance 

const User = {
    name : "phone",
    email: "phone@gmail.com"
}

const Teacher = {
    makevideo : true
}

const TeacherSupport ={
    isAvailable : false
}

const TASupport = {
    makeAssignment: 'JS Assignment',
    fullTime: true,
    __proto__: TeacherSupport
}


Teacher.__proto__ = User

// Modern Syntax

Object.setPrototypeOf(TeacherSupport, Teacher)


let anotherUsername  = "CodeWithMohit    "

String.prototype.trueLength = function(){
    console.log(`${this}`);
    console.log(`True length is : ${this.trim().length}`)
}

anotherUsername.trueLength();

"mohit  ".trueLength();
"hitesh  ".trueLength();


// Inheritance original keywords or syntax in javascript

class user{
    constructor(username){
        this.username = username
    }

    logMe(){
        console.log(`Username is ${this.username}`);
    }
}

class teacher extends user{
    constructor(username, email, password){
        super(username);
        this.email = email;
        this.password = password;
    }

    addCourse(){
        console.log(`A new course was added by ${this.username}`);

    }
}

const chai = new teacher("chai", "chai@teacher.com", "123");
console.log(chai);
chai.addCourse();


console.log(chai instanceof teacher);
console.log(teacher instanceof user);

console.log(chai instanceof user);

const masalachai = new user("masalachai");
console.log(masalachai instanceof teacher);
console.log(masalachai instanceof user);