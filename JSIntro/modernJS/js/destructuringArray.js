const person = {
    name: "Jesus Crist",
    job: "Carpenter",
    parents: ["Joseph", "Mary"]
}

console.log(person)
const name = person.name
console.log(name)
const { job, parents } = person
console.log(job, parents)
const [father, mother] = parents
console.log(father)
console.log(mother)
console.log(father, mother)

function createUser({name, job, parents}){
    const id = Math.floor(Math.random()*888)
    return{
        id,
        name,
        job,
        parents
    }
}
const Jesus = createUser(person)

console.log(Jesus)



