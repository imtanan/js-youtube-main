<<<<<<< HEAD
const numbers = [10, 20, 30, 40];

const newNum = numbers.reduce((accu, curr) => {
  console.log(`acc: ${accu} and curr is : ${curr}`);

  return accu + curr;
}, 0);

console.log(newNum);
=======
const myNumbers = [1,2,3,4,5,6,7,8,9,10]
const newNums = myNumbers
                        .map((num) => num*10)
                        .map((num) => num+1)
                        .filter((num) => num>=40) 
console.log(newNums)
>>>>>>> 228bb34 (sevenandsixthchanges)
