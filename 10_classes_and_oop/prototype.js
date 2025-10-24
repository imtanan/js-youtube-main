/*let myName = "hitesh     "
let myChannel = "Chai     "
console.log(myName.truelength);*/

let myHeros = ["thor", "spiderman"]

let heroPower = {
    thor: "hammer",
    spiderman: "sling",
    getSpiderPower: function(){
        console.log(`Spiderman power is ${this.spiderman}`);
    }
}
Object.prototype.hitesh = function () {
    console.log(`hitesh is present in all objects`);
}
//heroPower.hitesh()
Array.prototype.heyHitesh = function(){
    console.log(`Hitesh is saying hello`);
}
//myHeros.hitesh()
//myHeros.heyHitesh()
//heroPower.heyHitesh()
                               //Inheritance
const User ={
    name: "chai",
    email: "chai@google.com0",
}                               
const  Teacher = {
    makeVideo: true
}

const TeachingSupport = { 
    isAvailable: false
}

const TASupport = {
    makeAssignment: 'JS assignment',
    fullTime: true,
    __proto__: TeachingSupport,
 

}

//const check = TASupport.isAvailable
//const mkVD = TASupport.makeVideo
//console.log(check);
//console.log(mkVD);

//Teacher.__proto__=User
//Object.setPrototypeOf(TeachingSupport, Teacher)

String.prototype.trueLength = function(){
    console.log(this);
    console.log(`The true length of this is ${this.trim().length}`);
}

const anotherUsername = "chaiaurcode        "

anotherUsername.trueLength()