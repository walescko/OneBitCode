const Address = require("./Address")
const Person = require("./Person")

const addr = new Address("rua dos bobos", 0, "Centro", "Toquinho", "SP")
const people = new Person("João Nada", addr)

console.log(people)
console.log(people.address.fullAddress())
console.log(people)