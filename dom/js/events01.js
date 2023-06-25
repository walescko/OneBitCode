function onMouseEnter(){
    console.log("Entrada do Mouse")
}

function onChange(){
    console.log("Mudança do elemento")
}
function onFocus(){
    console.log("Foco no Elemento")
}

function onBlur(){
    console.log("Saída do Elemento")
}

function onClick(){
    console.log("click")
}

function click(){
    alert("Você apenas clicou no botão que não faz nada!")
}

let btClick = document.getElementById("btClick")
btClick. addEventListener("click", click)