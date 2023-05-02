function dobro(x){
    console.log("O dobro de " + x + " é " + (x*2))
}

dobro(5)
dobro(11)

function sayHello(name = "World"){
    console.log("Hello " + name + "!")
}
sayHello("Isaac")
sayHello()

function sum(a, b){
    console.log(a + " + " + b + " = " + (a+b))
}
sum(1,5)
sum(99, 99)

function createUser(name, email, password, type = "leitor"){
    const user = { name, email, password, type}
    console.log(user)
}

function newUser(name, type = "leitor", email, password){
    const user = { name, email, password, type}
    console.log(user)
}

createUser("Didisaac", "didisaac@email.com", "1234")
newUser("Didisaac", "didisaac@email.com", "1234")

// Ao criarmos uma função com muitos parâmetros,
// uma boa prática é substituí-los por um objeto
function parametrosDoJeitoErrado(nome, telefone, endereco, aniversario, email, senha) {
    // ...
}
function parametrosDoJeitoCerto(usuario) {
    // ...
}
// Além de facilitar na chamada da função, a ordem dos parâmetros se torna irrelevante
parametrosDoJeitoErrado("nome", "telefone", "endereco", "aniversario", "email", "senha")
const dadosDoUsuario = {
    nome: "",
    telefone: "",
    email: "",
    senha: "",
    aniversario: "",
    endereco: ""
}
parametrosDoJeitoCerto(dadosDoUsuario)