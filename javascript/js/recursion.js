function division(num){
    console.log(num)
    if (num % 2 === 0){
        division(num/2)
    } else {
        return num
    }
}

// division(1024)
function double(num){
    console.log(num)
    double(num*2)
}

double(1)
function click(){
    console.log("Não faz nada ao clicar no botão!")
    alert("Você apenas clicou no botão que não faz nada!")
}

let btClick = document.getElementById("btClick")
btClick. addEventListener("click", click)