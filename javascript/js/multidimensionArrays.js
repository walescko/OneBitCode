console.log("Hello World!")
const array01 =["1º Nível", "2º Nível", "3º Nível"]
console.log(array01)

const array02 = [
    ["1º Nível", "2º Nível", "3º Nível"],
    ["1º Nível", "2º Nível", "3º Nível"],
    ["1º Nível", "2º Nível", "3º Nível"]
]
console.log(array02)

const array03 = [
    "1º Nível",
    ["2º nível", 42, true],
    [
        ["3º Nível, 1º item", "Hello World!"],
        ["3º Nível, 2º item", "Olá Mundo!"]
    ]
]
console.log(array03)
console.log(array03[0])
console.log(array03[1])
console.log(array03[1][0])
console.log(array03[1][1])
console.log(array03[1][2])
console.log(array03[2])
console.log(array03[2][0][0])
console.log(array03[2][0][1])
console.log(array03[2][1][0])
console.log(array03[2][1][1])

const matrix01 = [
    ["a11", "a12", "a13", "a14"],
    ["a21", "a22", "a23", "a24"],
    ["a31", "a32", "a33", "a34"],
    ["a41", "a42", "a43", "a44"]
]
console.log(matrix01)
console.table(matrix01)

matrix01[0].push("a15")
console.table(matrix01)

for (let i = 0; i < matrix01.length; i++) {
    for (let j = 0; j < matrix01[i].length; j++){
        console.log("Linha " + i + " Coluna " + j + ": " + matrix01[i][j])
    }
}
