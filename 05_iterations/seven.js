const numbers = [10, 20, 30, 40];

const newNum = numbers.reduce((accu, curr) => {
  console.log(`acc: ${accu} and curr is : ${curr}`);

  return accu + curr;
}, 0);

console.log(newNum);
