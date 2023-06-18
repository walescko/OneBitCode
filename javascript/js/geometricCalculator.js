function triangle(){
    console.log("Hello Triangle")
    let heigth = parseFloat(prompt("Qual a altura do triângulo?"))
    let width = parseFloat(prompt("Qual a base do triângulo?"))
    console.log(heigth, width)
    let area = (heigth*width)/2
    console.log(area)

}
function rectangle(){
    console.log("Hello Rectangle")
    let heigth = parseFloat(prompt("Qual a altura do retângulo?"))
    let width = parseFloat(prompt("Qual a base do retângulo?"))
    console.log(heigth, width)
    let area = (heigth*width)
    console.log(area)
}
function square(){
    console.log("Hello Square")
    let side = parseFloat(prompt("Qual a lado do retângulo?"))
    let area = (side*side)
    console.log(area)
}
function trapeze(){
    console.log("Hello Trapeze")
    let baseMajor = parseFloat(prompt("Qual a base maior do trapézio?"))
    let baseMinor = parseFloat(prompt("Qual a base menor do trapézio?"))
    let heigth = parseFloat(prompt("Qual a altura do trapézio?"))
    let area = ((baseMajor + baseMinor)*heigth)/2
    console.log(area)
}
function circle(){
    console.log("Hello Circle")
    let radius = parseFloat(prompt("Qual o raio do circulo?"))
    let area = Math.PI*radius*radius
    console.log(area)

}

let btTriangle = document.getElementById("btTriangle")
btTriangle.addEventListener("click", triangle)
let btRectangle = document.getElementById("btRectangle")
btRectangle.addEventListener("click", rectangle)
let btSquare = document.getElementById("btSquare")
btSquare.addEventListener("click", square)
let btTrapeze = document.getElementById("btTrapeze")
btTrapeze.addEventListener("click", trapeze)
let btCircle = document.getElementById("btCircle")
btCircle.addEventListener("click", circle)
