const inName = document.getElementById("inName")
let inCity = document.getElementById("inCity")
let visitCity = 0
let citys = ""
let control = "s"
// Programação Funcional
function tourist(){
    const name = inName.value
    inputData()
    visitCity++
    console.log(visitCity + " " + citys)
    btTouristCounter.addEventListener("click", tourist)
    outputData()
}

function inputData(){
    inCity.focus()
    citys += " " + inCity.value
    // control = prompt("Visitou outra cidade (S/N)?")
}
function outputData(){
    outputTourist.textContent = "O " + name + " visitou " + visitCity + " cidades que são: " + citys
}

let btTouristCounter = document.getElementById("btTouristCounter")
btTouristCounter.addEventListener("click", tourist)