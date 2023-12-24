function multiplacationTable(){
    let inNumber = document.getElementById("inNumber")
    let number = Number(inNumber.value)
    let tabuada = ""
    for (let i = 1; i<=20; i++){
        tabuada += number + " x " + i + " = " + number*i +"\n"
    }
    outputMultiplicationTable.textContent = tabuada
    console.log(tabuada)
}

let btMultiplicationTable = document.getElementById("btMultiplicationTable")
btMultiplicationTable.addEventListener("click", multiplacationTable)