

function takeUserInput(num1,num2,operator){
   num1 = Number(num1)
   num2 = Number(num2)
    let msg
    if(!isNaN(num1) && !isNaN(num2)){
      
               if(operator=='+'){
                msg= num1+num2
                msg = "The addition of " + num1 + " and " + num2 + " is " + msg
               }
               if(operator=='-'){
               msg = num1-num2
                msg = "The Subtraction of " + num1 + " with " + num2 + " is " + msg
               }
               if(operator=='*'|| operator =='x'){
                msg= num1*num2
                msg = "The multiplication of " + num1 + " with " + num2 + " is " + msg
               }
               if(operator=='/'){
                msg= num1/num2
                msg = "The division of " + num1 + " with " + num2 + " is " + msg
               }
            }else{
                msg = "Invalid Input!"
            }
               return msg
}
let number1 =  prompt("Enter Number one")


let operator = prompt("Enter the operator")

let number2 = prompt("Enter Number two")

let d= takeUserInput(number1,number2,operator)

alert(d)
