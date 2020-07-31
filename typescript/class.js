var User = /** @class */ (function () {
    function User(name, email, age) {
        this.name = name;
        this.email = email;
        this.age = age;
        console.log("user created" + this.name);
    }
    return User;
}());
var john = new User("john", "johndoe@gmail.com", 34);
