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