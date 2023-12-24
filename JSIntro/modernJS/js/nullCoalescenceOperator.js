let a = 0
let b = null
let c = "Teste"
console.log(a, b, c)
console.log(a || b || c)
console.log(a ?? b ?? c)

b = a || 42

console.log({a, b})
b = a ?? 42

console.log({a, b})

c = false ?? 42 //operador de coalescencia nula é ??

console.log({c})


