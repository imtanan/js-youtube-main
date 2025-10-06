"use strict";
let d =  new Date()
console.log(d.toDateString());//shows date only (no time)
console.log(d.toISOString());//to ISO standard (used in APIs and databses)
console.log(d.toJSON());//same as ISO but used when want to convert an object into JSON
console.log(d.toLocaleDateString());


let myCreatedDate = new Date(2023, 0, 23 , 5, 3)
console.log(myCreatedDate.toString());
console.log(myCreatedDate.toLocaleString());
let myTimeStamp=Date.now();
let customEpoch = new Date(2003,5,19).getTime()
let d1 = new Date(2025, 10, 4).getTime()
let diff = d1 - customEpoch

console.log(Math.floor(diff/1000/60/60/24/365));//to get year







let myDate = new Date()
console.log(myDate.toLocaleString("en-US", {
    weekday:"long",
    year:"numeric",
    month:"long",
    day:"numeric",
    hour:"2-digit",
    minute:"2-digit",
    second:"2-digit"
}));






