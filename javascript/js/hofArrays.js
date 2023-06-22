const personagens = [
    { nivel: 42, name: "Thrall", raca: "Orc", class: "Xamã" },
    { nivel: 28, name: "Garrosh", raca: "Orc", class: "Guerreiro" },
    { nivel: 35, name: "Varok", raca: "Orc", class: "Guerreiro" },
    { nivel: 35, name: "Uther", raca: "Humano", class: "Paladino" },
    { nivel: 26, name: "Jaina", raca: "Humano", class: "Maga" },
    { nivel: 39, name: "Tyrande", raca: "Elfo Noturno", class: "Sacerdotisa" },
    { nivel: 29, name: "Muradin", raca: "Anão", class: "Guerreiro" },
]

//map
const names = []

for(let i = 0; i < personagens.length; i++){
    names.push(personagens[i].name)
}
console.log(names)

const names01 = personagens.map(function(personagem){
    return personagem.name
})

console.log(names01)

const orcs = []
for (let i = 0; i < personagens.length; i++){
    if (personagens[i].raca === "Orc"){
        orcs.push(personagens[i])
    }
}
console.log(orcs)

const orcs01 = personagens.filter(function (personagem){
    return personagem.raca === "Orc"
})

console.log(orcs01)

//Reduce - reduz o tamanho do array original ou soma os elementos de uma array

const totalNivel = personagens.reduce(function (totalNivel, personagem){
    return totalNivel + personagem.nivel
}, 0)
console.log(totalNivel)

const racas = personagens.reduce(function (acumulado, personagem){
   if (acumulado[personagem.raca]){
       acumulado[personagem.raca].push(personagem)
   } else {
       acumulado[personagem.raca] = [personagem]
   }
   return acumulado
},{})

console.log(racas)

//Sort - já vi isso no livro da Loirane - ordena o array conforme o parametro

personagens.sort(function(a, b){
    return a.nivel - b.nivel
})
console.log(personagens)
personagens.sort(function(a, b){
    return b.nivel - a.nivel
})
console.log(personagens)

const personOrder = personagens.slice().sort(function (a, b){
    return b.nivel - a.nivel
})
console.log(personagens)
console.log(personOrder)