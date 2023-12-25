class User{
    constructor(name, email, password) {
        this.name = name
        this.email = email
        this.password = password
    }
    login(email, password){
        if ((email === this.email) && (password === this.password)){
            console.log("Login efetuado com sucesso")
        } else {
            console.log("Acesso negado")
        }

    }
}

const user01 = new User("Walescko", "walescko@walescko.com", "senhaehsenha")
console.log(user01)

console.log("Teste de Login com parametros corretos")
user01.login("walescko@walescko.com", "senhaehsenha")
console.log("Teste de Login com parametros incorretos")
user01.login("walescko@walescko.com", "senhaehenha")


