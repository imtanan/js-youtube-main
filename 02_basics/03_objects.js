//singleton
//object literals

const mySym = Symbol("key1")
const JsUser = {
    name: "Hitesh",
    [mySym]: "mykey1",
    "full name": "Hitesh Choudhary",
    age: 18,
    location: "Pakistan",
    email:"imtananrao1@gmail.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Friday"]
}
/*
console.log(JsUser.email);
console.log(JsUser["email"]);
console.log(JsUser["full name"]);
console.log(JsUser[mySym]);
console.log(typeof JsUser[mySym]);
Object.freeze(JsUser) //it will not allow to change the object
*/

JsUser.greeting =  function(){
    console.log("Hello, Good morning!");
}
JsUser.greetingTwo =  function(){
    console.log(`Hello, ${this.name}`)
}
console.log(JsUser.greeting())
console.log(JsUser.greetingTwo())