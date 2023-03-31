let inCarName1 = document.getElementById("inCarName1");
let inCarSpeed1 = document.getElementById("inCarSpeed1");
let inCarName2 = document.getElementById("inCarName2");
let inCarSpeed2 = document.getElementById("inCarSpeed2");

function speed(){
    const carName1 = inCarName1.value;
    const carName2 = inCarName2.value;
    const carSpeed1 = Number(inCarSpeed1.value);
    const carSpeed2 = Number(inCarSpeed2.value);
    console.log("Carro 1: " + carName1 + " - Velocidade = " + carSpeed1 + "km/h");
    console.log("Carro 1: " + carName2 + " - Velocidade = " + carSpeed2 + "km/h");
    if (carSpeed1 === carSpeed2) {
        console.log("Os carros tem a mesma velocidade");
    }
    if (carSpeed2 < carSpeed1){
        console.log("O carro " + carName1 + " é o mais rápido.");
    }
    if (carSpeed2 > carSpeed1){
        console.log("O carro " + carName2 + " é o mais rápido.");
    }

}
let btResult = document.getElementById("btResult");
btResult.addEventListener("click", speed);