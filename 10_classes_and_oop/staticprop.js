class User{
    constructor(username){
        this.username = username
    }
    logMe(){
        console.log(`USERNAME: ${this.username}`);
    }
    createId(){
        return `123`
    }
}

const hitesh = new User("hitesh")
console.log(hitesh.createId())