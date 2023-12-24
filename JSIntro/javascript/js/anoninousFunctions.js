function sum(a, b){
    return a + b
}

let operator = sum
console.log(operator(4,5))
const subtraction = function subtrac(a,b){
    return a - b
}
console.log(subtraction(5,2))

operator = function (a, b){
    return a * b
}
console.log(operator(4,5))

helloWorld()
function helloWorld(){
    console.log("Hello World!")
}
function  hiWorld(){
    console.log("Hi World!")
}
hiWorld()

function click(){
    alert("Você apenas clicou no botão que não faz nada!")
}

let btClick = document.getElementById("btClick")
btClick. addEventListener("click", click)