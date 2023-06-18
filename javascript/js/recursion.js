function division(num){
    console.log(num)
    if (num % 2 === 0){
        division(num/2)
    } else {
        return num
    }
}

// division(1024)
function double(num, i) {
  console.log(num);
  if (i === 1) {
    return num;
  } else {
    return double(num * 2, i - 1);
  }
}
double(2, 10);
function click(){
    console.log("Não faz nada ao clicar no botão!")
    alert("Você apenas clicou no botão que não faz nada!")
}

let btClick = document.getElementById("btClick")
btClick. addEventListener("click", click)