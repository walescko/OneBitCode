function tabuada(){
    let inNumber = document.getElementById("inNumber")
    let number = Number(inNumber.value)
    let table = ""
    for (let i = 1; i <= 20; i++){

        table += number + " * " + i + " = " + (number*i) + "\n"

    }
    console.log(table)
    alert("Tabuada do Número " + number +"\n\n" + table)

}

let roboticTable = document.getElementById("btTable")
roboticTable.addEventListener("click", tabuada)