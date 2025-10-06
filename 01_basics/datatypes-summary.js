const id = Symbol('123')
const anotherId = Symbol('123')
console.log(id ===anotherId);

const myFunction = function(){
    console.log("Hello World");
}
let myYoutubename = "hiteshchoudhrydotcom"
let anothername = myYoutubename
anothername = "chaiaurcode"
console.log(myYoutubename);
console.log(anothername);

let userOne = {
    email: "user@google.com",
    upi: "user@ybl"
}

let userTwo = userOne

userTwo.email = "imtanan@gmail.com"

console.log(userOne.email);
console.log(userTwo.email);


