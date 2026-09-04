class user{
    constructor(username){
        this.username = username
    }

    logMe(){
        console.log(`Username is : ${this.username}`);

    }

    static createId(){  // restrict the user to use this function  
        return `123`
    }
}

const mohit = new user("mohit");
// console.log(mohit.createId());
console.log(mohit);

class teacher extends user{
    constructor(username, email){
        super(username);
        this.email = email;

    }
}

const iphone = new teacher("iphone", "i@phone.com");
iphone.logMe();
console.log(iphone.createId()); // restriced bcoz it is static function
