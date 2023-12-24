const user = {
    name: "José de Arimateia",
    email: "arimateia@email.com",
    friends: [{
        name: "Maria",
        addrees:{
            street: "Alameda Calvário",
                number: 89
            }
    }],
    age: 42,
    phone: {
        countryCode: "+55",
        ddd: "51",
        number: "999123123"
    }
}

console.log(user)
console.log(user.friends[0])
// console.log(user.friends[0]).ddd

console.log(user.friends[0].phone?.ddd) //não apresenta não dando erro dando apenas undefined devido ao "?"
console.log(user.friends?.length)
console.log(user.phone?.ddd)
console.log(user.phone)
// console.log(user.friends?.[6].name)
console.log(user.brothers?.length)
console.log(user.brothers?.[5].name)