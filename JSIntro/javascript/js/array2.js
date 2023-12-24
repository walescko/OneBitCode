const array01 = ["Frodo", "Sam", "Merry", "Pippin", "Gandalf", "Aragorn", "Legolas", "Gimli"]
console.log(array01.length)
console.log(array01)
//push - adiciona elemento no final
array01.push("Smigol")
console.log(array01.length)
console.log(array01)
// unshift - adiciona elemento no inicio
size = array01.unshift("Boromir")
console.log(array01)
console.log(array01.length)
// pop - exclui elemento do final
const lastElement = array01.pop()
console.log(array01)
console.log(lastElement)
// shift - exclui elemento no inicio
const firstElement = array01.shift()
console.log(array01)
console.log(firstElement)
// metodos de pesquisas
//includes - verifica se o elemento pesquisado se encontra no array
let includs = array01.includes("Pippin")
console.log(includs)
includs = array01.includes("Pirilanpo")
console.log(includs)
// indexof - devolve o indice do elemento
let index = array01.indexOf("Pippin")
console.log(index)
//slice - copia parte do array devendo indicar o inicio e o último elemento -1
let hobbits = array01.slice(0, 4)
console.log(array01)
console.log(hobbits)
console.log(hobbits.length)
let others = array01.slice(-4)
console.log(others)
console.log(others.length)
//concat - junta os arrays
let society = hobbits.concat(others, "Boromir")
console.log(society)
console.log(society.length)
console.log("Hobbits: " + hobbits)
console.log("Outros: " + others)
//splice - with p - remove e substui elementos
let removeElement = society.splice(index, 1, "Piririplimplim")
console.log(removeElement)
console.log(society.length)
console.log(society)
//Interar os elementos - aprensentar os elementos ou fazer algum outro processo.
for (let i = 0; i < society.length; i++){
    console.log(i+1 + " " + society[i])
}