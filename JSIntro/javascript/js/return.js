function average(a, b){
    const average = (a+b)/2
    return average
}

const result = average(6, 4)
console.log(result)

function newProduct(name, price){
    const product = {
        name,
        price,
        estoque: 1
    }
    return product
}

const notebook = newProduct("Notebook pé da égua, Celeron, 4GB", 1500)
console.log(notebook)
