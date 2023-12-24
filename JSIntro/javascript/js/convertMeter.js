const inMeter = document.getElementById("inMeter")
let choice = ""

function milimeter(){
    choice = "1"
    converter()
}
function centimeter(){
    choice = "2"
    converter()
}
function decimeter(){
    choice = "3"
    converter()
}
function decameter(){
    choice = "4"
    converter()
}
function hectometer(){
    choice = "5"
    converter()
}
function kilometer(){
    choice = "6"
    converter()
}
function converter(){
    const meterUnit = Number(inMeter.value)
    if (meterUnit <= 0 || meterUnit == "" || isNaN(meterUnit)) {
        converterMeter.textContent = "Valor Inválido! Digitar valor maior que zero!"
        inModelo.focus();
        return;
    }

    switch (choice) {
        case "1":
            converterMeter.textContent = meterUnit + " m = " + meterUnit * 1000 + " mm"
            break
        case "2":
            converterMeter.textContent = meterUnit + " m = " + meterUnit * 100 + " cm"
            break
        case "3":
            converterMeter.textContent = meterUnit + " m = " + meterUnit * 10 + "dm"
            break
        case "4":
            converterMeter.textContent = meterUnit + " m = " + meterUnit / 10 + "dam"
            break
        case "5":
            converterMeter.textContent = meterUnit + " m = " + meterUnit / 100 + "hm"
            break
        case "6":
            converterMeter.textContent = meterUnit + " m = " + meterUnit / 1000 + "km"
            break
        default:
            converterMeter.textContent = "Error"
        }


}
//
// function outputConverter(){
//     outputConverter.textContent = converterMeter
// }
let btMilimeter = document.getElementById("btMilimeter")
let btCentimeter = document.getElementById("btCentimeter")
let btDecimeter = document.getElementById("btDecimeter")
let btDecameter = document.getElementById("btDecameter")
let btHectometer = document.getElementById("btHectometer")
let btKilometer = document.getElementById("btKilometer")
btMilimeter.addEventListener("click", milimeter)
btCentimeter.addEventListener("click", centimeter)
btDecimeter.addEventListener("click", decimeter)
btDecameter.addEventListener("click", decameter)
btHectometer.addEventListener("click", hectometer)
btKilometer.addEventListener("click", kilometer)