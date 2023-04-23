let queue = []
let option = ""

do {
    let patients = []
    for (let i = 0; i <= patients.length; i++){
        patients += (i+1) + "º -" + queue[i] +"\n"
    }
    option = prompt(patiente +"\nQual opção deseja?\n" +
        "1 ... Adicionar Paciente\n" +
        "2 ... Chamar Paciente\n" +
        "3 ... Sair")
    
    switch (option) {
        case "1":
            const patientNew = prompt("Qual o nome do paciente?")
            queue.push(patientNew)
            break
        case "2":
            if (!consultedPatient){
                alert("Não há paciente na fila!")
            } else {
                alert(consultedPatient + " removido da fila.")
            }
            break
        case "3":
            alert("Encerrando...")
            break
        default:
            alert("Opção Inválida")
            break
    }
} while (option !== "3")



