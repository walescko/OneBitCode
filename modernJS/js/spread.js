const towns = ['Hebrom', 'Jerusálem', 'Samaria', 'Cafarnaum', 'Belém', 'Nazaré']
// const townsClone = [...towns]

console.log(towns)
console.log(...towns)
console.log(...towns[0])

// adiconado uma nova cidade
const townsCopy = towns

console.log(townsCopy)
townsCopy.pop()
townsCopy.pop()
console.log(towns)
console.log(townsCopy)


townsCopy.push('Jericó')
console.log(towns)
console.log(townsCopy)
console.log({towns, townsCopy})
const townsClone = [...towns]
townsClone.push('Betel')
console.log({towns, townsCopy, townsClone})

const townsObj = {...towns}
const townObjClone = {...towns}

townObjClone.test = 'Siquém'
console.log({townsObj, townObjClone})
