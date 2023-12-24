function cadastrarImoveis(){
    let imovel = {}
    imovel.proprietario = prompt("Nome do proprietario?")
    imovel.quartos = prompt("Quartos?")
    imovel.banheiros = prompt("Banheiros?")
    imovel.garagem = prompt("Garagem? (Sim/Não)")

    let confirmaImovel = confirm(
        "Deseja Salvar esse imóvel?\n" +
        "Proprietário: " + imovel.proprietario +
        "\nQuartos: " + imovel.quartos +
        "\nBanheiros: " + imovel.banheiros +
        "\nGaragem: " + imovel.garagem
    )
    imoveis.push(imovel)
}

function imoveisCadastrados(){
    console.table(imoveis)
    for (let i = 0; i < imoveis.length; i++){
        alert(
            "Imóvel " + (i+1) +
            "\nProprietário: " + imoveis[i].proprietario +
            "\nQuartos: " + imoveis[i].quartos +
            "\nBanheiros: " + imoveis[i].banheiros +
            "\nGaragem: " + imoveis[i].garagem
        )
    }
}

let imoveis = []
let option = ""

do{
    console.log("Total de Imóveis Cadastrado: " + imoveis.length)
    option = prompt("Imóveis \n" + "1 - Mostrar Imóveis\n" + "2 - Cadastrar Imóveis\n" + "3. Sair")
    switch (option) {
        case '1':
            console.log("Imóveis Cadastrados")
            imoveisCadastrados()
            break
        case '2':
            console.log("Cadastrar Imóveis")
            cadastrarImoveis()
            break
        case '3':
            console.log("bye bye!")
            break
        default:
            console.log("Seu burro! Opção inválida")
            alert("Opção inválida!")
    }
 } while (option != '3')

