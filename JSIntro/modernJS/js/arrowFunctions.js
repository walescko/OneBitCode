function normalSum(a, b){
    return a + b
}

console.log(`Soma normal: ${normalSum(2, 2)}`)

const anonymousSum = function (a, b) {
    return a + b
}

console.log(`Soma Anônima: ${anonymousSum(2, 2)}`)

const arrowSum = (a, b) => {
    return a + b
}

console.log(`Soma arrow function: ${arrowSum(2,2)}`)

const subtract = (a, b) => a - b
console.log(`Subtração: ${subtract(5,2)}`)


const double = n => `O dobro de ${n} é ${n*2}`

const number = 21
console.log(`Dobro> ${double(number)}`)

const majorProphets = ['Isaias', 'Jeremias', 'Ezequiel', 'Daniel', 'Oséias', 'Joel']
const disciples = ['Pedro', 'João', 'Tiago', 'Judas', 'Mateus', 'Tomé', 'André', 'Felipe', 'Bartolomeu', 'Tadeu', 'Simão', 'Tiago de Alfeu']


const startingWithE = majorProphets.filter(prophet => prophet[0] === 'E')
console.log(startingWithE)
const startingWithJ = disciples.filter(prophet => prophet[0] === 'T')
console.log(startingWithJ)
