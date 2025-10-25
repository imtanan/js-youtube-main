class User{
    constructor(username){
        this.username = username
    }
    logMe(){
        console.log(`USERNAME is ${this.username}`);
    }
}

class Teacher extends User{
    constructor(username,email,password){
        super(username)
        this.email = email
        this.password = password
        
    }
    addCourse(){
        console.log(`A new course was added by ${this.username}`);
    }
}

const maalPani = new Teacher("bhali","kali@bhali.com", "123")
console.log(maalPani);
maalPani.addCourse()

const masalaChai = new User("masalaChai")
masalaChai.logMe()
console.log(maalPani instanceof Teacher);