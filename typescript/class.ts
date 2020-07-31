class User {
  name: string
  email: string
  age: string
  constructor(name: string, email: string, age: number) {
    this.name = name
    this.email = email
    this.age = age
    console.log("user created" + this.name)
  }
}

let john = new User("john", "johndoe@gmail.com", 34)
