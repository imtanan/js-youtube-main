//for of
//["","",""]
//[{},{},{}]
const arr = [1,2,3,4,5]
for (const num of arr) {
 //   console.log(num); 
}
const greetings  = "Hello World!"
for (const greet of greetings) {
    //console.log(`Each char is ${greet}`);
    
}
//Maps
/*const map = new Map()
map.set("a",1)
map.set("b",2)
map.set("c",3)*/
//console.log(map.get("a"));
//console.log(map.size);
const map = new Map()
map.set('IN', "India")
map.set('USA', "United States of America")
map.set('Fr', "France")
for (const [key, value] of map) {
    console.log(key, ':-', value);
}
const myObject = {
    'game1' : 'NFS',
    'game2' : 'spiderman'
}
for (const [key, value] of myObject) {
    console.log(key, "::==", value);
    
}








