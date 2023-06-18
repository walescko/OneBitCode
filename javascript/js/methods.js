let pessoa = {
    nome: "Isaac",
    idade: 26,
    sayHello() {
        console.log("Hello World, meu nome é " + this.nome)
    }
}
console.log(pessoa)
pessoa.sayHello()


function click(){
    alert("Você apenas clicou no botão que não faz nada!")
}

let btClick = document.getElementById("btClick")
btClick. addEventListener("click", click)