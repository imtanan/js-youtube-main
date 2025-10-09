function sayMyName(){
    console.log("i");
    console.log("m");
    console.log("r");
    console.log("a");
    console.log("n");
    
}
//sayMyName()
function addTwoNumbers(number1,number2){
    const result1= number1+number2
    
    console.log("hitesh");
    return result1
}
//const result = addTwoNumbers(1,2)

//console.log("Result: ", result);
function loginUserMessage(uername){
        return `${username} just logged in`
}
//console.log(loginUserMessage("Hitesh"));
function calculateCartPrice(...num1){
    return num1
}
//console.log(calculateCartPrice(200,400,500));
function addNumbers(val1,val2,...numbers){
console.log(numbers)

}
//addNumbers(1,2,3,4,5)

const user = {
    username: "Imtanan",
    price: 199
}
const user2 = {
    username: "Ahnaf",
    price: 200
}
function handleObject(anyobject){
    console.log(`Username is ${anyobject.username} and the price is ${anyobject.price}`);
    
}
handleObject(user)
handleObject(user2)
 

