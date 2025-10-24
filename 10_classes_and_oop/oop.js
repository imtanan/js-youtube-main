/*const user = {
  username: "imtanan",
  loginCount: 8,
  signedIn: true,

  getUserDetails: function () {
    console.log(`username:  ${this.username}`);
    console.log(this);
  },
};
console.log(user.getUserDetails());*/
function User(username, loginCount, isLoggedIn) {
  this.username = username;
  this.loginCount = loginCount;
  this.isLoggedIn = isLoggedIn;
  return this; 
}
const userOne = new User("imtanan", 8, true);
const userTwo = new User("Kajal", 12, false);

console.log(userOne.constructor);

