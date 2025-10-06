const balance = new Number(100)
console.log(balance);
console.log(balance.toString());
console.log(typeof balance);
console.log(balance.toString().length);
console.log(balance.toFixed(3));

let num  = 3.14576
console.log(num.toFixed(3));
console.log(num.toPrecision(3));
console.log(num.toExponential());
let number = 34754.19
console.log(number.toLocaleString("en-IN", {style:"currency", currency:"INR" }));
console.log(Math);
console.log(Math.abs(-4));
console.log(Math.ceil(4.5));
console.log(Math.round(4.5));
console.log(Math.trunc(4.5));
console.log(Math.floor(4.5));
console.log(Math.max(4,7,1));//gives 7
console.log(Math.min(4,7,1));//gives 1
console.log(Math.random());
console.log((Math.random()*10)+1);
console.log(Math.floor(Math.random()*10)+1);
const min=10
const max =20
console.log(Math.floor(Math.random()*(max-min + 1)) + min);