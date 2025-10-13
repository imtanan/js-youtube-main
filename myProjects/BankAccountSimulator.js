const prompt = require("prompt-sync")();
//Lets create an object
let user = { name: "Imtanan", Balance: 5000 };
let deposit = function () {
  let amount = Number(prompt("Enter amount to deposit"));
  user.Balance += amount;
  console.log(`The current Balance is :  ${user.Balance}`);
};
let withdraw = function () {
  withdrawalAmount = Number(prompt("Enter withdrawal amount"));
  if (withdrawalAmount <= user.Balance) {
    user.Balance -= withdrawalAmount;
    console.log(`Withdrew ${withdrawalAmount} successfully!`);
  } else {
    console.log("We are sorry to say that you have insufficient funds.");
  }
};
let checkBalance = function () {
  console.log(`your current Balance is  ${user.Balance}`);
};
//Menu function
let showMenu = function () {
  studentStatus = true;
  while (studentStatus) {
    let count = Number(
      prompt(
        "Good Day! Please Press 1 for deposit, press 2 to withdraw money, and press 3 to check your current Balance Otherwise 4 to exit "
      )
    );
    switch (count) {
      case 1:
        deposit();
        break;
      case 2:
        withdraw();
        break;
      case 3:
        checkBalance();
        break;

      case 4:
        studentStatus = false;
        break;

      default:
        console.log("Invalid Input please try again!");
        showMenu();
        break;
    }
  }
};
showMenu();
