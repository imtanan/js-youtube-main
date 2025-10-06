let Input = prompt("Enter anything")
let Input2 = prompt("Enter anything to compare with")
let typeofInput = typeof Input
alert("The type of " + Input + " is "+ typeofInput);
alert(typeof Input==typeof Input2)
alert(typeof Input===typeof Input2)
//automatic conversion examples
alert(typeof 5 == typeof '5')
console.log("bro JS thinks '5'  equals to 5 lol")
let sum = 20 + "Hellow"
console.log(sum)
const variable1 = false
const variable2 = ""
console.log(variable1==variable2)
