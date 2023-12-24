function calculator (a, b, operator){
    console.log("Realizando uma operação")
    const result = operator(a, b)
    return result
}

function sum(x, y){
    console.log("Realizando uma soma")
    return x + y
}

console.log(calculator(3,5, sum))
console.log(calculator(8, 4, function (a, b){
    console.log("Retornando uma subtração")
    return a - b
}))

function showElement(element, index, array) {
    console.log({
        element,
        index,
        array
    })
}

const list = ["Pedro", "João", "Tiago", "Mateus"]

for (let i= 0; i < list.length; i++){
    showElement(list[i], i, list)
}

list.forEach(showElement)


function click(){
    alert("Você apenas clicou no botão que não faz nada!")
}

let btClick = document.getElementById("btClick")
btClick. addEventListener("click", click)