let myArr = [
  { name: "Ali", salary: 3500, bonus: 1750 },
  { name: "kami", salary: 4350, bonus: 1450 },
  { name: "imran", salary: 1500, bonus: 650 },
  { name: "rahul", salary: 700, bonus: 3000 },
];
for (let i = 0; i < myArr.length; i++) {
  let totalSal = myArr[i].salary + myArr[i].bonus;
  console.log(totalSal);
}
