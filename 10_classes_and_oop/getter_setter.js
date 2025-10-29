class User {
  constructor(email, password) {
    this.email = email;
    this.password = password;
  }

  get password() {
    return `${this._password}hitesh`;
  }
  set password(value) {
    this._password = value.toUpperCase();
  }
}
const hitesh = new User("h@hitesh.ai", "abc");
console.log(hitesh.password);

/*const Name = {
  firstName: "Imtanan",
  lastName: "Ahnaf",
  get fullName() {
    return this.firstName + " " + this.lastName;
  },
};
console.log(Name.fullName);*/
