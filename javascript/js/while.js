const inName = document.getElementById("inName")
let inCity = document.getElementById("inCity")
let visitCity = 1
let citys = ""
let control = "s"

function tourist() {
    const name = inName.value
    inputData()
    control = prompt("Visitou outra cidade (S/N)?")
    whilefun()
    outputTourist.textContent = "O " + name + " visitou " + visitCity + " cidades que são: " + citys
}

function inputData() {
    inCity.focus()
    citys += "-" + inCity.value
}
function whilefun(){
    while (control === "s" || control === "S") {
        inputData()
        visitCity++
        console.log(visitCity + " " + citys)
        control = prompt("Visitou outra cidade (S/N)?")

    }
}
let btTouristCounter = document.getElementById("btTouristCounter")
btTouristCounter.addEventListener("click", tourist)

